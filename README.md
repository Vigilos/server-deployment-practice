# LAB - Class 01

## Project: Server Deployment Practice

### Author: Chris Fanucchi

### Problem Domain

Create and deploy a web server using CI and CD and get used to the general process of building and deploying servers.

### Links and Resources

- [ci/cd](https://github.com/Vigilos/server-deployment-practice/actions) (GitHub Actions)
- [dev server url](https://server-deploy-dev.onrender.com/)
- [main server url](https://server-deploy-dev.onrender.com/)

### Setup

#### `.env` requirements

- PORT = 3001

#### How to initialize/run your application

- npm start

#### Features / Routes

- Feature One: Deploy to Dev
- GET : `/` - specific route to hit
- Feature two: Deploy to Main
- GET : `/` - specific route to hit

#### Tests

- How do you run tests?
  - npm test
- Any tests of note?
  - Ensure deployment is successful by accessing "/" of the site and getting a status 200 in return

#### UML

![UML](server-deployment-practice\Lab-01-UML.jpg)
