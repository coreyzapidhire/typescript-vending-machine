# typescript-vending-machine
vending machine software built in typescript and react with json-server

## Built using

- Typescript
- React 
- Styled Components
- React Hooks
- Axios
- JSON-server

## Why

- This project is a prototype for a vending machine software that allow for the user to enter credit in specific denominations to purchase items from the vending machine.

## How

- I've used JSON server to mimic an api based architecture for the software which will pull real-time data from the 'database' about products and stock levels.
- For local state management i've used the React Hooks Context Api.
- I've used axios to handle api calls to alter stock levels and pull correct information when transactions are made.

## How to run 

- To run just install dependencies with `yarn`
- Then fire away with `yarn start`
- This will start the JSON-server alongside the react application using concurrently.


