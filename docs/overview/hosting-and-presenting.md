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

There are two choices for how your pilot application is hosted.

### Taster hosted

We can host your application by deploying it into our (BBC sponsored) AWS account, offering the following benefits

| Pros | Cons |
| --- | --- |
| We perform application deployment | |
| We can offer (limited) first line operational support | |
| | Support is office hours only |
| | We cannot support your actual application code beyond looking at log files |
| | We cannot provide access to the running infrastructure to your (development) team |
| The AWS account is signed off for use as a hosting environment by InfoSec | |

### Third party hosting

It is possible to self-host your pilot application in your chosen hosting environment. In addition to signing off the **actual pilot application**  (see [information security](./information-security.md)) we will also need to assess the chosen hosting environment.

| Pros | Cons |
| --- | --- |
| You have control of your applications deployment and infrastructure | |
| | You are responsible for deployment and support of the application |
| | The hosting environment will **require approval from the BBC Information Security team** by completing a *Holding And Hosting* form |

**Note**
Third party hosting includes many (commercial) options that may already have been used by previous Taster pilots, e.g. YouTube, Tumblr or Interlude. For hosting solutions that have been used before it is safe to assume the necessary H&H requirements have been satisfied.  
