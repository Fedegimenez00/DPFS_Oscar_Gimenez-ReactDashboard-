const { raw } = require('mysql2')
const db = require('../../database/models')
const { where } = require('sequelize')

 module.exports =  {

    getCategories: async (req, res) => {
    let categories = await db.Category.findAll(
     { attributes: { exclude: ["fontColor", "catalogWallpaper", "detailBackgroundColor"]},
      raw: true,
    })

     categories.forEach(cat => {
      cat.iconUrl = `http://localhost:3000/imgs/Icons/${cat.icon}`
      cat.url = `http://localhost:3000/api/categories/${cat.id}`


    })
    res.json({
      count: categories.length,
      categories: categories
    })
  
   
    }, 

   getProductsByCategory: async (req, res) => {
  const categoryId = req.params.id;

  try {
    // Obtener categoría aparte
    const category = await db.Category.findByPk(categoryId, {
      attributes: {
        exclude: ["icon", "description", "fontColor", "detailBackgroundColor",
          "backgroundColor", "borderColor"
        ], //Propiedades de la categoría principal
      },
      raw: true,
    });

    if (!category) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }

    // Agregar campo URL del wallpaper
    category.catalogWallpaperUrl = `http://localhost:3000/imgs/wallpapers/categories/${category.catalogWallpaper}`;
    
    // Obtener productos de esa categoría
    let products = await db.Product.findAll({
      where: { category_id: categoryId },
      include: [
        "languages",
        {
          association: "users",
          attributes: {
            exclude: [
              "password",
              "createdAt",
              "updatedAt",
              "firstName",
              "lastName",
              "description",
              "headline",
              "email",
              "avatar",
              "role",
            ],
          },
        },
        {
          association: "categories", //Propiedad categoría proveniente de un producto
          attributes: {
            exclude: ["description", "icon", "backgroundColor",
              'detailBackgroundColor', 'borderColor', "fontColor",
              "catalogWallpaper",
            ],
          },
        },
      ],
      attributes: {
        exclude: [
          "category_id",
          "subcategory_id",
          "language_id",
          "user_id",
          "price",
          "available",
          "rating",
          "reviews",
          "timesBought",
          "createdAt",
          "updatedAt",
          "deletedAt",
        ],
      },
      raw: true,
      nest: true,
    });

    products.forEach((prod) => {
      prod.imageUrl = `http://localhost:3000/database/images/courses/${prod.image}`;
      prod.url = `http://localhost:3000/api/products/detail/${prod.id}`;
    });

    // Respuesta final
    res.json({
      category,
      count: products.length,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los productos" });
  }
}



    
      
    }
      
