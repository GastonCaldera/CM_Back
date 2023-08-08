## Getting Started
This app uses the NASA Rover Photos API to get images from the Mars rovers Curiosity, Opportunity, Spirit, and Perseverance. It has one endpoint, /api/rover, which images taken on that sol by the specified rover.

To use the app, you will need to create a NASA API key. You can do this by visiting the NASA API website: https://api.nasa.gov/. Once you have your API key, you can set it as an environment variable in your Nejt app.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

This project is licensed under the MIT License. Feel free to modify and distribute it as per the terms of the license.
