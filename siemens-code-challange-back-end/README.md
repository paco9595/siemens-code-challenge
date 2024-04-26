# Node.js Express Image Service

[Live Demo](https://siemens-code-challenge.vercel.app)

This project consists of a Node.js application that uses Express to expose an `/api/image` endpoint to handle image-related requests. You can use this project as a base to develop image manipulation services, such as resizing, format conversion, among others.

## Requirements

-   Node.js installed on your system. You can download and install it from [nodejs.org](https://nodejs.org/).
-   NPM (Node Package Manager), which is installed automatically alongside Node.js.

## Installation

1.  Clone this repository on your local machine using Git:
```
git clone https://bearpoint@bitbucket.org/mentorg/codeproject.git
``` 
2.  Navigate to the project directory:
```
cd your_repository
``` 

3.  Install the project dependencies using npm:
```
npm install
```` 

## Usage

Once you've installed the dependencies, you can start the server by running the following command:
```
npm start
```
This will start the Express server, listening on the port specified in the `index.js` file. By default, the server listens on port 3000.

## Endpoints

### `GET /api/image`

This endpoint retrieves an array of images stored on the server. You can send parameters in the request to specify the images you want to retrieve, as well as  for pagination.

#### Parameters

-   `page`: Unique ID of the image you want to retrieve.
-   `per_page`: Unique ID of the image you want to retrieve.

#### Example Request
```
GET /api/image?page=3&per_page=4
```

### `GET /images/large/7111-b.jpg`