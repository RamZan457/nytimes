# nytimes
NYTimes - Latest news of US with help of New York Times
# New York Times Top Stories App

This is a MERN (MongoDB, Express, React, Node.js) web application that fetches top stories from the New York Times API and displays them as cards with React.

![App Screenshot](/screenshot.png)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [Folder Structure](#folder-structure)
- [Built With](#built-with)
- [License](#license)

## Features

- View top stories from the New York Times.
- Click on a story card to open the story's link in a new tab.
- Simple and intuitive user interface.

## Getting Started

Follow the instructions below to set up and run the application locally.

### Prerequisites

- Node.js and npm installed.
- MongoDB installed and running (if you plan to extend the application to use a database).

### Installation

1. Clone this repository:

   ```sh
   git clone https://github.com/yourusername/nytimes-top-stories.git
2. Change into the project directory: 
    cd nytimes-top-stories
3. Install the frontend dependencies:
    cd client
    npm install

4. Install the backend dependencies:
    cd ../server
    npm install

5. Start the backend server:
    npm start
    
6. Start the frontend development server:
    cd ../client
    npm start

Your MERN app should now be running locally. The front end will be available at http://localhost:3000, and the back end will be available at http://localhost:5000.

## Usage
Once the app is running, you can:

View the list of top stories from the New York Times.
Click on a story card to open the full story in a new tab.
API Key
To fetch data from the New York Times API, you need an API key. Replace YOUR_API_KEY in the nytimes-backend/index.js file with your actual API key obtained from the New York Times website.

## Folder Structure
client: Contains the React front end.
server: Contains the Node.js and Express backend.
Built With
React - Frontend framework
Node.js - Backend runtime
Express - Backend framework
MongoDB - Database (optional, if you choose to extend the app)
Axios - HTTP client for making API requests

## License
This project is licensed under the MIT License - see the LICENSE file for details.
This is the complete README file for your MERN app, consolidated into a single snippet. Please replace `RamZan457` in the clone URL with your actual GitHub username or the URL of your repository where the project is hosted. Additionally, make sure to replace `YOUR_API_KEY` with your actual New York Times API key in the `nytimes-backend/index.js` file as mentioned in the README.



