import {Sequelize} from "sequelize";

const db = new Sequelize('mern_db','damli','Dam@09031996',{
    host: "localhost",
    dialect:"mysql"
})

export default db;