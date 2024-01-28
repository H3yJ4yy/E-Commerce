
  # E-Commerce 

  ### Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Contact](#contact)

  ## Description
  This backend E-Commerce application allows the user to be able to operate standard CRUD operations with the use of Sequelized Routes.

  ## Installation
  This application will require you to install the following :
  - `Dotenv 8.2.0`
  - `Express 4.17.1`
  - `MySQL 2.1.0`
  - `Sequelize 5.21.7`
  - `Insomnia `

  ## Usage
  1. Download the repository for the application at https://github.com/H3yJ4yy/E-Commerce, and make sure you have Visual Studio Code installed.
  2. Before starting, make sure you have `Insomnia` installed to be able to work on the backend. You do not need to make an account, click on the `Use the local Scratch Pad` link to use the application. 
  3. Open the application on VS Code, and in the integrated terminal install node.js v16.
  4. Create a file in the main code folder and name it `.env`. This is where you will provide your User and Password for your MySQL account. Make sure it looks like the following:
```
DB_NAME='library_db'
DB_PASSWORD='[enter your MySQL password here]'
DB_USER='root'
```
5. If the packages have not been installed already, be sure to run for following codes into the integrated terminal.
    * `npm install dotenv —save` to install Dotenv.
    * `npm install express` to install Express.
    * `npm install —save mysql2` to install MySQL:
    * `npm i sequelize` to install Sequelize.
6. Once all the packages have been installed, type into the integrated terminal `npm i ` to install our dependencies.
7. Once installed, run `mysql -u root -p` in the command line to initiate MySQL.
8. Once you’ve accessed the database, make sure you’re still in the project folder and run `source ./db/schema.sql` through the terminal.
9. After running the schema, type `exit` to exit out of MySQL. 
10. Once back in the main terminal, run `node seeds/index.js’ to seed the initial data.
11. After running the seeds, run `npm start` to  initiate the application.
12. Once the application has started,  go to the insomnia application. Make sure you are working the local scratch pad.
13. Once inside the local scratch pad, type in `http://localhost:3001/api/<insert api rout here>`
14. From here, you will be able to Create, View, Update, or Delete any category, product, or tag.


  ## Credits
  This was done with the help of my tutor Corey Yates
  
  ## License
  none 
 
  ## Tests
  
![Test Video](https://github.com/H3yJ4yy/E-Commerce/assets/143395836/5891e020-47fc-4917-91f2-40bd4e0a90ac)


  ### Contact 
  For any further questions, feel free to contact me through my GitHub [H3yJ4yy](https://github.com/H3yJ4yy) or Email [agon0015@gmail.com](mailto:agon0015@gmail.com).
