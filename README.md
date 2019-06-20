# AngularSlack

This is a simple slack app clone. [DEMO](https://theo4u.github.io/slack-clone-angular/join). This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

UI cloned from `https://github.com/eddieos/slack-clone-angular-ui`



## TODO
- [x] Initialize App with Stream Chat [v1.0.0](https://github.com/theo4u/slack-clone-angular/releases/tag/v1.0.0)
- [ ] Part1: Channel and Direct messages with Stream Chat
- [ ] Part2:  Fleshing out our Slack app with online status, message reactions and is typing
- [ ] Part3: Adding thread feature to our Slack app
- [ ] Part4: Adding custom bot (Slack bot) with Dialogflow to our Slack App

## Development server

* Update [stream.service.ts](https://github.com/theo4u/slack-clone-angular/blob/master/src/app/services/stream.service.ts) to use your own `APP_KEY`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `npm run server` it follows [Twelve-Factor](https://12factor.net/) for handling environment variables listed below
  * `STREAM_APP_KEY`
  * `STREAM_APP_SECRET`
  
e.g `STREAM_APAP_KEY=[appKey] node server.js` then `POST http://localhost:2000/join`

or Create a `.env` file with the above variables above, like so
```sh
STREAM_APP_KEY="APP_KEY"
STREAM_APP_SECRET="APP_SECRET"
```
and run the below in your terminal
```sh 
node server.js
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deployment
Using `gh-pages` to host our angular app. Run `npm run deploy` to build and send to gh-pages  

## Built With

* [StreamChat](https://getstream.com/chat) - APIs to enable devs building realtime chat features
* [Angular](https://angular.io/) - Frontend framework that makes it easy to build  application with the web
* [Express](https://expressjs.com/) - Used for our APIs server

