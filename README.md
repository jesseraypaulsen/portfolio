The project is based on [this Material Design template](https://glitch.com/~material-template-portfolio-css). I adapted it to React, using the Parcel CLI instead of Webpack.

I then decided to change its appearance somewhat to resemble
[this template provided by html5up.net](https://html5up.net/astral)

I learned that React Router does not work smoothly with Github Pages. Github Pages prefers static sites to single page applications. If I were doing this project over again, I would use a static site generator like Gatsby or Jekyll.

---

## Todos

- bug: background <span style="font-size: 2em; color:green">✔</span>
- <s>Main component min-height: 50em; <span style="font-size: 2em; color:green">✔</span></s>

- bug: if you refresh the page at any point after having selected a section from the menu, the content corresponding to the selected menu item is still displayed and the arrow points to the Home icon. At the very least the arrow should reflect the selected section.

- redesign the hero section

  - <s>jumbotron: push the two rows to the very top and very bottom, letting middle space expand to fill jumbotron's Main container now that its min-height: 50em.</s>
    - UPDATE: tried turning Main into a flexbox with flex-direction:row. This caused jumbotron to expand and fill Main. Then setting justify-content:space-between on Jumbotron, created the desired effect. However, it broke the layouts in the other sections. So how do we create this effect in a different way? Or is this even an important thing to pursue right now? The parent task, "redesign the hero section," is the larger aim. Looking at the original Hero section from the template this portfolio was largely inspired by, the shifting height of Main is not a bad thing, so long as you have a transition animation.
  - nav icons: should light up on hover plus tooltip
  - animation for transitioning size of Main on nav selections

- make the contact form work

- picture + paragraphs for About section

- snapshots, screencasts for Work > OCEAN, nodecards (desktop)

- also in Work > Ocean, nodecards -- put in github repo links so we can see each projects README.md with its respective todos list

  - the Project component needs to render different things for OCEAN test vs nodecards. currently there's no way to distinguish them. The Work component needs 2 datasets that it can decide on before passing the selected data down to Project.

- after deployment, put up links to live demos on the portfolio
