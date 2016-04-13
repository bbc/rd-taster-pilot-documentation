# Integration steps for integrated pilots

Integrated pilots are presented in the Taster site within an iframe, as described [here](../overview/presentation.md#integrated-pilot).

There are no 'integration steps' as such, but to help ensure your pilot works as expected when presented in Taster you should
- Load your pilot in the [test harness](#taster-iframe-test-harness) and test it
- Implement any of the [Taster features](#taster-features-for-integrated-pilots) that are appropriate (and use the test harness to check they work)

## Taster features for integrated pilots

### Sizing the IFrame

**Modes**

There are two modes for an IFrame in Taster: 16x9 mode and full-height mode. 16x9 mode is appropriate for
videos, games, etc, which expect to be shown in the 16x9 aspect ratio. The Taster team can create your pilot
in the CMS in this mode and no further integration is required from your end.

Full-height mode by default sizes the IFrame to 90% of the height of the user's device. This can result in a
less-than-desirable "double scroll bar" effect, where the outer page has a scroll bar, as does the IFrame
within it. You can overcome this limitation by using JavaScript to inform the Taster site to vary
the IFrame height appropriately.

**Varying the height**

The [window.postMessage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
can be used to send messages to Taster to inform it of the desired IFrame height, in pixels. The IFrame
will then be resized to this height.

The format of the message sent should be JSON in the form:

    { type: 'heightChange', desiredHeight: 42 }

Using postMessage you should not specify a target to maximise compatibility. As a result
postMessage **should not be relied on or used to communicate any security critical data**.
You can assume Taster has set up event listeners before your IFrame is loaded - you do not
have to take into account race conditions.

The following snippet uses JQuery to send the correct height to Taster:
 
    function notifyHeightChange() {
        var event = {
            type: 'heightChange',
            desiredHeight: $(document).height()
        };
        window.parent.postMessage(JSON.stringify(event), '*');
    }
    $(notifyHeightChange);
    $(window).resize(notifyHeightChange);

The harness listens to the appropriate events and will resize in response to what is sent.

### Opening the Inside Story

The [window.postMessage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
can be used to send messages to Taster to request that it hide the pilot and display its Inside Story.

The format of the message sent should be JSON in the form:

    { type: 'showInsideStory' }

Using postMessage you should not specify a target to maximise compatibility. As a result
postMessage **should not be relied on or used to communicate any security critical data**.
You can assume Taster has set up event listeners before your IFrame is loaded - you do not
have to take into account race conditions.

The following snippet will ask Taster to display the Inside Story:
 
    window.parent.postMessage('{ "type": "showInsideStory" }', '*');


### Autoplaying/pausing

The Taster site starts by pre-loading a pilot in an invisible IFrame that is then shown when the user
clicks the 'Try' button. There are also user journeys (e.g., clicking 'Info' or 'Inside Story' once
the 'Try' button has been clicked) which can hide the pilot after is has been shown. For a smooth
user journey, it's been desirable to trigger an auto-play event once 'Try' has been clicked (to avoid
having to click two buttons), and also to pause the pilot if the pilot once again becomes hidden.

Taster uses the [window.postMessage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
to send JSON messages to the pilots to indicate events which have changed the state of the pilot in the
Taster UI.

These JSON messages consist of an object with one key: 'type'. More keys may be added in future based
on the message type. There are the following types of messages:

* `show` - this is sent when the pilot becomes visible to the user (e.g., "try" button clicked)
* `hide` - this is sent when the pilot is hidden from the user (e.g., "inside story" clicked)

A pilot may choose to implement a message handler such as the one below:

    function receiveMessage(ev) {
        var event;
        try {
            event = JSON.parse(ev.data);
        } catch (ex) {
            return;
        }
        if (event.type === 'show') {
            play();
        } else if (event.type === 'hide') {
            pause();
        }
    }
    window.addEventListener('message', receiveMessage, false);

The harness implements this functionality by toggling between the info and try panels.

Please note that when designing your UI, you should not rely on these messages. There is a
possibility of a race condition where the events are sent before your event listeners are set
up (e.g., if the pilot takes a long time to load). You should provide functionality in the UI
(for example, a play button) for this case and not solely rely on these messages to trigger
UI functionality.

### Deep-linking

By default, users accessing an IFrame pilot on Taster will be taken to the landing page (as
configured in the CMS) of that pilot. There are circumstances where it's desirable to be able
to deep-link to content within the pilot without losing the Taster frame.

Taster supports the 'hashbang' URL format and will pass through any hashbangs to the IFrame.

When generating URLs for sharing, they should be in the form: http://www.bbc.co.uk/taster/projects/project_id/try#!/anything/you/want/here.
When the user visits that page, then the hashbang on the Taster URL will be passed through to your application,
e.g., if your pilot was _example_ and was hosted at http://example.pilots.bbcconnectedstudio.co.uk/, then
when someone visits http://www.bbc.co.uk/taster/projects/example/try#!/content, then the
URL loaded in the IFrame will be http://example.pilots.bbcconnectedstudio.co.uk/#!/content. 
You can then read the hashbang using JavaScript to respond appropriately.

The harness will correctly pass through the parameters to the embedded pilot when called with them.
(Remember to refresh, as just changing the hash in the URL will not cause a page reload in some
browsers).


## Taster iframe test harness

A Taster test harness exists to help you build and test your site in an iFrame environment. This harness simulate the additional hooks provided by Taster (as described above)

To get a copy of the harness
- visit [bbcconnectedstudio/taster-harness release page](https://github.com/BBCConnectedStudio/taster-harness/releases)
- download dist.zip for the most recent release

The download includes a small site you can launch on your local machine. The site includes an iframe (the test harness) whos *src* attribute you update to reference a link to your pilot application 

You can then edit the JS config in the top of the index.html page to point at your pilot.
The harness only works when served over HTTP, so you should do something like: `python -mSimpleHTTPServer` in the unzipped folder and then access http://localhost:8000.
