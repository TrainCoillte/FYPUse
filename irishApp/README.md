# Atlasnagaeilge
This website was developed for the use of the Nua Ghaeilge Department in Maynooth University. It is based on the PhD thesis document by Dr Fintan Keegan “Scriobhaithe Gaeilge An Tuaiscirt, 1650-1900: Beathaisnéisí”.

############Description##############

This website retrieves the contents of a secure database and displays the results to the users. A MySQL database is connected to the Angular frontend framework via a Node API. This data passed through contains details of the Scribes of Ireland from 1650 to 1900. The landing page for the website is the Home Page. It displays a description of the functionality of the website and its origing, in both Irish and English. The next page on the site is the Scholar Search page. This page allows for a user to enter paramters by which to narrow the amount of scribes returned to them. It displays these results in a User friendly manor, clearly showing the labels for each scribe and their personal results. The Case Studies page contains a simple UI, the specific scribes who have case studies are shown here, a modal popup is used to show the contents of the case study for each scribe, allowing the user to clearly see which scribe they wish to read up on. Finally the Map section of the site shows the number of scribes per county, with the ability to interact with the counties and show the scribes who resided there. All basic map features are implemented, zoom, reset feature and a highlight feature for the county selected. A GeoJson file is used for the county outlines.

Technologies Frontend- Angular was used due to familiarity with it and the well writtend documentation available Backend- MySQL databse was established prior to work commencing and hence was not changed Mid-Tier- NodeJS was used to connect from frontend to backend via an API and also the project was hosted on Node Servers cPanel- Hosting site used to contain website. Bulma- CSS framework used due to its lightweight size and simple integration Jest- Testing framework used as it is built in with Angular Karma- UI used for testing to clearly show results. Leaflet- Framework used for Map application due to it being open-source and the well written documentation.

############Install and Run############

1)Download the project folder
2)cd into the server directory
3)npm i to install dependencies for API
4)open new terminal and cd into codebase
5)npm i to install dependencies needed to run application
6)To configure db connection get permission to access on cPanel
7)Configure SSH tunneling to connect to db.
8)run command in root directory to launch Frontend and run command in server directory to launch API.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
