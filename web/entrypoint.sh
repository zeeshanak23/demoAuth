#!/bin/bash
cd demoAuth/
npx prisma generate
service mysql start



mysql -u root -p -e "CREATE DATABASE authdemo"; 
mysql -u root -p  -e "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Zeeshan786';"
mysql -u root -p Zeeshan786 -e "CREATE USER 'root'@'localhost' IDENTIFIED BY 'Zeeshan786';"
npx prisma db push


npm run dev
