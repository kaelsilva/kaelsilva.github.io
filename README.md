# kaelsilva.github.io

[![Cypress Tests](https://github.com/kaelsilva/kaelsilva.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/kaelsilva/kaelsilva.github.io/actions/workflows/main.yml)  

This is my personal landing page coded with TypeScript and React.  
It also contains Cypress tests ant CI integration with GitHub Actions.  
  
You can check the deploy at [kaelsilva.github.io](https://kaelsilva.github.io).

## Setup
### Yarn
If you use Yarn, you can just run `yarn` and all dependencies will be installed. After this, run `yarn start` and the application will be accessible at **http://localhost:3000**.

### npm
If you use npm, run `npm install` and all dependencies will be installed. Then you can run `npm run start` and the application will be accessible at **http://localhost:3000**.

### Docker image
If you want to use an Docker image of this project, first install its dependencies with `yarn` or `npm install`, then run `yarn build` or `npm run build` and you'll see that a new folder called **build** will appear in the project's root folder.  
  
Run `docker build -t kaelsilva.github.io-nginx .` and the static page files under **build/** folder will be built into a docker image called **kaelsilva.github.io-nginx**.

Now you can create the docker container with the web application running on nginx. Run  
`docker run --name kaelsilva.github.io -d -p 3000:80 kaelsilva.github.io-nginx`  
and the application will be available at **http://localhost:3000**.