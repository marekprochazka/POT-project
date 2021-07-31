# POT-project

## Run project (use develop branch!)
1. BE:
    1. create venv in the root folder and install requirements
    2. start mysql server (https://dev.mysql.com/downloads/mysql/)
        - in the installer choose the sql server 
        - remember the database name, username and other info about the server 
    3. create .env file in backend dir (use .env.example)
    4. python manage.py migrate
    5. python manage.py createsuperuser
    
2. FE:
    1. In frontend dir run 'npm i'
    
3. RUN:
    - npm run serve in fe
    - python manage.py runserver
    - run app on django url (localhost:8080)