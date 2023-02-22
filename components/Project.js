import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/project.css";

const data = [
  {
    id: "pkm",
    title: "Personal Knowledge Management System",
    repo: "https://github.com/jesseraypaulsen/nodecards",
    demo: "",
    images: [
      "https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers8.jpg",
      "https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers2.png",
      "https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers1.jpg",
      "https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers7.jpg",
      "https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers4.jpg",
      "https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers6.png",
      "https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers9.jpg",
      "https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers3.jpg",
    ],
  },
  {
    id: "ocean",
    title: "Personality Test",
    repo: "https://github.com/jesseraypaulsen/personality-test",
    demo: "",
    images: [],
  },
];

export function Project({ callback }) {
  const { id } = useParams();
  const choice = data.find((item) => item.id === id);
  console.log("Project: ", choice);
  useEffect(() => {
    // 1. set the height of Main based on the height of this div.
    // 2. scroll to the top of Main.
    callback();
  }, []);

  const navigate = useNavigate();
  const redirect = () => {
    setTimeout(() => {
      navigate("/work");
    }, 2000);
  };

  if (choice) {
    return (
      <div className="section-project">
        <h1 className="mdc-typography--headline4">{choice.title}</h1>
        <p className="mdc-typography--overline">Web Development</p>
        <p style={{ marginBottom: "1em" }}>
          <a href={choice.repo} target="_blank" rel="noopener">
            Github repo
          </a>
        </p>
        <p className="mdc-typography--body1">
          Now, take a good look at me! I’m one that has spoken to a King, I am:
          mayhap you’ll never see such another: and to show you I’m not proud,
          you may shake hands with me!’ And he grinned almost from ear to ear,
          as he leant forwards (and as nearly as possible fell off the wall in
          doing so) and offered Alice his hand. She watched him a little
          anxiously as she took it.
        </p>
        <img
          src="https://cdn.glitch.com/31357884-a11a-4a7b-9fe5-0322583e8062%2Fflowers5.jpg?1558558462565"
          alt=""
        />
        <p className="mdc-typography--caption">
          But the beard seemed to melt away as she touched it, and she found
          herself sitting quietly under a tree—while the Gnat (for that was the
          insect she had been talking to) was balancing itself on a twig just
          over her head, and fanning her with its wings.
        </p>
        <p className="mdc-typography--body1">
          However, this was anything but a regular bee: in fact it was an
          elephant—as Alice soon found out, though the idea quite took her
          breath away at first.
        </p>
        <ul className="mdc-image-list mdc-image-list--masonry masonry-image-list imageList">
          {outputListOfImages(choice.images)}
        </ul>
      </div>
    );
  } else {
    redirect();
    return (
      <div>
        <h2>{id} is an invalid project id</h2>
      </div>
    );
  }
}

function outputListOfImages(imgList) {
  return imgList.map((url, i) => (
    <li className="mdc-image-list__item">
      <img className="mdc-image-list__image" src={url} alt="Text label" />
    </li>
  ));
}
