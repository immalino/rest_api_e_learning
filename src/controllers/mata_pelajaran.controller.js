const { where } = require("sequelize");
const { mata_pelajaran: MapelModel } = require("../models");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const index = async (req, res, next) => {
  let { id_mode_pembelajaran: id_mode } = req.query;

  const mata_pelajaran = await MapelModel.findAll({
    attributes: ["id", "name"],
    where: {
      mode_pembelajaran_id: id_mode,
    },
  });

  const data = mata_pelajaran.map((m) => {
    return {
      id: m.id,
      name: m.name,
    };
  });

  return res.send({
    message: "Success",
    data,
  });
};

module.exports = { index };
