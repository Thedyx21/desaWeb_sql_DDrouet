'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class etiqueta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsToMany(models.Foto, { through: 'fotoetiqueta', foreignKey: 'etiqueta_id' });
    }
  }
  etiqueta.init({
    texto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'etiqueta',
    tableName: 'etiqueta',
  });
  return etiqueta;
};