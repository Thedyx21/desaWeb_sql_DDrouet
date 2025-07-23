const { Foto, etiqueta } = require('../models');

module.exports = {
  // Respuesta JSON
  async findByIdJson(req, res) {
    try {
      const id = req.params.id;
      const foto = await Foto.findByPk(id, {
        include: etiqueta
      });

      if (!foto) {
        return res.status(404).json({ error: 'Foto no encontrada' });
      }

      res.json(foto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error del servidor' });
    }
  },

  // Render vista HTML
  async findByIdView(req, res) {
    try {
      const id = req.params.id;
      const foto = await Foto.findByPk(id, {
        include: etiqueta
      });

      if (!foto) {
        return res.status(404).send('Foto no encontrada');
      }

      res.render('foto', { foto });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error del servidor');
    }
  }
};