const { raw } = require('mysql2')
const db = require('../../database/models')
const { where } = require('sequelize')

 module.exports =  {

    getCategories: async (req, res) => {
    let categories = await db.Category.findAll()
  
    res.json({
      count: categories.length,
      categories
    })
    }, 

    

    
      
    }
      
