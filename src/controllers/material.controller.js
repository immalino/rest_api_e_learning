const { where } = require("sequelize");
const {
  material: MaterialModel,
  user_progress: UserProgressModel,
} = require("../models");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const index = async (req, res, next) => {
  let { id_sub_bab } = req.query;

  const material = await MaterialModel.findAll({
    attributes: [
      "id",
      "name",
      "jenis_material",
      "xp",
      "gold",
      [
        MaterialModel.sequelize.literal(
          `CASE WHEN userProgress.selesai IS NOT NULL AND userProgress.selesai = 1 THEN 'Selesai' ELSE 'Belum Selesai' END`
        ),
        "status",
      ],
    ],
    include: [
      {
        model: UserProgressModel,
        as: "userProgress",
        attributes: [],
        required: false,
        where: { user_id: req.user.id },
      },
    ],
    where: {
      sub_bab_id: id_sub_bab,
    },
  });

  return res.send({
    message: "Success",
    data: material,
  });
};

module.exports = { index };
