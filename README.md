# Boilerplate for a Statamic Site

1. After cloning, run this command <br>

 ```
git remote rm origin
 ```

 2. Add .gitignore and .gitattributes
 3. Make a repository and link it to that <br>
 4. Then, run these commands: <br>
```
composer update
```
```
npm install
```
```
php artisan config:clear && php artisan cache:clear
```
```
composer require statamic/cms --with-dependencies
```
```
php artisan key:gen
```
5. Logins are <br>
_developers@_
_usual password_