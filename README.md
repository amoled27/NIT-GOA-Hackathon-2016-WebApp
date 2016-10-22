###Template built more or less by following: 
*https://github.com/angular/angularfire2/blob/master/docs/1-install-and-setup.md*

#Before serving and testing
To use this you this you need to 
- create or use an existing Firebase-project
- go here:
    - https://console.firebase.google.com/project/YOURAPPID/settings/general/ 
        - click Add to WebApp 
        - copy everything between the curly brackets
        - paste it in ```.\src\app\app.module.ts``` by replacing the placeholders i created there 
- go here:
    - https://console.firebase.google.com/project/YOURAPPID/database/data
        - add some items
- go here:
    - https://console.firebase.google.com/project/YOURAPPID/database/rules
    - for a first test use this:
    ```
    {
         "rules": {
             ".read": "true",
             ".write": "auth != null"
        }
    }
    ```
    **please beware that this will give read access to anyone without the need for an authentication.
      You might want to do this for a first test only.**

        npm install

        ng serve  

---

#Angular-CLI
Below comes the default Angular-CLI comments on using the CLI itself.

# FirebaseTest

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.9.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/route/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
