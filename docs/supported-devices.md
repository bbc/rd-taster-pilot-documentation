# Supported Devices

Users aren't always able to use browsers and devices that support the latest features that pilots rely on. To prevent them from receiving a broken experience, the Taster platform performs [feature detection](https://modernizr.com/docs/#what-is-feature-detection) and if their bwoser does not support the required features, it displays a message that suggests they try with an alternative browser.

![An example of a 'unsupported device' warning](./unsupported_device.png?raw=true)

## How it works

We use [Modernizr](https://modernizr.com/) to perform the detection and maintain a list of features that each pilot depends on in our content management system. Taster will automatically test the user's browser for each of these features when they load the pilot info page.

With the exception of the iPhone (due to a bug which cannot be detected by Mozernizr), we are unable to prevent specific browsers or devices from loading a pilot

## What we need from you

The pilot developer team should forward a list of features that the pilot requires to run before the it is ready to be deployed.

Currently Taster can test for the following features:

* Canvas
* Canvas Text
* Cross-window messaging
* CSS 2D Transforms
* CSS 3D Transforms
* CSS Animations
* CSS Gradients
* CSS Reflections
* CSS Transitions
* Flash (version 12 or later)
* Flash (all versions)
* Flexbox
* HTML5 Audio
* HTML5 Video
* HTML5 Media Source Extensions
* Local Storage
* Session Storage
* Web Sockets
* Web SQL Database

In addition, because of specific issues on the device, we also have detections for excluding users from trying pilots on iPhones.

If you depend on features that are not in the list, please let the Taster team know as early as possible and we may be able to add support for detecting that feature.