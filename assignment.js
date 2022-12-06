/* 
! Instructions: Please describe each response in 3-4 sentences. 
? 1. What is AWS EC2? 
EC2 stands for Elastic Compute Cloud. EC2 is on-demand computing service on the AWS cloud platform. 
Under computing, it includes all the services a computing device can offer 
to you along with the flexibility of a virtual environment. 
It also allows the user to configure their instances as per their requirements i.e. allocate the RAM, ROM, 
and storage according to the need of the current task. 
Even the user can dismantle the virtual device once its task is completed and it is no more required. 

? 2. What are some use cases of using AWS EC2? 
When you want to create virtual servers for specific operating systems.
To scale up or down to handle changes in requirements or spikes in popularity, reducing your need to forecast traffic.
Temporary servers or datas.

? 3. What is AWS Lambda? 
AWS Lambda is a serverless compute service that permits you to run code without controlling or provisioning servers. 
Lambda uses highly available, elastic infrastructure to run your code. Lambda is the functionalities of the web server.

? 4. What are some use cases of using AWS Lambda?
Edit Code online
Use a Lambda when you need to access several services or do custom processing.
As data flows through services, you use Lambdas to run custom code on that data stream. 

! 5. How does AWS Lambda work for: 
? a. File Processing
AWS Lambda can still be used to process large files. 
? b. Web Applications
Building servess application with amazon API
? c. Stream Processing
 Lambda function errors and build more resilient event-driven and stream-processing applications.

? 6. What is S3
AWS offers a wide range of storage services that can be provisioned depending on your project requirements and use case. 
AWS storage services have different provisions for highly confidential data, frequently accessed data, and the not so frequently accessed data. 
You can choose from various storage types namely, object storage, file storage, block storage services, backups, and data migration options. All of which fall under the AWS Storage Services list. 
? 7. How does S3 work? 
Object storage service offering industry-leading scalability, data availability, security, and performance. 
Customers of all sizes and industries can store and protect any amount of data for virtually any use case, such as data lakes, cloud-native applications, and mobile apps.
You can optimize costs, organize data, and configure fine-tuned access controls to meet specific business, organizational, and compliance requirements.

? 8. What are some use cases of S3? 
Amazon S3 stores data as objects within buckets
When you upload a file, you can set permissions on the object and any metadata.
For each bucket, you can control access to it (who can create, delete, and list objects in the bucket), view access logs for it and its objects, 
and choose the geographical region where Amazon S3 will store the bucket and its contents.

? 9. What is DynamoDB? 
DynamoDB allows users to create databases capable of storing and retrieving any amount of data and comes in handy while serving any amount of 
traffic. It dynamically manages each customer’s requests and provides high performance by automatically distributing data and traffic over 
servers. It is a fully managed NoSQL database service that is fast, predictable in terms of performance, and seamlessly scalable. 
It relieves the user from the administrative burdens of operating and scaling a distributed database as the user doesn’t have to worry about 
hardware provisioning, patching Softwares, or cluster scaling. It also eliminates the operational burden and complexity involved in protecting 
sensitive data by providing encryption at REST. 


? 10. How does DynamoDB work? 
Uses the partition key value as input to an internal hash function.
Just like the same as mongoose it's a serverless, key-value NoSQL database designed to run high-performance applications at any scale. 
DynamoDB offers built-in security, continuous backups, automated multi-Region replication, in-memory caching, and data import and export tools.

? 11. What are some use cases of DynamoDB? 
How it works. Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale. 
DynamoDB offers built-in security, continuous backups, automated multi-Region replication, in-memory caching, and data import and export tools.

? 12. What is Aurora? 
Aurora is a relational database service offered from amazon cloud. 
This is one of the widely used services for the data storage, for low latency and value-based data storage and processing. 
Amazon Aurora is a MySQL and PostgreSQL-compatible relational database fabricated for the cloud, that consolidates the performance 
and accessibility of traditional databases with the simplicity and reliability of commercial databases at 1/10th the cost. 
It works with a clustered approach with data replication in the AWS accessibility zone for efficient data availability.

? 13. How does Aurora work?
An Amazon Aurora DB cluster consists of one or more DB instances and a cluster volume that manages the data for those DB instances. 
An Aurora cluster volume is a virtual database storage volume that spans multiple Availability Zones, with each Availability Zone having a copy of the DB cluster data? 
It combine the speed and reliability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases.

? 14. What are some use cases of Aurora? 
full MySQL and PostgreSQL compatibility
solutions when organizations need to store predictable, structured data. 
Large company with continues back up

? 15. What is AWS VPC? 
A virtual private cloud (VPC) is a virtual network dedicated to your AWS account. 
It is logically isolated from other virtual networks in the AWS Cloud. 
You can specify an IP address range for the VPC, add subnets, add gateways, and associate security groups. 
A subnet is a range of IP addresses in your VPC.

? 16. How does AWS VPC work? 
Amazon VPC enables you to build a virtual network in the AWS cloud - no VPNs, hardware, or physical datacenters required. 
You can define your own network space, 
and control how your network and the Amazon EC2 resources inside your network are exposed to the Internet

? 17. What are some use cases of VPC? 
creating regoinal environments
You can modify the components of your default VPC as needed. You can add subnets to your default VPC. 
Isolate environments

? 18. What is API Gateway? 
API Gateway handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls, 
including traffic management, CORS support, authorization and access control, throttling, monitoring, and API version management. 
API Gateway has no minimum fees or startup costs. You pay for the API calls you receive and the amount of data transferred out and, 
with the API Gateway tiered pricing model, you can reduce your cost as your API usage scales.

? 19. How does API Gateway work? 
Amazon API Gateway is a fully managed service that makes it easy for developers to create, 
publish, maintain, monitor, and secure APIs at any scale. APIs act as the "front door" for applications to access data, business logic, 
or functionality from your backend services. 


? 20. What are some use cases of API Gateway? 
Real time applications like chat applications.
Live videos.
Real time data.

? 21. What is CloudFront? 
In Simplest terms, cloud computing means storing and accessing the data and programs on remote servers that are 
hosted on the internet instead of the computer’s hard drive or local server. It is also referred to as Internet-based computing.
it's also a web service that speeds up distribution of your static and dynamic web content, such as . html, . css, . js, and image files, to your users. 
CloudFront delivers your content through a worldwide network of data centers called edge locations


? 22. How does CloudFront? 
CloudFront delivers your content through a worldwide network of data centers called edge locations. 
When a user requests content that you're serving with CloudFront, the request is routed to the edge location that provides the lowest 
latency (time delay), so that content is delivered with the best possible performance.

? 23. What are some use cases of CloudFront? 
Accelerate static website content delivery.
Serve video on demand or live streaming video.
Encrypt specific fields throughout system processing.

? 24. What is Cognito? 
Identity management for customer-facing applications. 
Amazon Cognito lets you add user sign-up, sign-in
Access control to your web and mobile apps quickly and easily.


? 25. How does Cognito work? 
lets you easily add user sign-up and authentication to your mobile and web apps. 
Amazon Cognito also enables you to authenticate users through an external identity provider
Provides temporary security credentials to access your app's backend resources in AWS or any service behind Amazon API Gateway.

? 26. What are some use cases of Cognito? 
Mobile Sync function.
Add sign up or sign in.
Management applications.

? 27. What is CloudWatch? 
CloudWatch provides you with data and actionable insights to monitor your applications, 
respond to system-wide performance changes, and optimize resource utilization.


? 28. How does CloudWatch work? 
Basically a metrics repository. An AWS service—such as Amazon EC2—puts metrics into the repository, 
and you retrieve statistics based on those metrics. 
If you put your own custom metrics into the repository, you can retrieve statistics on these metrics as well.

? 29. What are some use cases of CloudWatch? 
Alarms or events.
Data driven monitoring
Employee logs data

? 30. What is Secrets Manager? 
AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources.
This service enables you to easily rotate, manage, and retrieve database credentials, 
API keys, and other secrets throughout their lifecycle.

? 31. How does Secrets Manager work? 
Secrets Manager uses the plaintext data key to encrypt the secret in memory. 
AWS Secrets Manager stores and maintains the encrypted secret and encrypted data key. When a secret is retrieved, 
Secrets Manager decrypts the data key (using the AWS KMS default keys) and uses the plaintext data key to decrypt the secret.

? 32. What are some use cases of Secrets Manager? 
3rd party website.
Protect dredentials
Hide API keys

? 33. What is CloudTrail? 
AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. 
CloudTrail logs, continuously monitors, and retains account activity related to actions across your AWS infrastructure, 
giving you control over storage, analysis, and remediation actions.

? 34. How does CloudTrail work? 
captures actions made directly by the user or on behalf of the user by an AWS service. 
AWS CloudFormation CreateStack call can result in additional API calls to Amazon EC2, Amazon RDS, Amazon EBS, 
or other services as required by the AWS CloudFormation template.

? 35. What are some use cases of CloudTrail? 
to view, search, download, archive, analyze, and respond to account activity across your AWS infrastructure.
identify who or what took which action, what resources were acted upon, when the event occurred, 
and other details to help you analyze and respond to activity in your AWS account.

? 36. What is CI/CD integration? 
Continuous integration is a DevOps software development practice where developers regularly merge their code changes into a central repository, 
after which automated builds and tests are run. Continuous delivery is a software development practice where code changes are automatically 
prepared for a release to production. 


*/