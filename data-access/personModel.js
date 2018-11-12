const connection = require('./da')
const Sequelize = require('sequelize');
const parentsModel = require('./parentsModel')

// class Citizen {
//     construtor() {
//         this.model = connection.define("citizen", {
//             userName: { type: Sequelize.STRING },
//             imgUrl: { type: Sequelize.STRING }
//         })
//         this.setReletionships();
//     }

//     setReletionships() {
//         this.model.belongsToMany(this.model,
//             { through: parentsModel.model, as: 'parent', foreignKey: 'childId' })
//         this.model.belongsToMany(this.model,
//             { through: parentsModel.model, as: 'child', foreignKey: 'parentId' })

//     }
// }

// const citizen = new Citizen()
// console.log(citizen.model)




citizen = connection.define("citizen", {
    userName: { type: Sequelize.STRING },
    imgUrl: { type: Sequelize.STRING }
})

citizen.belongsToMany(citizen,
    { through: parentsModel, as: 'parent', foreignKey: 'childId' })
citizen.belongsToMany(citizen,
    { through: parentsModel, as: 'child', foreignKey: 'parentId' })

// citizen.sync({force:true})
// parentsModel.sync({force:true})


module.exports = (citizen);