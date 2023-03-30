# MOT Finder

# Link

https://motfinder.orhankhanbayov.com

# About

MOT Finder is a simple application that allows users to find the closest MOT stations in the UK, based on their current location or a provided address. The application uses a CSV file containing information about every MOT station as of October 2022 (from gov.uk). Each station has been geocoded using the Google Geocoding API, and the application uses a Node.js server with MongoDB for the backend API. The frontend is built using React.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Usage](#usage)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.x.x or later)
- npm (v6.x.x or later)
- MongoDB (v4.x.x or later)

## Installation

1. Clone the repository:

```
git clone https://github.com/your-username/mot-finder.git
```

2. Change to the project directory:

```
cd mot-finder
```

3. Install dependencies for both the backend and frontend:

```
cd api && npm install
cd ../frontend && npm install
```

## Running Locally

1. Start the MongoDB server:

```
mongod
```

2. Create a `.env` file in the `frontend` folder:

```
cd frontend
touch .env
```

3. Open the `.env` file and add your Google Places API key:

```
REACT_APP_GOOGLE_API_KEY=<your_api_key_here>
```

4. Start the backend server:

```
cd ../api
npm run start
```

5. In another terminal, start the frontend server:

```
cd ../frontend
npm run start
```

The application should now be running at `http://localhost:3000`. You can find nearby MOT stations by entering an address or using your current location.

## Usage

To find the closest MOT stations:

1. Open the application in your browser at `http://localhost:3000`.
2. Click the "Use My Location" button to use your current location, or enter an address in the search bar.
3. The application will display a list of nearby MOT stations, along with their contact information and distance from the specified location.

