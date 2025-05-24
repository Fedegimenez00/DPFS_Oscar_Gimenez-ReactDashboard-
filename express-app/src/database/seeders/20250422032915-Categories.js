'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        { name: "Fundamentos de la Ciberseguridad",
          backgroundColor: 'var(--color-magentaTranslucido)',
          detailBackgroundColor: 'var(--color-magentaMuyTranslucido)',
          borderColor: 'var(--color-magenta)',
          fontColor: 'var(--color-rosaClaro)',
          description: 'Conceptos básicos para iniciar en ciberseguridad',
          icon: 'Classroom.png',
          catalogWallpaper: 'fundamentalsCybersecurityWallpaper.webp' ,
        },
        { name: "Seguridad Ofensiva",
          backgroundColor: 'var(--color-rojoAtaqueTranslucido)',
          detailBackgroundColor: 'var(--color-rojoAtaqueMuyTranslucido)',
          borderColor: 'var(--color-rojoAtaque)',
          fontColor: 'var(--color-rojoClaro)',
          description: 'Simula ataques para detectar vulnerabilidades reales',
          icon: 'Accuracy.png',
          catalogWallpaper: 'offensiveSecurityWallpaper.jpg' ,
        },
        { name: "Seguridad Defensiva",
          backgroundColor: 'var(--color-celesteDefensaTranslucido)',
          detailBackgroundColor: 'var(--color-celesteDefensaMuyTranslucido)',
          borderColor: 'var(--color-celesteDefensa)',
          fontColor: 'var(--color-celesteClaro)',
          description: 'Protege sistemas frente a amenazas y ataques',
          icon: 'Security Lock.png',
          catalogWallpaper: 'defensiveSecurityWallpaper.png' ,
         },
        { name: "Seguridad de Nube",
          backgroundColor: 'var(--color-amarilloNubeTranslucido)',
          detailBackgroundColor: 'var(--color-amarilloNubeMuyTranslucido)',
          borderColor: 'var(--color-amarilloNube)',
          fontColor: 'var(--color-amarilloClaro)',
          description: 'Asegura plataformas y servicios en la nube',
          icon: '/imgs/Icons/Cloud Development.png',
          catalogWallpaper: 'cloudSecurityWallpaper.jpg' ,
        },
        { name: "Ingeniería Social",
          backgroundColor: 'var(--color-verdeSocialTranslucido)',
          detailBackgroundColor: 'var(--color-verdeSocialMuyTranslucido)',
          borderColor: 'var(--color-verdeSocial)',
          fontColor: 'var(--color-verdeClaro)',
          description: 'Estudia y previene manipulaciones humanas en seguridad',
          icon: '/imgs/Icons/Safety Collection Place.png',
          catalogWallpaper: 'socialEngineeringWallpaper.webp' ,
        },
      ],
      
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  }
};
