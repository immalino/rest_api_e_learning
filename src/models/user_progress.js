"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_progress.belongsTo(models.user, {
        foreignKey: "user_id",
      });
      user_progress.belongsTo(models.material, {
        foreignKey: "material_id",
      });
    }
  }
  user_progress.init(
    {
      user_id: DataTypes.INTEGER,
      material_id: DataTypes.INTEGER,
      selesai: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "user_progress",
      underscored: true,
    }
  );
  return user_progress;
};
