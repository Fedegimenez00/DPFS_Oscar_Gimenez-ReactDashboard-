module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "Neron",
          email: "mail@mail.com",
          password: '$2b$10$hcAYB97yFrHwzthDfZVZROQSqNocLkQLIj7Lu79gD.N4olP0Qt0Wa',
          avatar: "default.png",
          role: 0,
          description: "Esta es una descripción",
          firstName: 'Jhon',
          lastName: 'Smith',
          headline: 'Experto en codear',
   
        },
        {
        id: 2,
        name: 'AdaLover',
        email: 'ada@lovelace.com',
        password: '$2b$10$hcAYB97yFrHwzthDfZVZROQSqNocLkQLIj7Lu79gD.N4olP0Qt0Wa',
        avatar: 'user-avatar-8.svg',
        role: 1,
        description: 'Primera programadora de la historia.',
        firstName: 'Ada',
        lastName: 'Lovelace',
        headline: 'Visionaria matemática',
       
      },
      {
        id: 3,
        name: 'TuringFan',
        email: 'alan@turing.com',
        password: '$2b$10$hcAYB97yFrHwzthDfZVZROQSqNocLkQLIj7Lu79gD.N4olP0Qt0Wa',
        avatar: 'user-avatar-robot.svg',
        role: 1,
        description: 'Me encantan los acertijos.',
        firstName: 'Alan',
        lastName: 'Turing',
        headline: 'Criptógrafo legendario',
      
      },
      {
        id: 4,
        name: 'LinusTech',
        email: 'linus@linux.com',
        password: '$2b$10$hcAYB97yFrHwzthDfZVZROQSqNocLkQLIj7Lu79gD.N4olP0Qt0Wa',
        avatar: 'user-avatar-devil.svg',
        role: 0,
        description: 'Creador de Linux y amante de los kernels.',
        firstName: 'Linus',
        lastName: 'Torvalds',
        headline: 'Ingeniero de sistemas',
     
      },
      {
        id: 5,
        name: 'GraceCode',
        email: 'grace@hopper.com',
        password: '$2b$10$hcAYB97yFrHwzthDfZVZROQSqNocLkQLIj7Lu79gD.N4olP0Qt0Wa',
        avatar: 'user-avatar-glad.svg',
        role: 1,
        description: 'Inventé el compilador.',
        firstName: 'Grace',
        lastName: 'Hopper',
        headline: 'Almirante de la informática',
       
      },
      {
        id: 6,
        name: 'CodeMaster',
        email: 'coder@pro.com',
        password: '$2b$10$hcAYB97yFrHwzthDfZVZROQSqNocLkQLIj7Lu79gD.N4olP0Qt0Wa',
        avatar: 'user-avatar-neutral.svg',
        role: 0,
        description: 'Todo el día frente a la terminal.',
        firstName: 'Max',
        lastName: 'Devlin',
        headline: 'Full Stack Developer',
      
      },
      {
        id: 7,
        name: 'SaraScripts',
        email: 'sara@dev.io',
        password: '$2b$10$hcAYB97yFrHwzthDfZVZROQSqNocLkQLIj7Lu79gD.N4olP0Qt0Wa',
        avatar: 'user-avatar-alien.svg',
        role: 0,
        description: 'Frontend lover.',
        firstName: 'Sara',
        lastName: 'Lopez',
        headline: 'UI/UX Ninja',
        
      },
      {
        id: 8,
        name: 'DebugDan',
        email: 'dan@debug.com',
        password: '$2b$10$hcAYB97yFrHwzthDfZVZROQSqNocLkQLIj7Lu79gD.N4olP0Qt0Wa',
        avatar: 'user-avatar-clown.svg',
        role: 0,
        description: '¿Bug o feature?',
        firstName: 'Daniel',
        lastName: 'Bugsworth',
        headline: 'QA Engineer',
     
      },
      {
        id: 9,
        name: 'CloudChaser',
        email: 'cloud@devops.com',
        password: '$2b$10$hcAYB97yFrHwzthDfZVZROQSqNocLkQLIj7Lu79gD.N4olP0Qt0Wa',
        avatar: 'user-avatar-amazed.svg',
        role: 1,
        description: 'Amo los pipelines.',
        firstName: 'Nina',
        lastName: 'Sky',
        headline: 'DevOps Specialist',
      
      },
      {
        id: 10,
        name: 'ReactRick',
        email: 'rick@frontend.com',
        password: '$2b$10$hcAYB97yFrHwzthDfZVZROQSqNocLkQLIj7Lu79gD.N4olP0Qt0Wa',
        avatar: 'user-avatar-1.svg',
        role: 0,
        description: 'React es vida.',
        firstName: 'Rick',
        lastName: 'Component',
        headline: 'React Developer',
   
      },
      {
        id: 11,
        name: 'DataDora',
        email: 'dora@data.com',
        password: '$2b$10$hcAYB97yFrHwzthDfZVZROQSqNocLkQLIj7Lu79gD.N4olP0Qt0Wa',
        avatar: 'avatar-1745508074555.svg',
        role: 1,
        description: 'Los datos mandan.',
        firstName: 'Dora',
        lastName: 'Numbers',
        headline: 'Data Scientist',
      
      }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};