const Box = (props) => {
  const { box, text } = props;
  return <p className={box}>{text}</p>;
};

const element = (
  <div className="background-container">
    <h1>Boxes</h1>
    <div className="boxes">
      <Box box="box1" text="small" />
      <Box box="box2" text="medium" />
      <Box box="box3" text="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
