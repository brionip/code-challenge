# Code challenge

### 1. About the project

This project is a demonstration of working with Serverless framework to deploy a 3-tier application. API Gateway, Lambda, Dynambo DB, S3 and Cloudformation were used to develop the 3-tier application. 


### 2. Architecture overview Diagram
 
![alt text](https://github.com/brionip/code-challenge/blob/master/AWS-Diagram.png "Architecture Overview Diagram")


### 3. Built With

* ReatJS - Frontend
* NodeJS - Backend

### 4. Directory structure
. <br>
├─ frontend                 # Frontend code <br>
├─ todos                    # API endpoints <br>
├─ AWS-Diagram.png          # Architecture overview diagram <br>
├─ serverless.yml           # Serverless framework file <br>
└─ README.md

### 5. Getting started

#### Pre-requistie:
* serverless
* aws-cli
* npm
* nodeJS
* reactJS
* server-finch

#### Deployment
* Clone the repository <br>
`git clone https://github.com/brionip/code-challenge.git`

* Deploy the project code <br>
`serverless deploy`

* Enter the REST API endpoint in the frontend code <br>
Make the following changes to post and get data from the API in app.js file:
. <br>
├─ frontend/src/app.js <br>
Follow the comments in app.js file to enter REST API endpoints.<br>
- Compile the frontend code <br>
`npm run build` 


* Deploy the frontend code <br>
`serverless client deploy` <br>
Click on the S3 link to browse the frontend. :)
