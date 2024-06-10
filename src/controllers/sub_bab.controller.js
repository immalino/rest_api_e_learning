const { where } = require("sequelize");
const {
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
  let { id_bab } = req.query;
  console.log(req.user.id);

  const sub_bab = await SubBabModel.findAll({
    attributes: [
      "id",
      "name",
      "label_gratis",
      [
        SubBabModel.sequelize.fn(
          "SUM",
          SubBabModel.sequelize.col("material.userProgress.selesai")
        ),
        "total_completed",
      ],
      [
        SubBabModel.sequelize.fn(
          "COUNT",
          SubBabModel.sequelize.col("material.id")
        ),
        "total_materials",
      ],
    ],
    include: [
      {
        model: MaterialModel,
        as: "material",
        attributes: [],
        required: true,
        include: [
          {
            model: UserProgressModel,
            as: "userProgress",
            attributes: [],
            required: false, // LEFT JOIN
            where: { user_id: req.user.id }, // Specify the user_id here
          },
        ],
      },
    ],
    where: {
      bab_id: id_bab,
    },
    group: ["sub_bab.id"],
  });

  // console.tab("sub_bab", sub_bab);

  const data = sub_bab.map((subBab) => ({
    id: subBab.id,
    name: subBab.name,
    label_gratis: subBab.label_gratis,
    total_completed: subBab.total_completed,
    total_materials: subBab.total_materials,
    progress:
      subBab.total_materials === 0
        ? 0
        : subBab.total_completed / subBab.total_materials,
  }));

  return res.send({
    message: "Success",
    sebelumMapping: sub_bab,
    setelahMapping: data,
  });
};

module.exports = { index };
