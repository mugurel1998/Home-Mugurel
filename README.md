# Weather-App-Test
A small app designed to show the current weather on any part of the world using OpenWeatherMap API

![App preview](/docs/app_preview.png)

## Features
* Showing weather on any part of the world
* Small, cute design
* Can be embedded in any other HTML-based app
* Entire panel recolors itself to a carefully picked representative color for current weather

Also comes with a test suite written with [Cypress](https://www.cypress.io/) to assure good functionality.

## Dependencies
* A webserver(Apache, nginx, your own, etc.)
* [Cypress](https://www.cypress.io/)(just for testing)
* [Docker](https://www.docker.com/)(optional)

## Running the app
```bash
> git clone && cd
> cp ./Weather-App/* path/to/webserver/htdocs
```
Now the app will run with the webserver.\
If you want to run it with Docker:
```bash
> cd ./Weather-App
> docker build --tag "weather_app" .
> docker run "weather_app"
```

## Running the tests
```bash
> cd ./Test-Cypress
> npx cypress open
```
And run the configured E2E test suite with all the associated tests.

## License

 * This project is distributed under [MIT License](LICENSE).

### Contact

Feel free to email me to ask questions.
