# Hunting for jobs is a pain, and I'm kinda lazy.
So, I made a Google chrome extension to help me keep track of contacts I gather from different recruiters and agencies, as well as which companies I apply to each day.

It's very simple right now, and doesn't even have testing or any sort of sign-in, sync or storage beyond the Google Storage Sessions API <a href="https://developers.google.com/assistant/conversational/storage-session">link</a>

Eventually, I think it would be rad to integrate some sort of SSO and potentially a full web application that can give more control to users, but it serves it's purpose for now.

To run the app and try it out, just download or clone the repo and run ```yarn``` to install the packages and ```yarn build``` to compile the application. Then, you go into your Chrome extensions ```chrome://extensions/``` from your browswer. Turn on <i>Developer Mode</i> and click <i>Load unpacked</i>. You should see a happy little programming froggy in your extensions and they'll help you on your journey. :)

Please feel free to fork, modify, submit pull requests, or even just give me a star. I appreciate you even taking the time to read this.


### TODOS://
* Add SSO
* Develop database backend to allow sync
* Web app dashboard
* Launch on Google Chrome extension store



## Emojis Sourced from Twemoji
Copyright 2020 Twitter, Inc and other contributors
Code licensed under the MIT License: http://opensource.org/licenses/MIT
Graphics licensed under CC-BY 4.0: https://creativecommons.org/licenses/by/4.0/
