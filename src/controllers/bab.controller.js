const { where } = require("sequelize");
const {
  bab: BabModel,
  sub_bab: SubBabModel,
  material: MaterialModel,
  user_progress: UserProgressModel,
} = require("../models");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const index = async (req, res, next) => {
  let { id_mata_pelajaran: id_mapel } = req.query;

  const bab = await BabModel.findAll({
    attributes: ["id", "name"],
    include: [
      {
        association: "subBab",
        required: true,
        attributes: ["id", "name", "label_gratis"],
        include: [
          {
            association: "material",
            attributes: ["id", "name"],
            include: [
              {
                association: "userProgress",
                attributes: ["user_id", "material_id", "selesai"],
                where: {
                  user_id: req.user.id,
                },
              },
            ],
          },
        ],
      },
    ],
    where: {
      mata_pelajaran_id: id_mapel,
    },
  });

  // console.log(bab);

  const data = bab.map((bab) => {
    const freeSubBabCount = bab.subBab.filter(
      (subBab) => subBab.label_gratis
    ).length;

    let completedMaterialCount = 0;
    let totalMaterialCount = 0;
    bab.subBab.forEach((subBab) => {
      subBab.material.forEach((material) => {
        totalMaterialCount++;
        if (material.selesai) {
          completedMaterialCount++;
        }
      });
    });
    const progress =
      totalMaterialCount > 0 ? completedMaterialCount / totalMaterialCount : 0;

    return {
      id: bab.id,
      name: bab.name,
      freeSubBabCount: freeSubBabCount,
      progress: progress,
      test: bab.subBab.material,
    };
  });

  return res.send({
    message: "Success",
    data,
  });
};

module.exports = { index };
