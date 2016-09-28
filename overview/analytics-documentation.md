# Taster Analytics for Pilots: Standard & Custom

## Table of Contents
- [Introduction](#intro)
- [Standard Analytics intro](#Standard-Analytics)
- [Custom Analytics intro](#custom-Analytics)
- [How do I Implement these?](#how-to-do)
  - [Standard Analytics](#standard)
  - [Custom Behavioural Analytics](#custom)
- [Reporting](#reporting)



<div id='intro'/>
## Introduction
Analytics are essential elements to your pilot. Taster is built on a data platform that is driven by the way we implement tracking in pilots and on the Taster site itself.

The success of pilots also depends on how pilots are measured, and analysed. The successful implementation of ways to capture data about a pilot is essential to doing this.

_There are 2 types of analytics implementation:_

**Standard:** Tracks the number of people who visited the pilot, how many pages they consumed, where they came from (site, geography), what technology they use, and where they went next. We also take care of ratings, shares and tries for your pilot.

**Custom behavioural:** This is an extra step that we will need to work together on. This tracks where people went in a pilot, and what they did. While this is not mandatory, we would recommend including this kind of tracking in pilots where you would like to understand in detail user journeys, interactions, etc.

So what do I need to do... Don't worry! It's not difficult.

<div id='Standard-Analytics'/>
###Standard Analytics:

Your **standard** analytics are built into the Taster integration that you undertake with the Taster team, whether that's via the Taster site itself (for integrated pilots) or via the quick-rate badge (for standalone pilots), which handles all data capture. This answers:

1) How many people went to your experience + pageviews

2) Data about what devices, geographic location

3) Custom Taster data: Tries, ratings, survey questions etc.

If this is all you want to do, please go down to the [How do I do this?](#how-to-do) section.

If you want to know more about custom analytics, **read on..**


<div id='custom-Analytics'/>
###Custom behavioural Analytics:

**Custom** behavioural analytics however, need to be implemented separately as part of your build, but we want to make this easy for you, so there's a step by step process that you can take.

In its simplest form, the custom behavioural data you want to usually capture is:

**1) Where did people go in your experience?**

Essentially here you want to identify the different stages in your experience and give them a unique identifier. That way you can tell when someone goes from one 'place' to another, and how many people in total saw a certain part of your experience.

**Example:** I have a pilot with 5 'scenes' - if we label each 'scene' with a unique identifier, we can then tell where people went in the experience.

**Another example:** I have a pilot that has 2 narrative threads that I would like to track, and a landing and exit page. If we label the landing and exit page, and distinctly label each narrative thread, we can tell, again, where people went in the experience.

**2) What did people do in your experience?**

What you want to identify here is whether people interacted with 'things' in your pilot. That could be clicks, hovers, attention or gaze.

**Example:** I have a scene with 3 interactions, and then a share button. If we tag these interactions with an 'action', we can then tell how many people interacted with those actions.

**Another example:** I have a pilot that has a retry button at the end of the pilot. If we tag the retry button with an 'action', we can then tell how many people interacted with the retry button.

<div id='how-to-do'/>
##How do I Implement these?

<div id='standard'/>
###STANDARD ANALYTICS:

If you have just the requirement to know how many people engaged with your pilot, ratings, shares and survey answers - then you will need to do the following:

**- For integrated pilots:**

Your analytics are tied to your pilotID and are automatically generated as part of the publishing process on Taster.

**- For standalone pilots:**

Your analytics are tied to the quick-rate badge, and your pilot-ID.

**To implement** the quickrate badge, you will need to follow the documentation supplied in your Taster onboarding documentation.

The way this works is by setting 2 stats counters on pilot pages:

1. Taster Countername: taster.pilot.<pilot\_id>.page
2. Taster pilot\_id: pilot\_id=<pilot-name>

Your Content Producer will supply you with a pilot ID that you can then use to integrate the badge correctly, as [documented here](../technical/standalone-pilot-integration-steps.md).

**It is very important to select the correct variable and pilot ID when implementing as this will have impact in terms of analytics and attribution.**
**If you are running your pilot on a BBC product page (Eg. Sport), please note that the correct URL variant must be used in your implementation to ensure there is no conflict on existing countername implementation. The implication of this will be that pageviews are not counted via the quick-rate badge, and will not appear in the Taster dashboard. You will need to count pageviews via the product's countername.**
<div id='custom'/>
###CUSTOM BEHAVIOURAL ANALYTICS:

In order to add further analytics to the pilot, we are going to use the BBC's Echo libraries to set our custom analytics within our pilot.

The BBC's stats library is available documented here [http://bbc.github.io/echo-docs/](http://bbc.github.io/echo-docs/) Taster offers integrated basic analytics for both embeding options: iFrame and Windows. These are: page views, rating counts, and sharing counts

For more custom analytics within the pilot pages and specific interations, you need to create your own counternames and labels following the formats below
```
Countername: taster.pilot.<pilot\_id>.internal.<page\_identifiers>.page

Labels: pilot\_id=<pilot-name>
```

Please use the hosted version of the javascript library which is available here:

[http://static.bbci.co.uk/echoclient/modules/echo-4.0.2.js](http://static.bbci.co.uk/echoclient/modules/echo-4.0.2.js)

To use this version you need to amend your requiremap:

`require.config({ paths: {'echo-4.0.2' : 'http://static.bbci.co.uk/echoclient/modules/echo-4.0.2'} });`

Echo can then be invoked in the manner detailed in the Echo documentation, for example for a pilot called 'some-pilot':
```
require(['echo-4.0.2'], function(Echo){
  var Media = Echo.Media,             // Media class            EchoClient = Echo.EchoClient,   // Echo Client class
  Enums = Echo.Enums,             // Enums
  ConfigKeys = Echo.ConfigKeys,   // Key names to use in config            Environment = Echo.Environment; // Class to allow overriding default behaviour
  var echo = new EchoClient(
    'taster',                    // App Name - leave as taster
    Enums.ApplicationType.WEB   // App Type
  );
  
  //set bbc\_site managed label - this label is mandatory and is required to assign data in comscore to the correct BBC product:
  echo.addManagedLabel(Enums.ManagedLabels.BBC\_SITE, "taster");

  // Change your-pilot-name to your pilot ID
  echo.addLabel("pilot_name”,"your-pilot-name");
  
  // You can optionally set the version of your application:
  echo.setAppVersion('1.0.0');
  
  // Change your-pilot-name to your pilot ID
  echo.viewEvent("taster.pilot.your-pilot-name.internal.home.page");
});
```
You may see some failed calls (probably 401) from this library, don't worry about these, they are calls to a currently disabled analytics system.

You can check whether your implementation is working with this chrome extension

[https://chrome.google.com/webstore/detail/dax-istats-log/jgkkagdpkhpdpddcegfcahbakhefbbga?hl=en-GB](https://chrome.google.com/webstore/detail/dax-istats-log/jgkkagdpkhpdpddcegfcahbakhefbbga?hl=en-GB)

The 2 types of tracking you want to implement translate into 2 simple labels:

### 1. Where did people go in your experience?

What we do here is provide more definition of 'what' page someone is on in the experience.

Your pilot as standard is supplied a countername, which looks a bit like:

`taster.pilot.<pilot\_id>.page`

We want to add more detail to it, and it should look like this:

`taster.pilot.<pilot\_id>.internal.<your\_page\_identifier>.page`

We've added 'internal' so that there is the distinction that it is 'within' the pilot, and then `<your\_page\_identifier>` allows you to clearly identify what the page / step is.

You will need to clearly label the pages you want to track in a way that when you come back to these names, you'll be able to tell what they are, and what they correspond to.

### 2. What did people do in your experience?

What we do here is allow our analytics to know when someone's clicked on something.

We can create specific types of action in our analytics package. They are called 'hidden actions' and have 2 parts to them, plus an identifier that makes the action 'hidden' - something like a 'verb' and a 'noun', and a qualifier:
```
  Noun: action\_name=example\_click
  Verb: action\_type=click
  Hidden action: ns\_type=hidden
```
It's important to name your 'noun' so you can differentiate it from other types of action. Your 'verb' can be more generic, but describing the thing that the person does.

**Example:**

I want to track a 'retry' button and a 'share' button at the end of my experience:

retry button:
```
  action\_name=myexperience\_retry
  action\_type=click
  ns\_type=hidden
```


share button:
```
  action\_name=myexperience\_share
  action\_type=click
  ns\_type=hidden
```
In order to implement both of these analytics frameworks, as mentioned before, you simply need to use the BBC's standard Echo analytics library, which allows you to set these labels and counternames through some simple Javascript.

Also – here’s a handy template that will allow you to visualise the tagging strategy that you’re creating:
<a href="https://myshare.box.com/s/xa5k59pqei3jtdurnh32jzt5eely572a">Taster_pilot_analytics_framework.xlsx</a>
<div id='reporting'/>
##Reporting

The standard analytics flow directly into the Taster Dashboard. You don't need to worry about this.

Custom behavioural analytics will have a little more work for you to do, but we've made it as simple as possible.

Built into the BBC's Digital Analytix package are some pre-built reports that look at Taster pilots. As part of your pilot onboarding process, we will set you up with a subscription to this report and this will run weekly, with a wrapup report at the end, which sums everything up.

It will capture the number of browsers overall who engage with your pilot, and then show you who visit different parts of your pilot, and secondly who interacts with actions in the pilot.

So, all you need to do is wait for the email.

## Alternative analytics systems?

In theory you could use a custom system to record user actions/analytics, however, any system storing user data must
have BBC legal and Information Security Sign off, by the completion of a [H&H form](information-security.md#the-review-process).

Google Analytics, for example, **cannot be used** as it stores user data ourside the UK.

We recommented using the provided BBC Echo library, as this is already signed off for use 
