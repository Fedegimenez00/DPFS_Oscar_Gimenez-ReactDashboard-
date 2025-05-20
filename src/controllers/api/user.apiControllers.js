const db = require("../../database/models");

const userController = {
  // Endpoint: /api/users
  getUsers: async (req, res) => {
    try {
      const users = await db.User.findAll({
        attributes: {
          exclude: ["password"],
          include: [
            [
              db.sequelize.literal(
                `CONCAT('http://localhost:4000/images/users/', avatar)`
              ),
              "urlAvatar",
            ],
            [
              db.sequelize.literal(
                `CONCAT('http://localhost:4000/api/users/profile/', id)`
              ),
              "url",
            ],
          ],
        },
      });

      res.json({
        count: users.length,
        users,
      });
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  },

  // Endpoint: /api/users/profile/:id
  profile: async (req, res) => {
    try {
      const user = await db.User.findByPk(req.params.id, {
        attributes: {
          exclude: ["password"],
          include: [
            [
              db.sequelize.literal(
                `CONCAT('http://localhost:4000/images/users/', avatar)`
              ),
              "urlAvatar",
            ],
            [
              db.sequelize.literal(
                `CONCAT('http://localhost:4000/api/users/profile/', id)`
              ),
              "url",
            ],
          ],
        },
      });

      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      res.json(user);
    } catch (error) {
      console.error("Error al obtener perfil de usuario:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  },
};

module.exports = userController;
