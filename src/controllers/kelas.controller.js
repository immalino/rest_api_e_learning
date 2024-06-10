const {
  kelas: KelasModel,
  mode_pembelajaran: ModePembelajaranModel,
} = require("../models");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const index = async (req, res, next) => {
  const kelas = await KelasModel.findAll({
    attributes: ["id", "name"],
    include: [
      {
        model: ModePembelajaranModel,
        as: "modePembelajaran",
        attributes: ["id", "name", "kelas_id"],
      },
    ],
  });

  return res.send({
    message: "Success",
    data: kelas,
  });
};

module.exports = { index };
