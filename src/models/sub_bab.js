"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sub_bab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      sub_bab.belongsTo(models.bab, {
        foreignKey: "bab_id",
        as: "bab",
      });
      sub_bab.hasMany(models.material, {
        foreignKey: "sub_bab_id",
        as: "material",
      });
    }
  }
  sub_bab.init(
    {
      name: DataTypes.STRING,
      bab_id: DataTypes.INTEGER,
      label_gratis: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "sub_bab",
      underscored: true,
    }
  );
  return sub_bab;
};
