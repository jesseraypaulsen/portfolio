import "./frame.css";

export function Frame(props) {
  /* the mdc- class stops topbar from overlapping this element */

  return (
    <main className="mdc-top-app-bar--fixed-adjust">
      <div className="frame">{props.children}</div>
    </main>
  );
}
