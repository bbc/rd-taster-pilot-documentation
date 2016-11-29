# Offsite Quickrate MVT

## A step-by-step guide to integrate the MVT badge, for both the full width (variant A) and slim badge (variant B).

In the case of the MVT (multivariant testing), the pilot will have a quickrate variant randomly assigned (examples of all badges can be seen at: http://www.test.bbc.co.uk/taster/badge-showcase). This should occur with an approximately 50/50 split for unique browsers accessing a pilot (the assigned variant is stored as a cookie on the users machine). The full width rate bar (variant A) will sit above the pilot in the iframe, while the slim badge (variant B) will be a fixed position element which will hover above other elements on your page (see [variant a example](http://dummy.pilots.bbcconnectedstudio.co.uk/variant_a.html) vs. [variant b example](http://dummy.pilots.bbcconnectedstudio.co.uk/variant_b.html))

## Integration guide
The following information will detail the steps for implementing the MVT; and variant A or variant B independently.
MVT Implementation
1. The head of the document should contain the following script tag:
```
<script type="text/javascript" src="http://www.bbc.co.uk/taster/pilot-lib.js"></script>
```

2. The iframe (which contains the quickrate badge) should be placed on the page with the following HTML:
```
<iframe class="taster-offsite-panel" src="http://www.bbc.co.uk/taster/projects/<pilot-id>/offsite/rate_mvt" frameborder="0" scrolling="no" id="iFrameResizer0></iframe>
```

3. At the end of the document (within the body tags), the following code should be entered (ensuring that the classname from the line above matches that referred to below):
```
<script type="text/javascript">
    require(['pilot-lib/taster-offsite-panel'], function (Panel) {
        var panel = new Panel('.taster-offsite-panel');
    });
</script>
```

## MVT Variant Selection

An individual variant of the MVT can be specified through query strings in the following form. Replace the iframe reference (line 2 of the Integration guide section) with one of the following.

To add [variant a](http://dummy.pilots.bbcconnectedstudio.co.uk/variant_a.html) ( to your pilot use the following query string:
```
<iframe class="taster-offsite-panel" src="http://www.bbc.co.uk/taster/projects/<pilot-id>/offsite/rate_mvt?variant=a" frameborder="0" scrolling="no" id="iFrameResizer0></iframe>
```

To add [variant b](http://dummy.pilots.bbcconnectedstudio.co.uk/variant_b.html) to your pilot use the following query string:
```
<iframe class="taster-offsite-panel" src="http://www.bbc.co.uk/taster/projects/<pilot-id>/offsite/rate_mvt?variant=b" frameborder="0" scrolling="no" id="iFrameResizer0></iframe>
```

## Styling

The styling of the MVT is important as the two variants will require different styling.

A class will be **automatically** assigned to the iframe. You do not need to assign the classname in the iframe declaration.

Variant A will receive the class: `variant-a` and variant B will receive the class: `variant-b`.  An example of styling is shown below. This can be customised to some extent, but changes should be discussed with the Taster team (e.g. changes to position or size).
```
.taster-offsite-panel {
  display: block;
  height: 92px;
  position: relative;
  right: 0;
  top: 0;
  z-index: 75;
  width: 100%
}
.variant-a {
  position: relative;
  right: 0;
  top: 0;
  width: 100%;
}
.variant-b {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
}
```

#### If you require any additional information or assistance, please contact the Taster team.
