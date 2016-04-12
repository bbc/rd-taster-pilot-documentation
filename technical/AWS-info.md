# AWS Deployment

Connected Studio deploy pilots through AWS. This can be in the form of static content in S3 buckets, or dynamic content hosted on EC2 instances.

## S3

This tends to to be a fairly straightforward deployment whereby you provide us with the necessary static files and we deploy to the S3 and assign appropriate URLs and routing.

## EC2

These instances tend to be a little more complex, and the deployment process largely depends on the architecture and tools you use to develop the pilot. As the requirements for this style of deployment often vary between pilots, we look to you to produce a comprehensive set of instructions to allow us to effectively release your product. Below, we have listed some things to consider when designing your pilot and writing your instructions.

### Considerations

* The codebase should be distinct from the database. This may mean deploying AWS RDS databases, or hosting a database (such as mongoDB) on another instance.
* Ideally the code should be made available through a git repository such as github or bitbucket. This allows us to audit, and assist with any bugs or integration issues.
* The deployment instructions would ideally compose of a list of components, and a deployment script. This allows is to identify each component, its function, and how each component fits together.
* We understand that there will always be a level of configuration specific to each deployment (such as secret-keys, instance addresses, and access lists etc), but modifiable configuration scripts will allow us to deploy you pilot with greater efficiency.
* If we are aware that the pilot is likely to receive a lot of traffic (large PR), we may opt to invest additional resources to ensure smooth and stable operation.
* Please consider the failure of the instance and write code that will reinitialise if a machine is rebooted.

### Defaults

* We will typically use m3.medium instances for deployment, but if you require additional storage, or resources for heavy traffic then let us know. Otherwise this is can be discussed in the tach kick-off.
* The machine we typically use is Ubuntu 14.04.
