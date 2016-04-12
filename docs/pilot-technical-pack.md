#Pilot Technical Pack

## Stats (Analytics): Taster uses BBC echo analytics for tracking reports

The BBC's stats library is available documented here http://bbc.github.io/echo-docs/
Taster offers integrated basic analytics for both embeding options: iFrame and Windows. These are: page views, rating counts, and sharing counts

For more custom analytics within the pilot pages and specific interations, you need to create your own counternames and labels following the formats below

Countername: taster.pilot.&lt;pilot_id&gt;.internal.&lt;page_identifiers&gt;.page

Labels: pilot_id=&lt;pilot-name&gt;

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

## Technical review

All pilots must be reviewed by one of the BBC's technical team prior to appearing in Taster. The important
factors to consider are related to scalability and security.
