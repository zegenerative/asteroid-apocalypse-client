import React from "react";
import { connect } from "react-redux";

class ScoreBoard extends React.Component {
  render() {
    return (
      <p>
        Score: 
        <br></br>
        Winner:
        <br></br>
      </p>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameStats: state.game
  };
};

export default connect(mapStateToProps)(ScoreBoard);
