# AWS Deployment

Connected Studio deploy pilots through AWS. This can be in the form of static content in S3 buckets, or dynamic content hosted on EC2 instances.

## S3

This tends to to be a fairly straightforward deployment whereby you provide us with the necessary static files and we deploy to the S3 and assigned appropriate URL and routing.

## EC2

These instances tend to be a little more complex, and the deployment process largely depends on the architecture and tools you use to develop the pilot. As this requirements for this style of deployment often vary between pilots, we look to you to produce a comprehensive set of instructions to allow us to effectively release your product. There are a few rules that you should consider when designing your architecture.

### Considerations

1. The codebase should be distinct from the database. This may mean deploying AWS RDS databases, or hosting a database (such as mongoDB) on another instance.
2. Ideally the code should be made available through a git repository such as github or bitbucket. This allows us to audit, and assist with any bugs or integration issues.
3. The deployment instructions would ideally compose of a list of components, and a deployment script. This allows is to identify each component, its function, and how each component fits together.
4. We understand that there will always be a level of configuration specific to each deployment (such as secret-keys, instance addresses, and access lists etc), but modifiable configuration scripts will allow us to deploy you pilot with great efficiency.
5. If we are aware that the pilot is likely to receive a lot of traffic (large PR), we may opt to invest additional resources to ensure smooth and stable operation.
6. The m3.medium instance has 8gb storage as default, let us know if this needs to be extended.

### Default

1. We will typically use m3.medium instances for deployment, but if you require additional storage, or resources for heavy traffic then let us know. Otherwise this is can be discussed in the tach kick-off.
2. We tend to use ***
