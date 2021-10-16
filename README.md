# kaelsilva.github.io

[![Tests](https://github.com/kaelsilva/kaelsilva.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/kaelsilva/kaelsilva.github.io/actions/workflows/main.yml)  

This is my personal landing page coded with TypeScript and React.  
It also contains Cypress tests ant CI integration with GitHub Actions.  
  
You can check the deploy at [kaelsilva.github.io](https://kaelsilva.github.io).

## Setup
### Yarn
If you use Yarn, you can just run `yarn` and all dependencies will be installed. After this, run `yarn start` and the application will be accessible at **http://localhost:3000**.

### npm
If you use npm, run `npm install` and all dependencies will be installed. Then you can run `npm run start` and the application will be accessible at **http://localhost:3000**.

## Docker image
This project is available at Docker Hub. You can start the project locally as a container by running  
`docker run --name kaelsilva.github.io -d -p 3000:80 kaelsilva/kaelsilva.github.io:v1`  
and then accessing **http://localhost:3000** on your browser.

### Building docker image locally
  
You can also build locally your own docker image. Run `docker build -t kaelsilva/kaelsilva.github.io:v1 .` and the docker image will be built locally into a docker image called **kaelsilva/kaelsilva.github.io:v1**.

Now you can create the docker container with the web application running on nginx. Run  
`docker run --name kaelsilva.github.io -d -p 3000:80 kaelsilva/kaelsilva.github.io:v1`  
and the application will be available at **http://localhost:3000**.