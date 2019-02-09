# MEAN (Mongo, Express, Angular 7.3.1 & obviously Node)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running backend API server

Go to server directory and run `npm run dev` to start the api server running in port 4000, Navigate to `http://localhost:4000/`

BE server uses Express & MongoDB. Inorder to run MondoDB, download community version from `https://www.mongodb.com/download-center/community` or use `brew install mongodb`. Follow the general creation of data store `/data/db`. Run 
 `sudo mkdir -p /data/db` & start the server using `sudo ./mongod` (add sudo if needed)


