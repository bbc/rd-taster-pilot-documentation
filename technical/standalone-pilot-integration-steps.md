# Integration steps for standalone pilots

If your pilot is being presented in its own page, it **must** include the following
- [Taster Quick-rate Badge](#taster-quick-rate-badge)
- [Legal Links](#legal-links)
- [Cookie Warning](#cookie-warning)

## Taster quick-rate badge

The Taster quick-rate adds some key functionality to your pilot  
 - brands the pilot as a BBC Taster project
 - manages audience expectation by advertising that the pilot may break
 - provides [standard analytics](../overview/analytics-documentation.md#Standard-Analytics) for the pilot

To integrate our offsite panel you need to add the following tags to your application HTML, replacing `<pilot_id>` (e.g. hackstage-pass)
and `<panel_type>` (see below table) with the appropriate values before embedding.  

    <script src="http://www.bbc.co.uk/taster/pilot-lib.js" type="text/javascript" ></script>
    <iframe class="taster-offsite-panel" src="http://www.bbc.co.uk/taster/projects/<pilot_id>/offsite/<panel_type>" frameborder="0" scrolling="no"></iframe>

The panel can be given a width with CSS or the width attribute on the iframe element; the height will be responsively
adjusted so this must be left unset.  The minimum width is 285px, any less and the panel will not display correctly.  
Positioning is up to you but we would recommend that the panel is positioned in such a way as to not require scrolling
by the user to interact with.

The panel is initialised by adding the following JS snippet to the page:

    <script type="text/javascript">
        require(['pilot-lib/taster-offsite-panel'], function (Panel) {
            var panel = new Panel('.taster-offsite-panel');
        });
    </script>

There are two types of panel:

| `<panel_type>` | use |
| --------------|-----|
| `link` | The panel features a button that, when clicked, opens the appropriate Taster Pilot Page in a new window, with the rating dropdown open |
| `rate` | Keeps users on your page without directing them back to Taster. For users without JavaScript this behaves like the link panel. With this widget the users can rate and answer survey questions on the page and the contents of the iframe update themselves accordingly |

## Legal Links

Your pilot will need to include links to BBC Terms & Conditions documents.

Typically you would place these links at the bottom of the screen, using HTML markup similar to:

    <a href="http://www.bbc.co.uk/privacy/information/policy/"target="_blank">Privacy policy</a> | 
    <a href="http://www.bbc.co.uk/terms" target="_blank">Terms and conditions</a>
 
## Cookie Warning

As per modern web standards, if your site makes any use of cookies you will have to add a cookie warning.

This needs to be prominent on the users first visit to the site but can then disappear.

    <div id="cookie-warning">
    <h2>Cookies on this BBC website</h2>
    <p>We use cookies to ensure you get the best website experience. If you continue without
     changing your settings, we'll assume that you are happy to receive all cookies on this website. 
     However you can change your cookie settings at any time.</p>
    <a href="http://policy.pilots.bbcconnectedstudio.co.uk/cookies.html" target="_blank">Find out more</a></div>

As part of your technical review we will be looking at cookie usage to check whether a more specific warning is required.

*Note that as the Taster badge uses a cookie, you* **must** *include a cookie warning in the pilot, even if your application doesn't use cookies itself* 
