const {sequelize} = require('../../core/db')
const {Sequelize,Model,} = require('sequelize')


class HotBook extends Model{
   
}

HotBook.init({
    index: Sequelize.INTEGER,
    image: Sequelize.STRING,
    author: Sequelize.STRING,
    title: Sequelize.STRING,
    summary: Sequelize.STRING
},{
    sequelize,
    tableName:'hot_book'
})

module.exports = {
    HotBook
}
// 排序 重要