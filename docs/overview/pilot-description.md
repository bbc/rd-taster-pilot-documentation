# Understanding your pilot application

We want to understand your application so we can
- understand how the pilot works
- advise on security/performance concerns
- help tailor your design to enable easy deployment into our AWS hosting environment

We **require** you to provide a technical diagram of your application that explains the following key things:

1. What the discrete components exist in your application, including:
  - what are the functions/responsibilites of each component
  - what technologies/languages does each component use, e.g.
    - web servers (nginx, apache)
    - persistence technologies (databases, static asset stores, in-memory caches)
    - container technologies (docker)
    - langages, frameworks & libraries
1. What (user) data flows between the components, covering
  - what technologies/protocols are used for the communication
  - is (user) data transferred between components secured
1. What external APIs/data sources the application relies upon (if any)


Once we understand your application, the Taster technical team can:

- describe how we will host the application
  - we will provide a hosting diagram (TBC) 
- suggest where you may consider a re-design of components/responsibilities to
  - make the app easier to host in AWS
  - improve the potential to scale the app to perform under load. Typically improvements can be made by e.g.
    - separating any persistence (e.g. DB) into a discrete component
    - serving static assets from a dedicated server
    - using distribution networks (CDNs) for large assets (video/audio)

**Note**

Even if your pilot application is mind-bogglingly simple, it is still **important** to describe it with a diagram in order to:
 - convince us its really that simple
 - allow us to easily verify that your application is [secure](information-security.md) and any user data collected/used by the pilot adheres to BBC policy.

**Note two**

If you have decided to use [Taster hosting](hosting.md#taster-hosted) then following discussion of the application diagram, the Taster team will provide a diagram of how we intend to host it. This serves a few purposes:
- helps you determine if we've understood the pilot correctly
- gives you direction in separating your components and responsibilities
- is submitted as part of [InfoSec review](information-security.md) process

If you have elected to use [Third party hosting](hosting.md#third-party-hosted) then you must diagrammatically describe the hosting environment (potentially as part of the initial diagram)

This is required for submission as part of the [InfoSec review](information-security.md) process

## Example

### Technical diagram

This example diagram was provided by the team who delivered the BBC Drop pilot
  
<img src="./images/drop-application.png" alt="BBC Drop application diagram" width="650" >

The key learnings drawn out by the diagram are:
- application functionality and responsibilities (per component) 
- clarity of data flow

### Hosting diagram

After discussion of the application diagram the Taster team produced the following diagram to describe how the application would be hosted
 
<img src="./images/drop-hosting.png" alt="BBC Drop hosting diagram" width="650" >

The key learnings drawn out by the diagram are:
- separation of resources
- scaling points
- clarity of where (user) data is stored
