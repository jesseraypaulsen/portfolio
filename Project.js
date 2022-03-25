import { useEffect } from "react";

export function Project() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="contentMax">
      <h1 className="mdc-typography--headline4">Flowers in Amsterdam</h1>
      <p className="mdc-typography--overline">Photography</p>
      <p className="mdc-typography--body1">
        Now, take a good look at me! I’m one that has spoken to a King, I am:
        mayhap you’ll never see such another: and to show you I’m not proud, you
        may shake hands with me!’ And he grinned almost from ear to ear, as he
        leant forwards (and as nearly as possible fell off the wall in doing so)
        and offered Alice his hand. She watched him a little anxiously as she
        took it.
      </p>
      <img
        src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers3.jpg?1558559904507"
        alt=""
      />
      <img
        src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers5.jpg?1558558462565"
        alt=""
      />
      <p className="mdc-typography--caption">
        But the beard seemed to melt away as she touched it, and she found
        herself sitting quietly under a tree—while the Gnat (for that was the
        insect she had been talking to) was balancing itself on a twig just over
        her head, and fanning her with its wings.
      </p>
      <img
        src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers8.jpg?1558558471249"
        alt=""
      />
      <p className="mdc-typography--body1">
        However, this was anything but a regular bee: in fact it was an
        elephant—as Alice soon found out, though the idea quite took her breath
        away at first.
      </p>
      <ul className="mdc-image-list mdc-image-list--masonry masonry-image-list imageList">
        <li className="mdc-image-list__item">
          <img
            className="mdc-image-list__image"
            src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers8.jpg?1558558471249"
            alt="Text label"
          />
        </li>
        <li className="mdc-image-list__item">
          <img
            className="mdc-image-list__image"
            src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers2.png?1558558462723"
            alt="Text label"
          />
        </li>
        <li className="mdc-image-list__item">
          <img
            className="mdc-image-list__image"
            src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers1.jpg?1558558462399"
            alt="Text label"
          />
        </li>
        <li className="mdc-image-list__item">
          <img
            className="mdc-image-list__image"
            src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers7.jpg?1558558462200"
            alt="Text label"
          />
        </li>
        <li className="mdc-image-list__item">
          <img
            className="mdc-image-list__image"
            src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers4.jpg?1558558462683"
            alt="Text label"
          />
        </li>
        <li className="mdc-image-list__item">
          <img
            className="mdc-image-list__image"
            src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers6.png?1558558462701"
            alt="Text label"
          />
        </li>
        <li className="mdc-image-list__item">
          <img
            className="mdc-image-list__image"
            src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers9.jpg?1558558480051"
            alt="Text label"
          />
        </li>
        <li className="mdc-image-list__item">
          <img
            className="mdc-image-list__image"
            src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers3.jpg?1558559904507"
            alt="Text label"
          />
        </li>
      </ul>
    </main>
  );
}
