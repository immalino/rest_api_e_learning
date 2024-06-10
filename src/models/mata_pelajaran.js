"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mata_pelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mata_pelajaran.belongsTo(models.mode_pembelajaran, {
        foreignKey: "mode_pembelajaran_id",
        as: "modePembelajaran",
      });
      mata_pelajaran.hasMany(models.bab, {
        foreignKey: "mata_pelajaran_id",
        as: "bab",
      });
    }
  }
  mata_pelajaran.init(
    {
      name: DataTypes.STRING,
      mode_pembelajaran_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "mata_pelajaran",
      underscored: true,
    }
  );
  return mata_pelajaran;
};
