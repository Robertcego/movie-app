# Movies App

This project is a simple React and Redux application that consumes the [OMDb API](https://www.omdbapi.com/). It lets you search for movies, view details and manage a list of favourites.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

## Environment variables

Copy `.env.example` to `.env` and provide your OMDb API key:

```bash
cp .env.example .env
```

Then edit `.env` and set `REACT_APP_API_KEY`.

## Tests

Run the test suite with:

```bash
npm test
```
