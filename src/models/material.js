"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      material.belongsToMany(models.user, {
        through: models.user_progress,
        foreignKey: "material_id",
        as: "users",
      });
      material.hasMany(models.user_progress, {
        foreignKey: "material_id",
        as: "userProgress",
      });
      material.belongsTo(models.sub_bab, {
        foreignKey: "sub_bab_id",
        as: "subBab",
      });
    }
  }
  material.init(
    {
      name: DataTypes.STRING,
      jenis_material: DataTypes.STRING,
      xp: DataTypes.INTEGER,
      gold: DataTypes.INTEGER,
      sub_bab_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "material",
      underscored: true,
    }
  );
  return material;
};
