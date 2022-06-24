# graphql-catalogue-querier-interface

![Node Version](https://img.shields.io/badge/node-v16.13.2-blue?logo=Node.js)
![NPM Version](https://img.shields.io/badge/npm-v8.1.2-blue?logo=npm)

### Overview
This a React application created for the purpose of hitting [this projects](https://github.com/OMBowkerBBC/graphql-catalogue-querier) graphql end point.

###### Technolgies Used
![Application](https://img.shields.io/badge/app-in%20dev-green?logo=React)
&ndash; [React](https://reactjs.org/) is the front end framework that I have used to create this application.

![Testing](https://img.shields.io/badge/testing-in%20dev-green?logo=Jest)
&ndash; [Vitest](https://vitest.dev/) will be used to test the app. I chose this over jest as setup wise it's a hell of a lot easier and
it is built on top of the jest API, so commands and syntax feel very familiar.

![Bundler](https://img.shields.io/badge/bundler-blue?logo=Vite)
&ndash; [Vite](https://vitejs.dev/) is used because it's so much quicker than `create-react-app` and also links nicely to vitest.

![CI/CD & Infrastructure](https://img.shields.io/badge/deployment-incomplete-red?logo=Amazon%20AWS)
&ndash; [AWS](https://aws.amazon.com/) may be used for CI/CD and the project will be deployed in the 
[server side](https://github.com/OMBowkerBBC/graphql-catalogue-querier) deployment script.

### Testing
`npm test`

### Running
Use `npm run dev` to start a local version of the app.
You can also run the graphql server locally to get the project actually functioning how it would in the production.

### CI/CD
I'm not sure how I'm going to CI/CD for this yet, however I would potentially use codebuild/code pipeline to learn.
