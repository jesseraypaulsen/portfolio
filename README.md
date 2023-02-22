The project is based on [this Material Design template](https://glitch.com/~material-template-portfolio-css). I adapted it to React, using the Parcel CLI instead of Webpack.

I then decided to change its appearance somewhat to resemble
[this template provided by html5up.net](https://html5up.net/astral)

I learned that React Router does not work smoothly with Github Pages. Github Pages prefers static sites to single page applications. If I were doing this project over again, I would use a static site generator like Gatsby or Jekyll.

---

## Todos

- <span style="color:red">redesign the hero section</span>

  - using a temporary background: prevent tiling, set background size to fill most of the Home component div. Main will already adapt to whatever the height of Home is. So focus on setting the size of Home wrt the background image. Set background width/height to the same as Home's width/height.

- <span style="color:red">snapshots, screencasts for Work > OCEAN, nodecards (desktop)</span>

- make the contact form work

- picture + paragraphs for About section

- after deployment, put up links to live demos on the portfolio

<span style="color:green">✔</span><span style="color:green">✔</span><span style="color:green">✔</span><span style="color:green">✔</span><span style="color:green">✔</span><span style="color:green">✔</span><span style="color:green">✔</span><span style="color:green">✔</span><span style="color:green">✔</span><span style="color:green">✔</span>

## Done

- fix: if there's a browser refresh after navigating to any section other than Home, the big arrow should point to the icon based on location bar data. the solution entailed simplifying Nav so that it no longer requires storing an extra string in useState. instead it invokes the useLocation hook.
- feature: height transition effect
