# [kaelsilva.github.io](https://kaelsilva.github.io)

[![Automated Tests](https://github.com/kaelsilva/kaelsilva.github.io/actions/workflows/main.yml/badge.svg?branch=version-1)](https://github.com/kaelsilva/kaelsilva.github.io/actions/workflows/main.yml)
[![Deploy](https://github.com/kaelsilva/kaelsilva.github.io/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/kaelsilva/kaelsilva.github.io/actions/workflows/deploy.yml)

This is my personal landing page coded with TypeScript and React.  
It also contains Cypress and Testing Library tests for CI integration with GitHub Actions.

You can check the deploy at [kaelsilva.github.io](https://kaelsilva.github.io).

## Setup

### Yarn

If you use Yarn, you can just run `yarn` and all dependencies will be installed. After this, run `yarn start` and the application will be accessible at **http://localhost:3000**.

### npm

If you use npm, run `npm install` and all dependencies will be installed. Then you can run `npm run start` and the application will be accessible at **http://localhost:3000**.

### Running Tests

This project uses React Testing Library and Cypress. To run the tests with Testing Library:  
`yarn test:coverage` or `npm run test:coverage`  
To run the tests with Cypress:  
`yarn cypress:open` or `npm run cypress:open`

## Pipeline CI/CD
This project uses GitHub Actions for running automatically the tests on pull requests to Master branch and has automated deploy to the webpage [kaelsilva.github.io](https://kaelsilva.github.io).  
The following diagram can give an idea about how the pipeline was projected and built:  
<img src="https://i.imgur.com/9HwLJvR.png" alt="Diagram for Pipeline CI/CD" />

## Docker image

This project is available at Docker Hub. You can start the project locally as a container by running  
`docker run --name kaelsilva.github.io -d -p 3000:80 kaelsilva/kaelsilva.github.io:v1`  
and then accessing **http://localhost:3000** on your browser.  

Also, there is the image of the project with NextJS version. To start the NextJS project, run  
`docker run --name kaelsilva.github.io -d -p 3000:3000 kaelsilva/kaelsilva.github.io:v2`  
and you may access the project through **http://localhost:3000** in the browser.

### Building docker image locally

You can also build locally your own docker image. Run `docker build -t kaelsilva/kaelsilva.github.io:v1 .` and the docker image will be built locally into a docker image called **kaelsilva/kaelsilva.github.io:v1**.

Now you can create the docker container with the web application running on nginx. Run  
`docker run --name kaelsilva.github.io -d -p 3000:80 kaelsilva/kaelsilva.github.io:v1`  
and the application will be available at **http://localhost:3000**.
