# Node JS and Express JS REST API with MySQL(DB) | Tutorial and Sample Code

You can view this tutorial at my [**Youtube Channel**](https://youtube.com).

In this repository you will find the source for the Node JS and Express JS REST API that manages the data of dogs using MySQL as the data storage layer. 

## What will you learn?

- Setup your Database, Tables and Data in MySQL from command line
- Connect Node JS and Express JS to MySQL 
- Create controllers to access data in MySQL 
- Consume the controllers in your Express routes 
- Testing the API with Postman

## Setting up this repository 

You can start off by cloning [**this repository**](https://github.com/clokam13/nodejs-api-tutorial) using `git clone`.

The next step will be to create your Database and Table in MySQL. 

You can follow the steps [**here**](https://dev.mysql.com/downloads/installer/) to install MySQL. You can also use MySQL from XAMP, LAMP (or) any other similar services. 

Once you have MySQL setup, you can login and execute the following queries. 

```sql
CREATE DATABASE demo_db;

USE demo_db;

CREATE TABLE IF NOT EXISTS dogs (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    breed VARCHAR(255)
);

INSERT INTO demo_db.dogs (name, breed)
VALUES ('Happy', 'Golden Retriever'),
       ('Mika', 'Husky');
```

After this, you will have a **dogs** table with some sample records inserted into them. 

The next step will be to create a **.env** file that will have your database credentials. 

```shell
touch .env
```

You can create a separate user to access the database. 

```sql
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON demo_db.* TO 'username'@'localhost';

FLUSH PRIVILEGES;
```

Add the following contents to the **.env** file. Update the values with your own database user. 

```
HOST=localhost
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=demo_db
```

Once you have all of these setup, you can install your Node JS dependencies and then run your project. 

```shell 
npm install 

npm start
```
You can then test the API routes for the application using Postman, cURL (or) your browser. 



