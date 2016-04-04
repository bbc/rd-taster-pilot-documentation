# Taster Pilots Documentation

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
                <p>Tell us about your pilot application and how it work and we'll tell you we've understood it</p>
            </td>
            <td>
                <ul>
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
                <ul>
                    <li>Choose a presentation style</li>
                    <li>Perform standalone integration steps (if required)</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="overview/presentation.md">Present the pilot in Taster</a></li>
                    <li>Integration steps for standalone pilots</li>
                    <li>Testing iframe integration for integrated pilots</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><strong>Hosting</strong></p>
                <p>Understand and choose how the pilot application is hosted</p>
            </td>
            <td>
                <ul>
                    <li>Create a hosting diagram (Taster hosted)</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Choose a hosting style (Taster hosted or Third Party hosted)</li>
                    <li>Create a hosting diagram (Third Party hosted)</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="overview/hosting.md">Hosting your pilot</a></li>
                    <li>Our AWS hosting environment and advice for scalability</li>
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
                    <li>Oli's analytics page</li>
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
                    <li>Provide a list of required browser capabilities</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Supported devices page</li>
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
                    <li>Explain InfoSec process</li>
                    <li>Provide relevant examples of InfoSec forms</li>
                    <li>Advise on what InfoSec sign off might be required</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Forms completed for InfoSec review</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="overview/information-security.md">InfoSec overview</a></li>
                    <li>Completion of Compliance Summary and Software Weakness Review forms</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <p><strong>Deployment and testing</strong></p>
                <p>Transfer your pilot into its (live) hosting environment and make sure it works!</p>
            </td>
            <td>
                <ul>
                    <li>Create infrastructure and deploy application (Taster hosted only)</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Deployment plan arranged with Taster team (Taster hosted only)</li>
                    <li>Deploy application (Third Party hosted only)</li>
                    <li>Test application functions as expected</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li><a href="overview/deployment.md">Deployment for Taster hosted pilots</a></li>
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
                    <li>Pilot enabled in Taster CMS</li>
                    <li>Browser requirements added into Taster CMS</li>
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
                    <li>Offsite badge behaviour</li>
                    <li>Previewing pilot</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

