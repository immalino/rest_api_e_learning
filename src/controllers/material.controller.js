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
  console.log(req.user.id);

  const material = await MaterialModel.findAll({
    attributes: [
      "id",
      "name",
      "jenis_material",
      "xp",
      "gold",
      [
        MaterialModel.sequelize.literal(
          `CASE WHEN userProgress.selesai IS NOT NULL THEN 'Selesai' ELSE 'Belum Selesai' END`
        ),
        "status",
      ],
    ],
    include: [
      {
        model: UserProgressModel,
        as: "userProgress",
        attributes: [],
        required: false, // LEFT JOIN
        where: { user_id: req.user.id }, // Specify the user_id here
      },
    ],
    where: {
      sub_bab_id: id_sub_bab, // Specify the sub_bab_id here
    },
  });

  // console.log("material", material);

  const data = material.map((m) => {
    return {
      id: m.id,
      name: m.name,
      // selesai: m.userProgress.selesai,
    };
  });

  return res.send({
    message: "Success",
    data: material,
  });
};

module.exports = { index };
