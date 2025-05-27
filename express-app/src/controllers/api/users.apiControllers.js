
const { raw } = require('mysql2');
const db = require('../../database/models')

module.exports =  {
  
  getUsers: async (req, res) => {
    try {
      let users = await db.User.findAll({
        attributes: { exclude: ["password", "firstName" , "lastName", "description" , "headline"],  //Se excluye la propiedad password para que no se muestre
    
         },
         raw: true,
      }                                        
        
      )

    /* const usersMap = users.map(user => { //.map() retorna el array con los elementos modificados
       return { 
        ...user, 
        urlAvatar: `http:localhost:3000/database/images/users/${user.avatar}`,
        url: `http:localhost:3000/api/users/${user.id}`
       }
      });
*/
    //Devuelve el mismo resultado sin hacer un nuevo espacio de memoria con el .map()
    users.forEach(user => {
      user.urlAvatar = `http://localhost:3000/database/images/users/${user.avatar}`,
      user.url =  `http://localhost:3000/api/users/profile/${user.id}`


    })
      res.json({
        count: users.length,
        //users: usersMap,
        users: users,
      });
    } catch (error) {
      console.log(error);
      
    }
   
  },

  profile: async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id,
  {
    attributes: { exclude: ["password"], } //Se excluye la propiedad password para que no se muestre

  }
 );
 res.json(user)

  } catch (error) {
    console.log(error);
    
  }
 
    
    },
    
    


   
    

   
    


}