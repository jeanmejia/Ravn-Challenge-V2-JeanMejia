# Ravn Challange

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup/Running

Setup with Create React App

```npx create-react-app my-app
npx create-react-app my-app
cd my-app
npm start
```


## Description

Code Challenge by Ravn.

The goal of this challenge is to demonstrate your ability to write clean software, communicate clearly, and
follow the instructions.

The challenge consist in a web app that allows you to browse the Star Wars GraphQL Api. 


## Working App

### `Loading indicator`

A loading indicator is shown when People data is being fetched. Once the data is fetched, the indicator fades.

![Loading](src\assets\Loading.gif)


### `AllPeople() Data`

AllPeople() retrieves all character data from the API

![AllPeople](src\assets\AllPeople.gif)

### `Character Information`

Character info is shown next to the list, vehicle data is also shown if the character uses at least a vehicle.
![Information](src\assets\Info.gif)

## Technologies Used

Several libraries were used to ease development of this challenge.

### React

Most used JS library for building user interfaces.

It is declarative making code more predictable and easier to debug. Component-Based, each component manages its own state, logic is also written in JS making pass data easier.

### react-router-dom

React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.

### MUI

MUI provides customizable, robust and an accessible library of basic and advanced components, making React apps easier to design.

I used this library to implement icons in the app.

### GraphQL

A query language for APIS, gives clients the power to ask for what they need, making app development easier.

You can send a GraphQL query with exactly what you need, it will always return predictable results, it is fast and stable because it controls the data that apps get, not the server.
