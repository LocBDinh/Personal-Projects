[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/PZoR0Zi4)
# Bootcamp Assignment 2: UF Directory App - Persisting data using PostgreSQL and Sequalize

Our application at this point has an issue one majore issue... 
- Each time the server starts, we reload the data from the same JSON file. 
 
It would be better if the data was stored elsewhere in a *persistent* fashion so that even if the server were to crash, our data would remain unharmed.

In this assignment, we will focus on persisting data by moving the JSON file to a dedicated database.  In our case, we will be using [PostgreSQL](https://www.postgresql.org/), a relational database which stores data as **tables**. These tables havea a diffent structure than our JSON objects, which means we are going to need a little help converting our listings.file into a database table that our web application can use.

### Models and Sequalize
If you take a look at PostgreSQL's [documentation](https://www.postgresql.org/docs/16/index.html), you will notice there's quite a bit of code that has to be written to add, find, update, or delete data using their APIs. [Sequalize](https://sequelize.org/docs/v6/) simplifies the process of communicating with PostgreSQL and also provides tools to organize the data into **models**. Models are used to pre-define the data's attributes, and the type each attribute will have. [Work through this tutorial that discusses how to use Sequalize with PostgreSQL and Node.js](https://www.makeuseof.com/use-postgresql-with-sequelize-in-nodejs/) before continuing with the assignment.

### ElephantSQL
[ElephantSQL](https://www.elephantsql.com/) is an online service, Database as a services [(DBaaS)](https://www.ibm.com/topics/dbaas) that will host your database in the cloud. While you could just run a local instance of PostgreSQL, registering for an account with ElephantSQL removes hassles surrounding installing the database on your machine. Make sure to [register for an account](https://customer.elephantsql.com/signup) before starting the assignment. 

### Assignment
To port the listing data from our JSON file to PostgreSQL, you will be doing the following: 
- Defining a model for the 'Listing' database table 
- Create a script that converts the JSON entries into a PostgreSQL table and saves the documents to your database
- Retrieve/update/delete documents through database queries.js

Instructions:
0. Make sure to [register for an ElephantSQL account](https://customer.elephantsql.com/signup) before starting the assignment. [Create an a database instance] (https://www.elephantsql.com/docs/index.html) using the free plan.

1. After cloning the repository 
`npm init -y` //Creates a package.json file to track our dependencies
`npm i @sequelize/core@alpha --no-fund` // installs the sequalize package and bypassess the packagage that are asking for funding
`npm i pg --no-fund`// installs postgres package
`npm install psql` //installs another postgresql package

Security Notes: Note that as you are installing these, mpm is evaluating if the packages have vulnerabilities that you maybe introducing into your application.

Follow instructions to address these issues with `npm audit fix`
For more information look at the [npm documentation](https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities)
Look through the vulnerabilities. They are pretty serious. 

We don't need this package so we can uninstall it. 
`npm uninstall psql`

2. Setup your environment variables
- Rename the env-sample file to .env
- Add your database connection url to the .env file - this will keep it private and avoids hard coding this in your application code. 
- add .env to your .gitignore file  so that the .env file won't be committed to your repo so you can keep your private info private
- `npm install dotenv` [documantation](https://www.npmjs.com/package/dotenv) or `yarn install dotenv` [documentation](https://yarnpkg.com/package?name=dotenv)

- Check to see if it works by running `node testDBConnection.js`

3. Define your schema in `ListingModel.js`

4. Fill out the `JSONtoPostgreSQL.js` script to add the listings to your database
- once complete run the following command to add the json file of listings to your database
`node JSONtoPostgreSQL.js`
- Check to see that the listings are in your ElephantSQL database. If so, you have successful completed this step.

5 . Complete the functions in `queries.js` to retreive all the entries, find a building listing, update a building's listing, delete a building, and Add a new building listing.
`node queries.js` 

Make sure to check to see that your commands have the intended impact by printing out to the console and checking the database. 
`SELECT * FROM "public"."Listings" `//Print out all the listings - ElephantSQL store all tables we create in the public schema. 
Note: Make sure to refer to the tables using "public"."Listings" notation in the SQLBrowser when running your sql queries.
For [example sql queries](https://www.w3schools.com/sql/sql_syntax.asp)


6. Complete these coding practices and complete the reflection in Step 7
Good Coding Practices: 
- Clean up your code add comments and remove unused code, variables, etc.
- install dependency checker [depcheck](https://www.npmjs.com/package/depcheck) globally using either `npm install depcheck -g --no-fund` or `yarn global add depcheck`
- run `npx depcheck` // Note this may take a while. If so stop it and rerun it.
- To check for files we don't use try unimported. Try [unimported](https://www.npmjs.com/package/unimported?activeTab=readme)
- install `npm imported` //
- run `npx unimported` // Review the report
- Try out [sonarCloud](https://www.sonarsource.com/products/sonarcloud/signup/) and explore the code smells and look for vulnerabilities and hotspots for this assignment.


7. Reflection: (Submit on CANVAS)
- What did you learn from this assignment?
- What challenges did you run into on this assignment? How did you address them?
- When cleaning up your project and code, did you find unused code, packages, libraries? How did you address them? Did you test that your code still worked after addressing them?
- What security vulnerabilities did you observe? How did you resolve them?
- If you found resources that you want to share with others, please share them here. 


