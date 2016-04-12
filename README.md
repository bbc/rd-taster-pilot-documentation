# Taster pilots technical integration documentation

Pilot applications aim to test and validate new ideas through real audience feedback. [BBC Taster](http://www.bbc.co.uk/taster) is a platform that allows the presentation of these pilots to an audience and provides a framework for gathering user feedback.

Pilots applications are typically (but not always) web applications. This documentation gives an overview of the steps you (the pilot author) and the BBC Taster team will go through together, concentrating on the development and deployment activities, to build, deploy and present the pilot in Taster.

## On-boarding Process

Creating and launching your pilot into Taster is a collaborative effort. You will go through the following stages, working with the Taster team throughout 

<img src="./overview/images/pilot-process.png" alt="Taster hosting overview" width="650" >

More detail about the concerns highlighted in the process are given below, including the **actions that must be completed** to satisfy them. 

<table>
    <thead>
        <tr>
            <th></th>
            <th>Taster team actions</th>
            <th>Pilot team actions</th>
            <th>Documentation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p><strong>Scoping</strong></p>
                <p>Tell us how your pilot application works and we'll confirm we've understood</p>
            </td>
            <td>
                Advise on:
                <ul>
                    <li>InfoSec requirements</li>
                    <li>Hosting requirements</li>
                    <li>Presentation style</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Create an application diagram</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="overview/pilot-description.md">Describe the pilot</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><strong>Presentation</strong></p>
                <p>Choose the user journey for presenting the pilot in Taster</p>
            </td>
            <td>
                <ul>
                </ul>
            </td>
            <td>
                Standalone pilots only:
                <ul>
                    <li>Complete integration steps</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="overview/presentation.md">Pilot presentation overview</a></li>
                    <li><a href="technical/standalone-pilot-integration-steps.md">Standalone Pilot integration steps</a></li>
                    <li><a href="docs/integration/iframe.md">Integrated pilot test harness</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><strong>Hosting</strong></p>
                <p>Understand and choose how your pilot application is hosted</p>
            </td>
            <td>
                Taster hosted:
                <ul>
                    <li>Create a hosting diagram</li>
                </ul>
            </td>
            <td>
                Third party hosted:
                <ul>
                    <li>Create a hosting diagram</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="overview/hosting.md">Hosting your pilot</a></li>
                    <li><a href="technical/AWS-info.md">Taster hosting (AWS) advice</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><strong>Analytics</strong></p>
                <p>Measure and interpret how the audience uses your application</p>
            </td>
            <td>
                <ul>
                    <li>Advise on what to measure</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Implement desired custom analytics</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="docs/Taster Analytics documentation.md">Analytics overview</a></li>
                    <li>Echo analytics library</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><strong>Device/Browser Requirements</strong></p>
                <p>Who can use your pilot, and what browsers/devices are supported</p>
            </td>
            <td>
                <ul>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Provide list of required browser capabilities</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="/docs/supported-devices.md">Supported devices</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><strong>Security</strong></p>
                <p>Ensure your audience is safe when using the pilot</p>
            </td>
            <td>
                <ul>
                    <li>Advise on application design to address security concerns</li>
                    <li>Explain InfoSec process</li>
                    <li>Provide relevant examples of InfoSec forms</li>
                </ul>
            </td>
            <td>
                Complete (if applicable)
                <ul>
                    <li>Compliance Summary form</li>
                    <li>Software Weakness Review form</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="overview/information-security.md">InfoSec overview</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><strong>Deployment and testing</strong></p>
                <p>Transfer your pilot into its (live) hosting environment and make sure it works</p>
            </td>
            <td>
                Taster hosted:
                <ul>
                    <li>Deploy application</li>
                    <li>Smoke check application availability</li>
                </ul>
            </td>
            <td>
                Taster hosted:
                <ul>
                    <li>Arrange deployment plan with Taster team</li>
                    <li>Create step-by-step deployment instructions/scripts</li>
                    <li>Test application functionality</li>
                </ul>
                Third Party hosted:
                <ul>
                    <li>Deploy application</li>
                    <li>Test application functionality</li>
                    <li>Confirm application availability</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="overview/deployment.md">Deployment for Taster hosted pilots</a></li>
                    <li><a href="docs/integration/iframe.md">Integrated pilot test harness</a></li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><strong>Sign-off and publishing</strong></p>
                <p>Launch the pilot in Taster and let the public use it!</p>
            </td>
            <td>
                <ul>
                    <li>Pilot details added to Taster CMS</li>
                    <li>Pilot enabled in Taster CMS</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Launch date proposed</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="overview/publishing.md">Publishing your pilot</a></li>
                    <li>Quick-rate badge behaviour</li>
                    <li>Previewing a pilot</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
