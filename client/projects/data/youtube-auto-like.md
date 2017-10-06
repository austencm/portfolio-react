---
id: youtube-auto-like
title: YouTube AutoLike
priority: 85
date_start: 2015-07-01
date_end: 2015-08-01
domain: chrome.google.com/webstore/detail/youtube-auto-like/loodalcnddclgnfekfomcoiipiohcdim
repo: youtube-auto-like
tags:
  - Chrome
  - Extension
  - JS
  - Graphic Design
  - Open source
cover: youtube-auto-like.png
lead: Browser extension tinkering
---

As a frequent (_perhaps too frequent?_) YouTube viewer, I often found myself wanting to show support for my favorite content creators but forgetting to click the like button on videos. It's an easy action to neglect, especially considering the website's constant focus on pushing the user to the next video.

The solution seemed obvious — find a browser extension that would do it automatically. While my search of the Chrome Web Store turned up several candidates, all of them either worked inconsistently or failed to fulfill my one key requirement: only like videos from channels that I was subscribed to.

![Extensions with similar functionality]({{assets}}/yal-sad-search-results.png)

## An Extension is Born

It appeared that if I wanted this done, I would have to do it myself.  A script that clicked one button? _Easy-peasy_. I just had to figure out how to package it in a Chrome extension. This wasn't something I'd done before. However, I often use small projects to learn a new framework or API. Coffee in hand, I proceeded undaunted.

I started with a basic script that determined whether the user was subscribed by checking for a class on the subscribe button. If they were, it triggered a click on the like button.

![The initial code]({{assets}}/yal-initial-code.png)

This worked — sort of — but it quickly became apparent that it wouldn't be as simple as I thought. Several problems needed solving:

- The script ran even if the user had already liked or disliked the video, thus doing unnecessary work or overriding the user's rating.
- There was a race condition: the script failed if it ran before any one of the key elements loaded.
- The script only worked for the first video. Weird.

The first problem I solved by identifying and checking for certain classes on the buttons that indicated their state. However, this approach was useless if the buttons weren't yet loaded.

This brought me to the second problem: how to run the script at the appropriate time — after all necessary elements had loaded. The way YouTube loaded its content rendered placing the script at the end of the body or waiting on `DOMContentLoaded` ineffective.

Through trial and error, I discovered that, for whatever reason, the like/dislike buttons always loaded after the other key elements. This enabled me to check on the like button every second and take action only after it loaded.

In order to solve the final problem, this process would need to be repeated every time the user navigated to a new video (YouTube transitioned between videos without reloading the page). Detecting this transition was another puzzle, one solved by snooping on YouTube's custom DOM events.

![Significantly improved code]({{assets}}/yal-code-v1.png)

After extensive — **\*ahem\*** — _testing_ by watching videos on my own browser, I deemed the extension ready. I created branding and an options menu and proudly published version one to Chrome's Web Store.

![Version one branding and options menu]({{assets}}/yal-branding-options-v1.png)

Adoption was slow at first. After a few months, however, the number of active users began to increase rapidly, the vast majority coming from organic searches. Total users surpassed <span class="num">200</span> around the four-month mark.

## Second Release

Happy with the result, I made only minor updates until early <span class="num">2017</span>, when YouTube started rolling out its material design beta.

![YouTube's new design announcement]({{assets}}/yal-yt-new-design.png)

While I love the new design, it created some inherent problems. Aside from downright breaking the functionality of the extension, YouTube was content to allow users to opt-in to the new version. This meant that the extension would now need to function with both designs.

Not only was the new YouTube visually different, the team had completely changed things under the hood as well. Rather than Frankenstein the existing script with branching logic, I wrote the new version from the ground up, using a similar strategy but with a focus on writing more modular, efficient code.

I started by moving the old code into a better build system (read: a build system) that I had adopted for [a different extension](https://github.com/austencm/case-cat/). The system was a combination of some Chrome-specific Node packages and a Gulp pipeline for production. Babel allowed me to write using ES<span class="num">2017</span>. (At the time of writing, Chrome <span class="num">60+</span> has almost native ES<span class="num">2017</span> support, but for compatibility reasons, I stuck with Babel.)

![Function from the new class]({{assets}}/yal-material-liker.png)

The full code for this class is [available here]({{repo}}/blob/master/app/scripts.babel/modules/liker-material.js).

After packaging each liking script into a separate class, I went to work on the new script. Changes in the new YouTube functionality actually made some tasks, like detecting video navigation, easier. What I didn't expect to be an issue was selecting the like button.

YouTube's material design was built using [Polymer](https://www.polymer-project.org/). As a side-effect, the markup was more obtuse and attributes less explicit on the front-end. Due to a lack of any sort of unique attribute on the like/dislike buttons, I ended up selecting `alt` attributes with specific text on the child icon elements and walking up the tree to the button.

The extension continued to attract users after the update fixed issues with the new design. I felt like it deserved a fresh look and promotional graphics.

![Version two branding]({{assets}}/yal-branding-v2.png)

## Contributions

Soon, however, I was alerted to an issue via the extension's [GitHub repository]({{repo}}). A contributor attempting to port the extension to Firefox pointed out a flaw in my button selection method: it only worked for users browsing in English. As I mentioned previously, the selector looked for text in an icon's `alt` attribute. Specifically, the text `"like this"` — text that would change based on the user's language settings.

The contributor suggested an alternative solution: select the icon using its unique SVG path data. It worked perfectly.

I merged the pull request and published the fix, but I wanted to do more. The incident encouraged me to implement better internationalization in the extension. Fortunately, no other functionality was affected by this oversight, but I wanted to make sure that non-English users could have the best possible experience. This meant that the options menu needed to be translated and support localized text replacement.

Chrome's internationalization API already automatically replaced specially formatted tokens with translated text. It would do this in JavaScript and CSS files, but not HTML. This was likely for performance reasons, but used in moderation I could achieve the same behavior without significant impact.

I wrote a class that searched through the text nodes in a document using the [TreeWalker](https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker) Web API, replacing matching text using Chrome's [i<span class="num">18</span>n](https://developer.chrome.com/apps/i18n) API. I built the class in this way so that I could easily drop it into other extensions with zero modification.

![Internationalization replace function]({{assets}}/yal-i18n.png)

The update coincided with the addition of French and Spanish translations by the same (amazing) contributor.

At the time of writing, YouTube Auto Like has attracted more than one thousand users. It continues to grow by roughly six users a day. Hopefully, there will soon be a Firefox port.

![User growth from Jul - Oct]({{assets}}/yal-recent-user-graph.png)
