---
id: dogtown-media
title: Dogtown Media
priority: 91
date_start: 2015-07-01
date_end: 2015-08-01
domain: dogtownmedia.com
tags:
  - Website
  - JS
  - PHP
  - UX
  - Animation
  - Video
cover: dogtown-media.png
lead: App development company site rebuild
---

I'd worked with Venice Beach-based [Dogtown Media](http://{{domain}}) for the better part of two years when they approached me about a redesign of their website.

I'd been making incremental updates and performing maintenance on the old website for a while, but it was in need of a fresh, modern redesign. As Dogtown's public-facing web presence and a major source of leads, it was necessary that the new website deliver an experience as innovative as the company's apps.

This was no insignificant task. By this point, the burgeoning app development company's website has accumulated more than <span class="num">40</span> unique pages and hundreds of blog posts.

## Process

I worked mainly with Dogtown's designer to bring this project to life. Due to the sheer number of pages, design work ran parallel to development. As comps trickled in, I built each page on a staging server. The layout and design of many minor pages were left to my discretion. I matched the old content with the new style as best as possible, then cleared these pages with the designer before they were finalized.

## Platform

The old site was built using WordPress. We decided to stick with WordPress because of its editing capabilities (several people would need to make frequent changes) and the relative ease of transferring a large amount of content to a new server through the platform. I started with a WordPress theme called [Pivot](http://www.tommusrhodus.com/portfolio/pivot-wordpress-theme/) — another holdover from the old site — although by the end of the process it was modified heavily enough to be unrecognizable.

## Portfolio

The [Portfolio page](http://{{domain}}/portfolio/) was an interesting challenge. The project showcase consisted of a grid of cover images, provided by the designer, underlying the name of each project. The catch was in the configuration. The images could be one of three sizes. The text could be dark or light and aligned left or right, depending on the color and composition of the image.

![Portfolio page layout]({{assets}}/portfolio-layout.png)

As I was dealing with a limited number of projects, the best solution seemed to be to set each one manually. Hardcoding, however, would not be a good long-term solution. Instead, I decided to build the options into the WordPress interface. The result was a clear set of options that even a less technically-inclined user could configure.

![Project admin UI]({{assets}}/project-admin-ui.png)

## News

Later on in the process, I was tasked with integrating a new section into the [News page](http://{{domain}}/news/). I received comps for a tabbed layout and went to work. I added tabs to the existing page and used some JavaScript to fetch the posts from the new section if the user hovers over the corresponding tab. This solution not only provided a slick user experience but also saved resources by only loading the extra posts if the user requests them.

I designed the menu to be extensible, giving an administrator the ability to add more categories without touching the script. When Dogtown later added a third post category, they only needed to insert the markup for the new menu item.

![News page UI]({{assets}}/dogtown-news-tabs.png)
