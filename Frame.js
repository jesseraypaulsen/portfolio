import "./frame.css";

export function Frame(props) {
  /* the mdc- class stops topbar from overlapping this element.
     does it only increase its padding-height? 
  let classes = "mdc-top-app-bar--fixed-adjust";
  if (props.extraClass) {
    classes += ` ${props.extraClass}`;
  }
  return (
    <main className={classes}>
      <div className="frame">{props.children}</div>
    </main>
  ); */
  return <div className="frame">{props.children}</div>;
}
