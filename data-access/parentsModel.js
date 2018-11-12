const connection=require('./da') 
const Sequelize = require('sequelize');

// class ParentsModel {
//     construtor(){
//         this.model=connection.define("parentChildren", {})
//     }}

// const parentsModel = new ParentsModel()

const parent=connection.define("parentChildren", {})


module.exports =(parent);