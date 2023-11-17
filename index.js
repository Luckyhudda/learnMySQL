const exress = require('express');
const sequelize = require('./db/mySQL');

const app = exress();



const connectToDb = async() =>{
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }

};
connectToDb();


app.listen(3000, () =>{
    console.log('server Started...')
});