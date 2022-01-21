
# Express API
<p align="left">

<img src="https://github.com/jonathangoulding/express-api-template/actions/workflows/main.yml/badge.svg" />
<img src="https://img.shields.io/github/package-json/v/jonathangoulding/express-api-template?style=plastic" />
</p>

[![CircleCI](https://circleci.com/gh/jonathangoulding/express-api-template/tree/main.svg?style=svg)](https://circleci.com/gh/jonathangoulding/express-api-template/tree/main)

This repository demonstrates how a simple rest api written in [Node](https://nodejs.org/en/) and [Express](https://expressjs.com/) can be tested using the [Jest Testing framework](https://jestjs.io/).

## API Reference

#### Get all Events

```
  GET /api/events
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|           | `string` | Returns the list of events|

#### Get an Event

```
  GET /api/events/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of event to fetch |



## Run Locally

Clone the project

```bash
  git clone https://github.com/jonathangoulding/express-api-template.git
```

Go to the project directory

```bash
  cd express-api-template
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Start the server using nodemon

```bash
  npm run dev
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Tech Stack

**Server:** Node, Express, Jest

  
