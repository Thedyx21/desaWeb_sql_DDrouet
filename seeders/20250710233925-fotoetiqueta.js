'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let[fotos, fotos_metadata] = await queryInterface.sequelize.query('SELECT id FROM fotos');
    let[etiqueta, etiquetas_metadata] = await queryInterface.sequelize.query('SELECT id FROM etiqueta');

     let fotoetiqueta = [];
    for (let foto of fotos) {
      // Selecciona dos etiquetas aleatorias y distintas
      let indices = [];
      while (indices.length < 2) {
        let idx = Math.floor(Math.random() * etiqueta.length);
        if (!indices.includes(idx)) indices.push(idx);
      }
      for (let i of indices) {
        fotoetiqueta.push({
          foto_id: foto.id,
          etiqueta_id: etiqueta[i].id,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }

    await queryInterface.bulkInsert('fotoetiqueta', fotoetiqueta, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fotoetiqueta', null, {});
  }
};
