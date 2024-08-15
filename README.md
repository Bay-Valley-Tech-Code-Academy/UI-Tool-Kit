## PREREQUISITES
1. Install PostgreSQL. (Uncheck 'Stack builder' and 'pgAdmin' when installing, we don't need those.)
 * Once PostgreSQL is installed, open your Command Promp and type ```psql```.
 * If you get an error, then open your environment variables, and add ```C:\Program Files\PostgreSQL\16\lib``` and ```C:\Program Files\PostgreSQL\16\bin``` to your system variables PATH.
 * Open and close Command Promp, try ```psql``` again. (If issues persist, message me if you need help.)
 * In cmd, type ```psql -U postgres```. Press enter, then enter your password. If this all works, you're good to go!
2. Create a .env file in the base folder. Put this inside:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=[your postgreSQL password here]
DB_NAME=productlist

```
2. In terminal, type ```psql -U postgres -f src/app/data/create_database.sql```. This creates the database for you.
3. Install the PostgreSQL Explorer by Chris Kolkman on VS Code.
* Once you install this, follow the instructions here to create a connection to the database: https://youtu.be/ezjoDYs72GA?si=0U7jKxL2xwNuQ5YR&t=680 . The instruction ends at 13:20.

## SETUP
After cloning the repo:
1. Navigate to UI-Tool-Kit in terminal by typing ```cd UI-Tool-Kit```.
2. Install packages by typing ```npm install``` in terminal. You can also type ```npm i```.
3. Run the program using ```npm run dev```.
4. Go to http://localhost:3000 to view the website.
5. Kill the program by pressing ```CTRL+C``` in the terminal.