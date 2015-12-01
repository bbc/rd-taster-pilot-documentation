#Pilot Technical Pack

## Stats: Echo

The BBC's stats library is available documented here http://bbc.github.io/echo-docs/
You will be provided with counter names to use, these will be of the form

	taster.pilot.<pilot_name>.internal.<page_identifiers>.page

You will also need to add a label if the pilot is being tested in Taster, this will be of the form 

	pilot_name=<pilot-name>

Please use the hosted version of the javascript library which is available here:

http://static.bbci.co.uk/echoclient/modules/echo-4.0.2.js

To use this version you need to amend your requiremap:

```require.config({ paths: {'echo-4.0.2' : 'http://static.bbci.co.uk/echoclient/modules/echo-4.0.2'} });```

Echo can then be invoked in the manner detailed in the Echo documentation, for example for a pilot called 'some-pilot': 

```
   require(['echo-4.0.2'], function(Echo){

       var Media = Echo.Media,             // Media class
           EchoClient = Echo.EchoClient,   // Echo Client class
           Enums = Echo.Enums,             // Enums
           ConfigKeys = Echo.ConfigKeys,   // Key names to use in config
           Environment = Echo.Environment; // Class to allow overriding default behaviour

       var echo = new EchoClient(
           'taster',                    // App Name
           Enums.ApplicationType.WEB   // App Type
       );
       
       //set bbc_site managed label - this label is mandatory and is required to assign data in comscore to the correct BBC product:
       echo.addManagedLabel(Enums.ManagedLabels.BBC_SITE, "taster");

       //You can optionally set the version of your application:
       echo.setAppVersion('1.0.0');

       echo.viewEvent("taster.pilot.some-pilot.internal.home.page");
   });    
```

You may see some failed calls (probably 401) from this library, don't worry about these, they are calls to a currently disabled analytics system.

You can check whether your implementation is working with this chrome extension

https://chrome.google.com/webstore/detail/dax-istats-log/jgkkagdpkhpdpddcegfcahbakhefbbga?hl=en-GB
 
The pilot ID as used in the counter name should match the ID you are assigned for Taster, but with the dashes converted to underscores. When used in the pilot_name label, you should make sure it matches the Taster name exactly. For example, the pilot 'My Test Pilot' may be assigned the Taster ID 'my-test-pilot', so you should set the label `pilot_name=my-test-pilot`, and use the counter name of `taster.pilot.my_test_pilot.internal.something.page`.

## Legal Links

If the pilot is going to presented outside the Taster frame you will need to add links (usually at the bottom) to BBC 
T&C documents. Something similar to the html fragment below.

	<a href="http://www.bbc.co.uk/privacy/information/policy/"target="_blank">Privacy policy</a> | 
	<a href="http://www.bbc.co.uk/terms" target="_blank">Terms and conditions</a>
 
## Cookie Warning

If your site makes any use of cookies (including using the stats package above) you will have to add a cookie warning.
This needs to be prominent on the users first visit to the site but can then disappear.

	<div id="cookie-warning">
	<h2>Cookies on this BBC website</h2>
	<p>We use cookies to ensure you get the best website experience. If you continue without
	 changing your settings, we'll assume that you are happy to receive all cookies on this website. 
	 However you can change your cookie settings at any time.</p>
	<a href="http://policy.pilots.bbcconnectedstudio.co.uk/cookies.html" target="_blank">Find out more</a></div>

As part of your technical review we will be looking at cookie usage to check whether a more specific warning is required.

## Device Capabilities

We do client-side feature detection to let our audience know whether a pilot will work on their device or not, and require a list of the required features for the pilot, eg:

CSS Animations, CSS 2D Transforms, CSS 3D Transforms, CSS Transitions, Session Storage, CSS Animations, CSS Gradients, CSS Reflections, CSS 2D Transforms, CSS 3D Transforms, CSS Transitions, Canvas, Canvas Text, HTML5 Audio, HTML5 Video, HTML5 Media Source Extensions, Flash (version 12 or later), Flash (all versions), Not iPhone, Flexbox, localStorage, Cross-window messaging, sessionStorage, Web Sockets, Web SQL Database

## Taster Integration

There are two main approaches to integrating into Taster:

* [IFrame](integration/iframe.md)
* [New Window](integration/new-window.md)

You should talk to the Taster team to understand which is best for your application. As a general
rule of thumb, things like interactive video, standalone games, etc. work best in an IFrame. Standalone
websites and external things like Twitter bots work best in a new window. Use the links above to
read more about the different approaches and integration hooks.

## Technical review

All pilots must be reviewed by one of the BBC's technical team prior to appearing in Taster. The important
factors to consider are related to scalability and security.
 
## Information Security
Many pilots will require checking by the BBC's Information Security team.  This involves filling in two forms, 
one describes how the application works and the steps taken to secure it, the other is a checklist of the top 25 
security issues.  If this is needed the developer will be given access to the BBC's systems to allow
them to complete these forms and discuss them with the InfoSec team.

