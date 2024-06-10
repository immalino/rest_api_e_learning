"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      bab.belongsTo(models.mata_pelajaran, {
        foreignKey: "mata_pelajaran_id",
        as: "mataPelajaran",
      });
      bab.hasMany(models.sub_bab, {
        foreignKey: "bab_id",
        as: "subBab",
      });
    }
  }
  bab.init(
    {
      name: DataTypes.STRING,
      mata_pelajaran_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "bab",
      underscored: true,
    }
  );
  return bab;
};
