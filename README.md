## PREREQUISITES
1. Install PostgreSQL. (Uncheck 'Stack builder' and 'pgAdmin' when installing, we don't need those.)
2. Install the PostgreSQL Explorer by Chris Kolkman on VS Code.
3. In terminal, type 'psql -U postgres -f src/app/data/create_database.sql'. This creates the database for you.

## SETUP
After cloning the repo:
1. Navigate to UI-Tool-Kit in terminal by typing ```cd UI-Tool-Kit```.
2. Install packages by typing ```npm install``` in terminal. You can also type ```npm i```.
3. Run the program using ```npm run dev```.
4. Go to http://localhost:3000 to view the website.
5. Kill the program by pressing ```CTRL+C``` in the terminal.