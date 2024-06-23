-- Database: Public

-- DROP DATABASE IF EXISTS "Public";

/*CREATE DATABASE "Public"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;*/
SELECT * FROM items;
SELECT * FROM items WHERE price >80 OR price<=300;
SELECT * FROM customers WHERE last_name = 'Smith'OR last_name = 'Jones';
SELECT * FROM customers WHERE NOT first_name = 'Scott';

