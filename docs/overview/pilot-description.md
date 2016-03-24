# Understanding your pilot application

Your pilot application could be simple, it could be complex, or anywhere in-between.
To make sure we have a common understanding of what your pilot is and how it works two key diagrams are produced. 
Whilst the creation of these diagrams is primarily done by you, the Taster team aims to office advice and collaborate with you to refine the application design to address potential security, performance and scalability issues.

Additionally, if the pilot uses Taster hosting this early collaboration helps us plan later deployment activities, and the opportunity to tailor the application design to simplify deployment into our hosting environment. 

*Note that these diagrams are also submitted as part of [InfoSec review](information-security.md) process the pilot will go through*

## Application diagram

This is your opportunity to describe key information about the pilot application. 
- This must be created by **you**

#### What are the discrete components of your application
- what are the functions/responsibilities of each component
- what technologies/languages does each component use, e.g.
  - web servers (nginx, apache, etc)
  - persistence technologies (databases, static asset stores, in-memory caches, etc)
  - container technologies (docker, etc)
  - languages, frameworks & libraries

#### What (user) data flows between the components
- what technologies/protocols are used for the communication
- is (user) data transferred between components secured
 
#### What external APIs/data sources the application rely upon (if any)

### Example

This example diagram was provided by the team who delivered the BBC Drop pilot
  
<img src="./images/drop-application.png" alt="BBC Drop application diagram" width="650" >

The key learnings drawn out by the diagram are:
- application functionality and responsibilities (per component) 
- clarity of data flow

## Hosting diagram

This conveys key information about the hosting of the application
- If your pilot uses [Third party hosting](hosting.md#third-party-hosted) then **you** must provide this information. *Note this information could be provided in the application diagram*
- If your pilot uses [Taster hosting](hosting.md#taster-hosted) then **the Taster team** provide this diagram. This helps confirm we've understood your pilot.

#### Where is the pilot application hosted

#### How do components communicate

#### What are the opportunities to scale if the pilot is anticipated high traffic 
Typically improvements can be made by e.g.
- separating any persistence (e.g. DB) into a discrete component
- serving static assets from a dedicated server
- using distribution networks (CDNs) for large assets (video/audio)
    
#### Where is (user) data stored

### Example

This hosting diagram was produced by the Taster team
 
<img src="./images/drop-hosting.png" alt="BBC Drop hosting diagram" width="650" >

The key learnings drawn out by the diagram are:
- separation of resources
- scaling points
- clarity of where (user) data is stored
