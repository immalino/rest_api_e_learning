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
    attributes: [
      "id",
      "name",
      [
        BabModel.sequelize.fn(
          "COUNT",
          BabModel.sequelize.fn("DISTINCT", BabModel.sequelize.col("subBab.id"))
        ),
        "total_sub_bab",
      ],
      [
        BabModel.sequelize.fn(
          "SUM",
          BabModel.sequelize.fn(
            "DISTINCT",
            BabModel.sequelize.col("subBab.label_gratis")
          )
        ),
        "total_sub_bab_gratis",
      ],
      [
        BabModel.sequelize.fn(
          "SUM",
          BabModel.sequelize.col("subBab.material.userProgress.selesai")
        ),
        "total_completed",
      ],
      [
        BabModel.sequelize.fn(
          "COUNT",
          BabModel.sequelize.col("subBab.material.id")
        ),
        "total_materials",
      ],
    ],
    include: [
      {
        model: SubBabModel,
        as: "subBab",
        attributes: [],
        required: true,
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
                required: false,
                where: { user_id: req.user.id },
              },
            ],
          },
        ],
      },
    ],
    where: {
      mata_pelajaran_id: id_mapel,
    },
    group: ["bab.id"],
  });

  // console.log(bab);

  const data = bab.map((bab) => ({
    id: bab.id,
    name: bab.name,
    total_sub_bab: bab.get("total_sub_bab"),
    total_sub_bab_gratis: bab.get("total_sub_bab_gratis"),
    progress: (
      parseInt(bab.get("total_completed")) / bab.get("total_materials") ||
      0
    ).toFixed(1),
  }));

  return res.send({
    message: "Success",
    data,
  });
};

module.exports = { index };
