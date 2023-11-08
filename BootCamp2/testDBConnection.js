/* Import Sequalize and other libraires */
//Syntax for importing ES Modules - https://www.geeksforgeeks.org/how-to-use-an-es6-import-in-node-js/
import { Sequelize, Model, DataTypes } from '@sequelize/core';

//imports dontenv module and allows us to access stored environment variables stored in .env file
import 'dotenv/config';

/* Connect to your database 
  See: Sequalize Getting Started - Connecting to a database by passing a URI - Read: https://sequelize.org/docs/v6/getting-started/#connecting-to-a-database
  Copy URI/URL string from ElephantSQL - under details. 
  Security Best Practice: Don't use the URL/URI string (postgres://username:password@hostname/databasename) directly in applciation code. Store the database URL as the API_URL environment variable within the .env file. 
  BAD Implementation - const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
  Good Implementation - const sequelize = new Sequelize(process.env.API_URL);
  Read - artilce to learn more about environment variables - https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
*/
const sequelize = new Sequelize(process.env.API_URL);

//Testing that the .env file is working - This should print out the port number
console.log(process.env.PORT); //Should print out 8080 
console.log(process.env.API_Key); //Should print out "Key Not set - starter code only"

try {
    /* Testing the Connection
       See details in the Sequelize Docs - https://sequelize.org/docs/v6/getting-started/#testing-the-connection
    */
       await sequelize.authenticate();
       console.log('Connection has been established successfully.'); // You should see this in the terminal if you have successfully connected to the database. 
     } catch (error) {
       console.error('Unable to connect to the database:', error);
 } 