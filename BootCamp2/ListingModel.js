/* Import Sequalize and other libraires */
// Syntax for importing ES Modules - https://www.geeksforgeeks.org/how-to-use-an-es6-import-in-node-js/
import { Sequelize, Model, DataTypes } from '@sequelize/core';

// imports dontenv module and allows us to access stored environment variables stored in .env file
import 'dotenv/config';

/* Connect to your database 
  See: Sequalize Getting Started - Connecting to a database by passing a URI - Read: https://sequelize.org/docs/v6/getting-started/#connecting-to-a-database
  Security Best Practice: Don't use the URL/URI string (postgres://username:password@hostname/databasename) directly in applciation code. Store the database URL as the API_URL environment variable within the .env file. 
  Good Implementation - const sequelize = new Sequelize(process.env.API_URL);
  Read - article to learn more about environment variables - https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
*/
const sequelize = new Sequelize(process.env.API_URL);

try {
  await sequelize.authenticate();
  console.log('Connection has been Established Successfully!');
} catch (error) {
  console.error('Unable to Connect to the Database:', error);
}

/* Create your Sequalize Model for Listing */
export default sequelize;

/*
  Hint: Take a look at listings.json to figure out the model attributes we need to define.
  We are creating this model to define the format of our table.
  Read up on how to define a model using sequelize.define - https://sequelize.org/docs/v6/core-concepts/model-basics/
  Also Check out - //Data Types - https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
*/
const Listing = sequelize.define('Listing', {
  // Model attributes are defined here
  // Define Code, Name, and Address attributes
  code: { type: DataTypes.STRING, allowNull: false, primaryKey: true, },
  name: { type: DataTypes.STRING, allowNull: false, },
  latitude: { type: DataTypes.DOUBLE, allowNull: true, },
  longitude: { type: DataTypes.DOUBLE, allowNull: true, },
  address: { type: DataTypes.STRING, allowNull: true, },
  },
   {
  // Other model options go here
  tableName: 'Listings'
});

// `sequelize.define` also returns the model
console.log(Listing === sequelize.models.Listing); 
console.log(Listing);

/* Export the model to make it avaiable to other parts of your Node application */
// Read article "ES6 Modules and How to Use Import and Export in JavaScript" https://www.digitalocean.com/community/tutorials/js-modules-es6
// Export the model 'Listing' in a single statement at the end of the module
export { Listing, sequelize };
