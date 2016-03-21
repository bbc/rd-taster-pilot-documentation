# Hosting and Presenting

Pilots are typically web applications (i.e. loaded in a web browser) - integrating them into Taster requires two key questions to be answered:
- How is the pilot presented in Taster
- How is the pilot application hosted?

![Hosting and presenting overview](./overview.png?raw=true)

## Presentation options

Every pilot has a dedicated "pilot info" page within the site that gives an overview of the experience and allows the user to "Try it".

### Integrated pilot

An integrated pilot is presented within the pilot info page, by loading the pilot in an `<iframe>`

![Integrated overview](./integrated-flow.png?raw=true)

More information for preparing an integrated pilot is given [here](../integration/iframe.md)  

### Standalone pilot

A standalone pilot is presented in its own page - the "Try it" button opens the in a new tab in the user's browser.

![Integrated overview](./standalone-flow.png?raw=true)

There are additional integration steps required to prepare a standalone pilot, as detailed [here](../integration/new-window.md)  

## Hosting options

For Taster to present a pilot a security review of the application must occur.

We work in partnership with the BBC's Information Security team (InfoSec) to perform these reviews, and look to assess two key criteria
- what user data is collected, and how is it used?
- has the application considered security, and does it have any potential weaknesses or flaws?

In addition to signing off the **actual pilot application** we also need to assess the environment used to host it. There are a couple of hosting options that impact both the development/deployment process and the overall security review of the pilot. 

### Taster hosted

We can host your application by deploying it into our (BBC sponsered) AWS account, offering the following benefits

| Pros | Cons |
| --- | --- |
| We perform application deployment | |
| We can offer (limited) first line operational support | |
| | Support is office hours only |
| | We can support your actual application (debugging etc) beyond looking at log files |
| | We cannot provide access to your (development) team to the running infrastructure |
| The AWS account is signed off for use as a hosting environment by InfoSec | |

### Third party hosting

It is possible to self-host your pilot application in your chosen hosting environment

| Pros | Cons |
| --- | --- |
| You have control of your applications deployment and infrastructure | |
| | You are responsible for deployment and support of the application |
| | The hosting environment will **require InfoSec approval** by completing a *Holding And Hosting* form |

Note that the third party hosting includes many (commercial) options that may already have been used by previous Taster pilots. Examples include:
- YouTube
- Tumblr
- Interlude

For a pilot using a **new** hosting solution (i.e. one that has not previously been used by a Taster pilot) we will need to complete and Holding And Hosting form in order to approve the solution for use by the BBC Information Security team.

For hosting solutions that have been used before (e.g. You Tube) it is safe to assume the necessary H&H requirements have been satisfied. It is still **important**, however, to describe your application to us so that we can verify that any user data collected/used by the pilot adheres to BBC policy.  
