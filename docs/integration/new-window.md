Integration Hooks for New Window (Off-Site) pilots
==================================================

Although in theory any pilot can open in a new window (for example, to work around bugs
which only occur when in an IFrame), we encourage most pilots to go into an IFrame rather
than popping out a new window. However, if the pilot is a complete website or similar, then
the new window method is appropriate.

New window pilots have the downside of not being surrounded by the Taster frame, so rating and sharing
functionality is not automatically exposed.  We provide different solutions to this problem, to suit your application:

## Static Badging

Some static images are available which you can drop into your application, with a link back to
Taster's rate screen. This should only be used when a HTML solution is not possible.

## Responsive Badging / Off-site Panel

Our preferred solution is an embeddable panel - a responsive widget which exposes Taster branding and functionality for
your application.

To integrate our offsite panel you need to add the following tags to your application HTML, replacing <pilot_id> (e.g. hackstage-pass)
and <panel_type> (e.g. link, rating) with the appropriate values before embedding.  

    <script src="http://www.bbc.co.uk/taster/pilot-lib.js" type="text/javascript" />
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

There are two types of panel: link and rate.

### `link`

The Link variant of the panel features a button which, when clicked, opens the appropriate Taster Pilot Page in a 
new window, with the rating dropdown open.  

### `rate`

The Rate variant keeps users on your page without directing them back to Taster. For users without JavaScript this behaves like the link panel. With this widget the users can rate and answer survey questions on the page and the contents of the iframe update themselves accordingly.
