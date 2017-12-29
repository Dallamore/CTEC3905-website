# CV / Portfolio Website

## Original Designs

![NASA approved designs yo](/mdimages/designs.png "NASA approved designs yo")

The top half shows the wire frame of the full desktop site on the left and the mobile site on the right and bottom half shows the same designs but much more fleshed out.

The concept behind the site is a personal portfolio, or CV style. The shows a picture accompanied by a title and description. All three of these elements are in a slideshow allowing a single page site, with no scrolling but still full of content.

Originally only the desktop version was to include the spaceship animated to fly the height of the page, but during development it become apparent that it could be a feature of the mobile site as well.
***
## The Best Bits
### The Spaceship

A spaceship picture draw in Photoshop, exported to Illustrator and again exported in an SVG format. The fill colour for each part of the ship, and the animation to make it fly up the page, are all defined in CSS.

### Stars.js

The background of the site is a large SVG "canvas" which is populated with 8000 SVG stars on load. This is achieved with JavaScript which also made it possible to randomize the X and Y coordinates of the stars within bounds every time the page loads.

### infoReader.js and data.js

data.js is a small file containing the basics of all content on the website: title, image, and text. Each of these three elements are defined for each slide in the slideshow and added to index. During their creation, they are given the appropriate class names to correctly interact with slideshow.js. This system allows me to very easily add more entries to this JSON structure, and they will be automatically added to the slideshow.

### slideshow.js

A fully scalable piece of JavaScript which takes all the elements with class "slides" and switches between them in order. This is combined with a CSS animation which happens at the same time to literally *slide* each slide off the screen.  
***
## More Features
### Validated
Fully [HTML](https://validator.w3.org/) and [CSS](https://jigsaw.w3.org/css-validator/) validated.

### Accessibility
Designed with accessibility in mind and validated using [AChecker](https://achecker.ca/checker/index.php).

### Testing

I asked two people to test the site who would provide constructive criticism and helpful feedback, my mum and brother. They were asked the following questions:

1. Easy to navigate?
2. How does it look?
3. Any more thoughts?

Mum's answers:
1. It is very easy; the forward and backward buttons work very well.
2. It looks very nice, I like the little spaceship a lot.
3. When it actually contains information about you, it will be a very good CV Sitemap

Brother's answers:
1. There isn't really anything to navigate, only a slideshow. so very easy I guess.
2. It looks good. Nice, simple, and clean design.
3. I like the space theme, the website looks functional, but maybe too simple.

Mum's answers supported the original idea of the site, that it is entirely focused on the image and text content. The user's focus primarily falls to it making it the perfect place to display my achievements.

My brother's answers revealed that the site may appear to be too simple, whilst the systems under the surface are much more complex than one would think at first.

However, a nice clean design and simple theme were appreciated by both.


### Sitemap Included

A Sitemap has been generated and included primarily for the potential advantage of site crawlers. This being a one page site there isn't much more additional use.

### Breakpoints

All breakpoints were initially completed using the pre-set options in Chrome's inspector which include: Galaxy S5, Nexus 5X, Nexus 6P, iPhone 7, iPhone 7 Plus, iPhone 8, iPhone 8 Plus, iPhone X, iPad, and iPad Pro.

It then came to my attention that these breakpoints do not cater for small laptop/tablet screen sizes. This lead to the creation of the following pie chart show showing the most common screen resolutions. It seemed reasonable to ensure my website catered for these sizes at the very least.

![Most common resolutions pie chart](/mdimages/resolutions.PNG "Most common resolutions pie chart")

Almost all the tuning of the breakpoint was to be certain that these resolutions would all display correctly. A lot of time was spent on fine tuning these breakpoints to allow a good viewing experience on all the most common sizes.

***

## Problems
### Multiple Animations

During development code was written and can still be found in the CSS to make the spaceship's fire flicker whilst flying. However, it is very problematic to introduce a second animation and very incompatible. At one point it worked in Chrome, but functioned extremely poorly in Safari.

***
## Acknowledgments

I used a jpg as a template in Photoshop to create my own path, and used Illustrator to export the file as an SVG.

The design for the spaceship was inspired by a design from [IconFinder](https://www.iconfinder.com/icons/416398/aliens_exploration_fuel_nasa_rocket_space_spaceship_icon). When finding a design, I did not realize it was an SVG, so took their image as a jpg and used it to draw my own SVG path.

The information for the most common resolutions used to create a pie chart came from  [W3Schools](https://www.w3schools.com/browsers/browsers_display.asp).
