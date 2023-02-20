The project is based on [this Material Design template](https://glitch.com/~material-template-portfolio-css). I adapted it to React, using the Parcel CLI instead of Webpack.

I then decided to change its appearance somewhat to resemble
[this template provided by html5up.net](https://html5up.net/astral)

I learned that React Router does not work smoothly with Github Pages. Github Pages prefers static sites to single page applications. If I were doing this project over again, I would use a static site generator like Gatsby or Jekyll.

---

## Todos

- what about lifting the states from both Nav and Main up into App? maybe a better structure can start from this.

- <span style="color:red">bug: if you refresh the page at any point after having selected a section from the menu, the content corresponding to the selected menu item is still displayed and the arrow points to the Home icon.</span>At the very least the arrow should reflect the selected section. Because the Refresh stays at the same URL, and the URL bar drives the main application logic through the Hash Router. Ie, React renders what the URL bar tells it to render. It renders different sections in Main. But the big arrow always starts at Home when the browser refreshes, indepedent of URL. So we need to set the big arrow's initial state to the state of the URL bar.

- <span style="color:red">redesign the hero section</span>

- <span style="color:red">animation for transitioning size of Main between nav selections</span>

- nav icons: should light up on hover plus tooltip

- make the contact form work

- picture + paragraphs for About section

- <span style="color:red">snapshots, screencasts for Work > OCEAN, nodecards (desktop)</span>

- after deployment, put up links to live demos on the portfolio

---

## DONE

- also in Work > Ocean, nodecards -- put in github repo links so we can see each projects README.md with its respective todos list <span style="color:green">✔</span>

  - the Project component needs to render different things for OCEAN test vs nodecards. currently there's no way to distinguish them. The Work component needs 2 datasets that it can decide on before passing the selected data down to Project. <span style="color:green">✔</span>

- bug: background <span style="color:green">✔</span>
- <s>Main component min-height: 50em; <span style="color:green">✔</span></s>

- <s>jumbotron: push the two rows to the very top and very bottom, letting middle space expand to fill jumbotron's Main container now that its min-height: 50em.</s>
  - UPDATE: tried turning Main into a flexbox with flex-direction:row. This caused jumbotron to expand and fill Main. Then setting justify-content:space-between on Jumbotron, created the desired effect. However, it broke the layouts in the other sections. So how do we create this effect in a different way? Or is this even an important thing to pursue right now? The parent task, "redesign the hero section," is the larger aim. Looking at the original Hero section from the template this portfolio was largely inspired by, the shifting height of Main is not a bad thing, so long as you have a <span style="background-color:yellow;color:black;">transition animation</span>.
