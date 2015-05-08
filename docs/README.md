lot Technical Pack

##Stats: Echo

The BBC's stats library is available documented here http://bbc.github.io/echo-docs/
You will be provided with counter names to use, there will be of the form

	corporate.connectedstudio.<pilotname>.<page identifiers>.page

You will also need to add a label if the pilot is being tested in Taster, this will be of the form 

	tasterpilot=<pilot name>
 
##Legal Links
If the pilot is going to presented outside the Taster frame you will need to add links (usually at the bottom) to BBC T&C documents. Something similar to the html fragment below.

	<a href="http://www.bbc.co.uk/privacy/information
	/policy/"target="_blank">Privacy policy</a> | 
	<a href="http://www.bbc.co.uk/terms" 
	target="_blank">Terms and conditions</a>
 
##Cookie Warning
If your site makes any use of cookies(including using the stats package above) you will have to add a cookie warning.  This needs to be prominent on the users first visit to the site but can then disappear.

	<div id="cookie-warning"><h2>Cookies on this BBC
	 website</h2><p>We use cookies to ensure you get the 
	 best website experience. If you continue without
	 changing your settings, we'll assume that you are
	 happy to receive all cookies on this website. 
	 However you can change your cookie settings at 
	 any time.</p>
	<a href="http://policy.pilots.bbcconnectedstudio
	.co.uk/cookies.html" target="_blank">
	Find out more</a></div>

As part of your technical review we will be looking at cookie usage to check whether a more specific warning is required.
 
##Taster Integration
Please see Taster Tenants Integration pages

##Technical review
All pilots must be reviewed by one of the BBC's technical team prior to appearing in Taster.  The important factors to consider are related to scalability and security.
 
##Information Security
Many pilots will require checking by the BBC's Information Security team.  This involves filling in two forms, one describes how the application works and the steps taken to secure it, the other is a checklist of the top 25 security issues.  If this is needed the developer will be given access to the BBC's systems to allow them to complete these forms and discuss them with the InfoSec team.# INDEX

