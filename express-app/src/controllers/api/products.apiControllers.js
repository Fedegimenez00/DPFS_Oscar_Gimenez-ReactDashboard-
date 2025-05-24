const { raw } = require('mysql2')
const db = require('../../database/models')

const productController = {

    getProducts: async (req, res) => {
    let products = await db.Product.findAll({
       include: [ "languages", 
      { association: "users", //Excluye de forma más específica las asociaciones incluidas
      attributes: { exclude: ["password", "createdAt", "updatedAt", "firstName" , "lastName", "description" , "headline",
        "email", "avatar", "role"
      ] },
      },
      {
        association: "categories",
        attributes: { exclude: ["detailBackgroundColor", "fontColor", "description",
          "icon", "catalogWallpaper"
        ]}
      },
      
    ],
          attributes: { exclude: ["category_id", "subcategory_id", "language_id", "user_id", "price", "available",
            "rating", "reviews", "timesBought", "createdAt", "updatedAt", "deletedAt"
            
          ],
    },
    raw: true,
  })

  products.forEach(prod => {
      prod.imageUrl = `http:localhost:3000/database/images/courses/${prod.image}`,
      prod.url =  `http:localhost:3000/api/products/${prod.id}`


    })
    res.json({
      count: products.length,
      products: products
    })
    }, 

    show: async (req, res) => {
      try
      { //Productos de la base de datos de SQL
      
        let myProduct = await db.Product.findByPk(req.params.id, {     //Filtra por la id
          include: ["categories", "subcategories", "languages", 
      {association: "users", //Excluye de forma más específica las asociaciones incluidas
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      }
    ],
          attributes: { exclude: ["category_id", "subcategory_id", "language_id", "user_id", 
            
          ], }
        }); 
      
      //Devuelve el producto en un JSON
        res.json(myProduct);
     
      } catch (error){
        console.log(error);
      }
    
      },

      
    }
      
    


module.exports = productController;
