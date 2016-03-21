# Hosting and Presenting

Pilots are typically web applications (i.e. loaded in a web browser) - integrating them into Taster requires two key questions to be answered:
- How is the pilot presented in Taster
- How is the pilot application hosted?

![Hosting and presenting overview](./overview.png?raw=true)

Every pilot has a dedicated "pilot info" page within the site that gives an overview of the experience and allows the user to "Try it".

## Integrated pilot

An integrated pilot is presented within the pilot info page, by loading the pilot in an `<iframe>`

![Integrated overview](./integrated-flow.png?raw=true)

More information for preparing an integrated pilot is given [here](../integration/iframe.md)  

## Standalone pilot

A standalone pilot is presented in its own page - the "Try it" button opens this new page in a new tab in the user's browser.

![Integrated overview](./standalone-flow.png?raw=true)

There are additional integration steps required to prepare a standalone pilot, as detailed [here](../integration/new-window.md)  
