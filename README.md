# Code challenge

### 1. About the project

This project is a demonstration of working with Serverless framework to deploy a 3-tier application. API Gateway, Lambda, Dynambo DB, S3 and Cloudformation were used to develop the 3-tier application. 


### 2. Design decision and Architecture overview diagram
-	The first thought that came in my mind after reading the technical specification document was using serverless framework to deploy the application. I had used  Serverless framework for my final semester university project. 
-	Serverless framework was used to build and deploy the application on AWS. Serverless uses Cloudformation to deploy resources mentioned in the serverless YAML file.
-	S3 bucket was used to host the ReactJS app instead of running EC2 instance as it would be cost effective.
-	Backend consists of API Gateway, Lambda and Dynamo DB to store the data which auto-scales on demand.
-	The serverless framework YAML files has below listed declaration:<br>
	1. Function: Lambda function <br>
	2. Events: It contains the API Gateway details such request type, CORS, etc <br>
	3. Resource: It has Dyanamo table declaration such as table name, attributes, schema. <br>
	4. IAM Role statement: It is set of instruction to give appropriate rights to the resources which ensures the security of the application overall. <br>
-	Please refer the architecture overview diagram below: 

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
