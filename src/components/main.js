import React from "react";
import Break from "./break";
import Timer from "./timer";
import Session from "./session";


class Main extends React.Component {
  constructor(props) {
    super();

  }




  render() {
    return (
      <div className="main-body row">
        <div className="break-control col-md-3 wingers"><Break /></div>
        <div className="time-control col-md-6 center"><Timer/></div>
        <div className="session-control col-md-3 wingers"><Session/></div>
      </div>
    );
  }
}

export default Main;
