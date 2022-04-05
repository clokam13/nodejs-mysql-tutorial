CREATE USER 'clokam' @'localhost' IDENTIFIED WITH mysql_native_password BY 'password!';
GRANT ALL PRIVILEGES ON demo_db.* TO 'clokam' @'localhost';
FLUSH PRIVILEGES;