<table><tr><th>Stage</th><th>Notes</th><th>Taster team do</th><th>Pilot teams do</th></tr><tr><th><p><strong>Technology/ <br>Pre-development <br><strong></strong></strong></p></th><td><p>To understand if there are any specific technology requirements for the pilot, it's always best to start a conversation with the Taster team early on in the project.</p><p><strong>For pilots using bespoke technologies</strong>, the pilot team should organise a tech kick-off meeting with the Taster team.<strong> </strong></p><p><strong>For pilots using existing technologies </strong>(Touchcast, Interlude, YouTube, etc), the pilot team should get in touch with the Taster team to understand if a tech kick-off meeting in needed, as the process is generally much more simple.</p></td><td><ul><li>Review & help you understand the implications of the technology options.</li></ul></td><td><ul>
<li>Contacted Taster team: <a href="mailto:taster@bbc.co.uk" rel="nofollow">taster@bbc.co.uk</a></li>
<li>Arranged meeting (if needed)</li>
</ul>
</td></tr><tr><th><strong>Embedding options</strong></th><td>Pilot can use one of two methods to appear on Taster: As an<strong> embedded</strong> in the Taster site (<a href="http://www.bbc.co.uk/taster/projects/news-rush" rel="nofollow">example</a>), or as a <strong>standalone</strong> pilot with the Taster's easy to implement badge rating functionality embedded in it (<a href="http://www.bbc.co.uk/taster/projects/i-am-smarter-than" rel="nofollow">example</a>).</td><td><ul><li><p><strong>Embedded pilots</strong> - request confirmation that the pilot has worked in the Taster, including Facebook/Twitter login if used in the pilot.</p></li><li><p><strong>Standalone</strong> - check that the badge, legal links and cookie warning have been included and provide implementation advice if needed.</p></li></ul></td><td><ul>
<li>Decide whether embedded in Taster iframe or using badge</li>
</ul>
<p><strong>Iframe embedded</strong></p><ul>
<li>Test in <a href="https://github.com/BBCConnectedStudio/taster-harness/releases" rel="nofollow">Taster harness environment</a></li>
</ul>
<p><strong>Standalone</strong></p><ul>
<li>Add <a href="https://github.com/BBCConnectedStudio/documentation/blob/master/docs/integration/new-window.md" rel="nofollow">Taster badge</a> to pilot</li>
<li>Add <a href="https://github.com/BBCConnectedStudio/documentation/blob/master/docs/pilot-technical-pack.md" rel="nofollow">BBC legal and cookie warning</a></li>
</ul>
</td></tr><tr><th><strong>Hosting</strong></th><td>Pilots can be <strong>hosted externally</strong>, or on <strong>BBC infrastructure</strong> (which is generally the quickest solution).</td><td><ul><li>We double check Info Sec have approved the H&H form and will let the pilot team aware there are additional questions and when this has been signed off</li><li>If pilot is hosted within BBC infrastructure, we can help with setting up account; creating the AMI only if pilot team can't do it. We will also:<ul><li>Upload files</li><li>Configure permissions</li></ul></li></ul></td><td><p><strong>Hosted externally</strong></p><ul>
<li>H&H form completed and signed off by BBC InfoSec. Pilots cannot go live without this.</li>
</ul>
<p><strong>Hosted on BBC<br></strong></p><ul>
<li>Choose one of:</li>
</ul>
<p><strong>Cosmos deployment for AWS</strong></p><ul>
<li><ul>
<li><ul>
<li>Provide Taster with the AMI</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><strong>Hosting directly on Taster AWS </strong></p><ul>
<li><ul>
<li><ul>
<li>Inform Taster team as early as possible</li>
<li>Provide taster team with necessary files</li>
</ul>
</li>
</ul>
</li>
</ul>
</td></tr><tr><th><strong>Security <strong><br></strong></strong></th><td><p>We take our audience's data very seriously, so it's important that we have the right security arrangements in place.</p><p>The pilot team are responsible for checking whether <strong>InfoSec</strong> approval is needed. There are several scenarios which would require Info Sec signoff, including:</p><ul><li>Storing any type of personal data:</li><li>Moderation</li><li>Using Facebook or Twitter</li><li>Modifying the back-end of an exiting technology (i.e. Interlude, Touchcast)</li><li>Use of server-side code</li></ul><p>The pilot team are also responsible for completing a <strong>compliance form</strong>.</p></td><td><ul><li>Advise if info sec is needed or not</li><li>Create the CIS ticket for info sec. The ticket has to be completed by the pilot team</li><li>Request confirmation that the legal team has approved the pilot and that any suggestions raised by the security team has been addressed accordingly</li><li>Check that the compliance form has been completed and offer advice if there are any issues with it.</li></ul></td><td><ul>
<li>Checked with legal team</li>
<li>Investigate if InfoSec signoff needed<ul>
<li>Complete InfoSec signoff (if needed)</li>
</ul>
</li>
<li>Complete Compliance form</li>
</ul>
</td></tr><tr><th><strong>Required device features</strong></th><td><p>We do client-side feature detection to let our audience know whether a pilot will work on their device or not, and require a list of the required features for the pilot, eg:</p><p>CSS Animations, CSS 2D Transforms, CSS 3D Transforms, CSS Transitions, Session Storage, Touch Events</p></td><td><ul><li><p>Configure the Taster CMS with device capabilities.</p></li></ul></td><td><ul>
<li>Provide list of <a href="http://modernizr.com/" rel="nofollow">Modernizr</a> required features</li>
</ul>
</td></tr><tr><th><strong>Analytics</strong></th><td><p>Taster provides some basic analytics for free, such as visitor numbers, referrers and devices, which is displayed in a custom dashboard along with your survey responses.</p><p>For custom DAX reporting, we can provide you with counter names to add into your pilot.</p><p>It's important to note that you <strong>cannot use Google Analytics</strong> in your pilot as it's against BBC infosec policies.</p></td><td><ul><li>Advise and provide you with custom counter names, based on interactions you wish to measure within the pilot</li><li>Provide you with a dashboard login.</li></ul></td><td><ul>
<li>Discuss custom Analytics requirements with Taster team</li>
<li>Request dashboard login from Taster team</li>
</ul>
</td></tr><tr><th><strong>Testing, compatibility, </strong><strong>accessibility</strong></th><td><p>It's important that your pilot works across as many devices as the technology allows, and adheres to <a href="http://www.bbc.co.uk/guidelines/futuremedia/accessibility/" rel="nofollow">BBC accessibility standards</a> where possible.</p><p>It's also your responsibility to make sure that there are no snags in the user journey that may hard the user experience.</p></td><td><ul><li>As we have a very small technical team, we're unable to carry out testing. We can, however, advise teams in how they might go about it.</li></ul></td><td><ul>
<li>Checked accessibility against BBC standards</li>
<li>Ensure pilot works across majority of devices</li>
<li>Tested user journey<br><br></li>
</ul>
</td></tr><tr><th><p><strong>Final sign-off and deployment</strong></p><p><strong><strong></strong></strong></p></th><td><p>Your Taster ID/URL needs to be set up at least 2 days before going live in order to set up DAX counter names, etc.</p><p>Please allow <strong>2-3 working days</strong> before going live for final sign off by the Taster team.</p></td><td><ul><li>Sign-off pilot</li><li>Provide Taster ID/URL</li><li>Help with any deployment issues</li><li>Update Taster CMS with pilot details</li><li>Publish pilot live on Taster</li></ul></td><td><ul>
<li>Relevant points above checked-off</li>
<li>Taster ID/URL requested</li>
<li>Final files handed over</li>
</ul>
</td></tr></table>
