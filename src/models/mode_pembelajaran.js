"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mode_pembelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      mode_pembelajaran.belongsTo(models.kelas, {
        foreignKey: "kelas_id",
        as: "kelas",
      });
      mode_pembelajaran.hasMany(models.mata_pelajaran, {
        foreignKey: "mode_pembelajaran_id",
        as: "mataPelajaran",
      });
    }
  }
  mode_pembelajaran.init(
    {
      name: DataTypes.STRING,
      kelas_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "mode_pembelajaran",
      underscored: true,
    }
  );
  return mode_pembelajaran;
};
