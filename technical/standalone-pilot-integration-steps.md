# Integration steps for standalone pilots

These instructions are for pilot teams for whom their pilot will **not** be integrated into Taster. In this instance, Taster will present a link which will direct users to a different URL under which the pilot is accessible. As such, the rating/sharing functionality, legal links, and cookie warnings, which are built into Taster, will not be accessible. The solution to this problem has been resolved through the use of iFrames.

If your pilot is being presented in its own page, it **must** include the following
- [Taster Quickrate Badge](#taster-quickrate-badge)
- [Legal Links](#legal-links)
- [Cookie Warning](#cookie-warning)

## Taster quickrate badge

The Taster quickrate badge adds some key functionality to your pilot:
 - brands the pilot as a BBC Taster project
 - manages audience expectation by advertising that the pilot may break
 - provides [standard analytics](../overview/analytics-documentation.md#Standard-Analytics) for the pilot

We have developed two badges which will sit within your pilot. There is a Slim edition and a Classic Edition. Each of these may be chosen for different reasons outlined below:

* ### Slim edition

 The Taster Slim Badge is a small badge that sits at a fixed position at the upper right hand side of your pilot. You may wish to use this option if your pilot is predominately a mobile pilot; doesn't contain elements that would be obscured by the badge; or you wish to reduce the space at the top of the pilot that the rating bar requires. As this version of the badge is smaller, it may reduce the conversion to rates and shares. A demonstration version is visible at:

 http://dummy.pilots.bbcconnectedstudio.co.uk/offsite_slim

 If you wish to use this version of the badge, please refer to the integration documentation in the associated document, i.e:

 [**Slim Badge Integration Guide**](taster-slim-badge-integration.md)

* ### Classic edition

 The Taster Classic Badge is a larger badge that sits full width at the very top of your pilot, above all other content as a separate element. You may wish to use this badge if your layout prevents the overlay of the slim badge; if you wish to increase the conversion to ratings (the slim badge is smaller); or your pilot is primarily intended for desktop applications.
 If you wish to use the classic badge at this time, please refer to the integration documentation in the associated document, i.e:

 [**Classic Badge Integration Guide**](taster-classic-badge-integration.md)

## Legal Links

Your pilot will need to include links to BBC Terms & Conditions documents.

Typically you would place these links at the bottom of the screen, using HTML markup similar to:

```
<a href="http://www.bbc.co.uk/privacy/information/policy/"target="_blank">Privacy policy</a> |
<a href="http://www.bbc.co.uk/terms" target="_blank">Terms and conditions</a>
```

## Cookie Warning

As per modern web standards, if your site makes any use of cookies you will have to add a cookie warning.

This needs to be prominent on the users first visit to the site but can then disappear.

```
<div id="cookie-warning">
<h2>Cookies on this BBC website</h2>
<p>We use cookies to ensure you get the best website experience. If you continue without
 changing your settings, we'll assume that you are happy to receive all cookies on this website.
 However you can change your cookie settings at any time.</p>
<a href="http://policy.pilots.bbcconnectedstudio.co.uk/cookies.html" target="_blank">Find out more</a></div>
```

As part of your technical review we will look at cookie usage to check whether a more specific warning is required.

*Note that as the Taster badge uses a cookie, you* **must** *include a cookie warning in the pilot, even if your application doesn't use cookies itself*

#### If anything is unclear, please contact a member of the Taster Team for support (tastertech@rd.bbc.co.uk).
