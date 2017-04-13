# Taster Classic Badge Integration

This document is intended for those who want to integrate the classic badge into their pilot. Please follow these instructions carefully, and if you wish to deviate from the default settings for any reason, please discuss this with a member of the Taster team (tastertech@rd.bbc.co.uk).

There are two types of classic quickrate badge:

| `<panel_type>` | use |
| --------------|-----|
| `link` | The panel features a button that, when clicked, opens the appropriate Taster Pilot Page in a new window, with the rating dropdown open |
| `rate` | Keeps users on your page without directing them back to Taster. For users without JavaScript this behaves like the link panel. With this widget the users can rate and answer survey questions on the page and the contents of the iframe update themselves accordingly |

## Integration Guide

There are several components and specifications that must be included in your site to allow the slim badge to operate correctly. They should be included on any page that is visible to the user.

1. The head of the document should contain the following script tag:

  ```
  <script type="text/javascript" src="http://www.bbc.co.uk/taster/pilot-lib-slim.js"></script>
  ```

2. The iframe (which contains the quickrate badge) should be placed on the page with the following lines which initiate an iFrame pointed at the slim badge for your pilot. Please note that `<pilot-id>` should be replaced with the pilot ID that you have been assigned and `<panel_type>` should be relaced with `link` or `rate` according to the desired state described in the table above (if you are uncertain of these settings, please speak to the Taster team or refer to the Testing section at the end of this document):

  ```
  <iframe class="taster-offsite-panel" src="http://www.bbc.co.uk/taster/projects/<pilot-id>/offsite/slim" frameborder="0" scrolling="no"></iframe>
  ```

3. At the end of the HTML document, the following code should be entered:

  ```
  <script type="text/javascript">
      require(['pilot-lib-slim/taster-offsite-panel'], function (Panel) {
          var panel = new Panel('.taster-offsite-panel');
      });
  </script>
  ```

4. In order for the badge to operate correctly, certain CSS rules need to applied to the iframe as follows:

  ```
  .taster-offsite-panel {
    position: fixed;
    right: 0;
    top: 0;
    width: 56px;
    z-index: 2;
  }
  ```

It should be noted that it is important for the iFrame to sit above all other content on the page. This means that the z-index should be a number greater than any other content (we have used the value 2 as a reference only). Please test your pilot to ensure that the badge is always visible and functional.

## Testing

The badge will not be fully active, and interacting it will return a 404 page on Taster, until the pilot has been activated on our CMS. Or if you have not been assigned a pilot ID but wish to test the badge. If you wish to test a fully functional badge within your pilot then you can use the following amendments to the guide above.

1. In order to test the rating version of the badge in an iFrame, please redirect the iframe to a test URL as shown in the following example code:

  ```
  <iframe class="taster-offsite-panel" src="http://www.test.bbc.co.uk/taster/projects/automatedtestpilot/offsite/rate" frameborder="0" scrolling="no"></iframe>
  ```

2. In order to test the link version of the badge in an iFrame, please redirect the iframe to a test URL as shown in the following example code:

  ```
  <iframe class="taster-offsite-panel" src="http://www.test.bbc.co.uk/taster/projects/automatedtestpilot/offsite/link" frameborder="0" scrolling="no"></iframe>
  ```

**This cannot be delivered to us in the final version. Please ensure that this is for testing only, and update to the correct version as per the instructions outlined in section 2 above.**

### If you require any additional information or support, or you wish to make any changes to the instructions above, please contact a member of the Taster Team (tastertech@rd.bbc.co.uk).
