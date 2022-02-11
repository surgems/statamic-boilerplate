# Boilerplate for a Statamic Site

1. Copy and paste contents of this directory into new project cloned from GitHub <br>
2. Create a .gitignore and .gitattributes with contents of the same files in this directory <br>
3. Delete composer.lock file <br>
4. Run to install latest statamic version: <br>
```
composer require statamic/cms --with-dependencies
```
5. Then, run these commands: <br>
```
composer install && npm install
```
```
php artisan config:clear && php artisan cache:clear
```
6. Update .env to match the project, then run: <br>
```
php artisan key:gen
```
7. Logins are <br>
_developers@_
_usual password_