# Audio-Recorder

Application built to show the weather in a particular city.

##### Install Postgres
This program runs sequelize and create a Postgres DB to manage data.
Configure your variables:
DB_NAME=db_your_db_name
DB_USERNAME=your_my_sql_user
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql

##### Create DB
Runs the comand 'sequelize db:create'

##### Create tables
Run the comand 'sequelize db:migrate'

#### Open postman or insomnia and configure a post route
route: localhost:3001/audios
