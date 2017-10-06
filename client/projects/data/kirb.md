---
id: kirb
title: Kirb
priority: 83
date_start: 2015-07-01
date_end: 2015-08-01
domain: kirb.com
tags:
  - Website
  - Animation
  - Twilio
  - Social media
cover: kirb.png
lead: Effects-heavy parking startup promo site
---

Kirb wants to revolutionize parking by making the process of finding a space as easy as calling an Uber. Through the app, owners can rent out their parking spaces, while drivers can effortlessly snatch up those spaces on-demand.

The app was designed & developed for Kirb Inc. by Dogtown Media (I've worked with Dogtown on various projects, including <a title="Dogtown Media Website Rebuild" href="/portfolio/#dogtown-media">their own website</a>). The [Kirb website](http://{{domain}}) was developed simultaneously by yours truly, based on designs by creative agency [TRÜF](http://trufcreative.com/).

I was approached early on in the process about the possibility of building an animation-heavy promotional website. It would act as the online conduit for the app and attract interest. Both the scale and complexity of the website made it one of the most challenging, frustrating and rewarding projects to which I've contributed.

## Landing Page

The first and by far the greatest challenge was the landing page, alone sporting nine-hundred lines of SASS — the majority effects-related — by its completion.

The page consisted of several vertical slides highlighting various features of the app. Preceding these was an introductory slide with a reveal effect that would turn out to be an intriguing assignment.

![First slide of the landing page]({{assets}}/kirb-landing.png)

The effect was communicated to me along the following lines:

- A pattern that grows outward, filling in "spaces"
- Once full, spaces disappear and reappear, with a few teal and black brand-colored spaces also appearing
- All of this should be randomized

My first task was to create the pattern. Since the sequences in the pattern never repeated and each piece would need to be manipulated individually, I saw only a couple options: convert the pattern from the comp to a massive SVG and animate the individual paths, or generate the pattern using transformed HTML elements and some JavaScript. I chose the latter, primarily because the pattern would need to extend to fill ever-larger screen sizes. This method would be more adaptable.

After creating a piece of the pattern with some CSS, I wrote a script that would procedurally generate a grid of these pieces, with color distribution matching the comp as closely as possible. I will smooth over the several iterations and late, coffee-fueled, head-on-desk nights that this script and the ensuing animation work facilitated and simply say that it was a _learning experience_.

![The pattern in the comp and the live version]({{assets}}/kirb-grid-comparison.png)

I then created the grow effect by applying increasingly greater animation delays to the pieces, starting from the center. The fade-out-fade-in effect was another animation, specified in the CSS, with a script managing the cycling and picking random pieces. The combined effects could be triggered by toggling one class on the container element.

The only third-party library used for this page was a lightweight slider plugin.

There were several other challenges involved in creating the landing page. Out of concern for the reader's stamina, I won't go into extreme detail. Instead, here is a brief list:

- A separate animated loading overlay.
- A simulated phone screen that changed with each slide.
- An extra "footer slide" added late in the process that mirrored the footer in the rest of the site but behaved like the last slide.
- An unusual amount of work to make the content responsive, rooted in the fact that the comps were sized for extra-large screens. Everything needed to scale to fit on smaller desktop-size screens as a result. Additionally, the mobile version of the page required significant restructuring for usability & performance reasons.
- Specs required that content and order of each slide could be configured through the WordPress dashboard. I created custom UI for this purpose.

<!--![Slider configuration UI]({{assets}}/.png)-->

## Integrations

The Kirb website included a number of integrations with third-party services. The [social feed](http://{{domain}}/news/) called for a masonry-style grid of posts pulled from the company's Instagram and Twitter feeds. As additional hurdles, the feed would require custom styling and would load more posts as the user scrolled to the bottom. Official social media embeds were out.

I turned to a JavaScript plugin recommended by the designer: [Instafeed](http://instafeedjs.com/) allowed me to fetch Instagram posts on-demand — that problem was solved.

Fetching Twitter posts turned out to be a bit more work. Twitter's API had recently become more restrictive, rendering AJAX queries inoperable. Eventually, I stumbled across a workable PHP library that circumvented this issue. I integrated the library with the WordPress backend and was able to inject the posts in server-side.

The final step was to mix the two sets of posts, drop them in a masonry grid, and style them to adhere to the comps and the social networks' content guidelines (Something I encountered for the first time during this project; Twitter's are _very_ [specific](https://developer.twitter.com/en/developer-terms/display-requirements)).

<!--[image of final feed]-->

After the app launched, I integrated the call-to-action forms with communications platform [Twilio](https://www.twilio.com/). Users could then input their phone number, where they would receive a link via SMS directing them to the app store.

![Call-to-action form linking to Twilio]({{assets}}/kirb-cta-form.png)
