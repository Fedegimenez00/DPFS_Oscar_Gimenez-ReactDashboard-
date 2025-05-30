const { raw } = require('mysql2')
const db = require('../../database/models')
const { where } = require('sequelize')

module.exports =  {

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
  let categories = await db.Category.findAll({
    attributes: ["id", "name"],
    raw: true
  });

  products.forEach(prod => {
      prod.imageUrl = `http://localhost:3000/database/images/courses/${prod.image}`,
      prod.url =  `http://localhost:3000/api/products/detail/${prod.id}`


    })

  let countByCategory = {};
  categories.forEach(category => {
    countByCategory[category.name] = 0;
  });

  products.forEach(prod => {
    const categoryName = prod["categories.name"];
    if (categoryName) {
      countByCategory[categoryName]++;
    }
  });

    res.json({
      count: products.length,
      countByCategory,
      products: products
    })
    }, 

   show: async (req, res) => {
  try {
    let myProduct = await db.Product.findByPk(req.params.id, {
      include: [
         {
          association: "users",
          attributes: { exclude: ["password", "createdAt", "updatedAt", 'email',
            'avatar', 'role', 'description', 'firstName', 'lastName', 'headline'
          ] }
        },
         {
          association: "categories",
          attributes: { exclude: ["description", "icon", "catalogWallpaper", "detailBackgroundColor",
            "fontColor"
          ] }
        },
        {
          association: "subcategories",
          attributes: { exclude: ['description', 'category_id']}
        },
        "languages",
       
      ],
      attributes: {
        exclude: [
          "category_id",
          "subcategory_id",
          "language_id",
          "user_id",
          'available',
          'rating',
          'reviews',
          'timesBought'
        ]
      },
      raw: true,
      nest: true  // Agrupa de forma ordenada los datos en vez de aplanarlos por el raw
    });

    myProduct.imageUrl = `http://localhost:3000/database/images/courses/${myProduct.image}`;

    //Devuelve el producto en un JSON
    res.json(myProduct);

  } catch (error) {
    console.error(error);
   
  }
},


    lastProduct: async (req, res) => {
      try
      { //Productos de la base de datos de SQL
      
        let myProduct = await db.Product.findOne({     //Filtra por la id
          include: [
         {
          association: "users",
          attributes: { exclude: ["password", "createdAt", "updatedAt", 'email',
            'avatar', 'role', 'description', 'firstName', 'lastName', 'headline'
          ] }
        },
         {
          association: "categories",
          attributes: { exclude: ["description", "icon", "catalogWallpaper", "detailBackgroundColor",
            "fontColor"
          ] }
        },
        {
          association: "subcategories",
          attributes: { exclude: ['description', 'category_id']}
        },
        "languages",
       
      ],
      attributes: {
        exclude: [
          "category_id",
          "subcategory_id",
          "language_id",
          "user_id",
          'available',
          'rating',
          'reviews',
          'timesBought'
        ]
      },
          order: [ ['id', 'DESC']],
          raw: true,
          nest: true
        });

      myProduct.imageUrl = `http://localhost:3000/database/images/courses/${myProduct.image}`;
      
      //Devuelve el producto en un JSON
        res.json(myProduct);
     
      } catch (error){
        console.log(error);
      }
    
      },
      
    }
      
    



