# Integration steps for standalone pilots

If your pilot is being presented in its own page, it **must** include the following
- [Taster Badge](#Taster_badge)
- [Legal Links](#legal_links)
- [Cookie Warning](#cookie_warning)

## Taster badge

Purpose is to:
 - brands as Taster
 - lets audience know pilot application, and may break
 - provides [standard analytics](fix-this-link)

## Legal Links

Your pilot will need to include links to BBC Terms & Conditions documents.

Typically you would place these links at the bottom of the screen, using HTML markup similar to:

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
