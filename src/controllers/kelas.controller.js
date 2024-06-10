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
  });

  const mode_pembelajaran = await ModePembelajaranModel.findAll({
    attributes: ["id", "name", "kelas_id"],
  });

  const data = kelas.map((k) => {
    return {
      id: k.id,
      name: k.name,
      modePembelajaran: mode_pembelajaran
        .filter((m) => m.kelas_id === k.id)
        .map((m) => {
          return {
            id: m.id,
            name: m.name,
          };
        }),
    };
  });

  return res.send({
    message: "Success",
    data,
  });
};

module.exports = { index };
