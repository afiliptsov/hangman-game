import React, { Component } from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";
import medal from "../../assets/other/medal.svg";
import { Link } from "react-router-dom";
import restart from "../../assets/other/restart.svg";
import leaderboard from "../../assets/other/leaderboard.svg";

class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {
      allScore: []
    };
  }

  componentDidMount() {
    this.getAllUserData();
  }

  getAllUserData = () => {
    axios.get(`/api/getAllScore`).then((req, res) => {
      console.log(req.data);
      this.setState({
        allScore: req.data
      });
    });
  };

  logScore = () => {
    console.log(this.state);
  };

  render() {
    const data = [
      {
        name: "Tanner Linsley",
        age: 26,
        friend: {
          name: "Jason Maurer",
          age: 23
        }
      },
      {
        name: "Tanner Linsley",
        age: 29,
        friend: {
          name: "Jason Maurer",
          age: 23
        }
      },
      {
        name: "Tanner Linsley",
        age: 26,
        friend: {
          name: "Jason Maurer",
          age: 23
        }
      }
    ];

    const columns = [
      {
        Header: "User Name",
        accessor: "user_name",
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Game Difficulty",
        accessor: "game_difficulty",
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Time",
        accessor: "game_time",
        style: {
          textAlign: "center"
        },
        filterable: false
      }
    ];
    return (
      <div className="main-screen-bg">
        <div className="leaderboardWrapper">
          {console.log(this.state.allScore)}
          <h2 className="leaderboardTitle">
            Leaderboard
            <img src={medal} alt="medal image" />
          </h2>
          <ReactTable
            data={this.state.allScore}
            columns={columns}
            filterable
            defaultPageSize={10}
            noDataTex={"Please refresh the page"}
          />
        </div>
        <div className="tryAgain-LeaderboardWrapper">
          <div>
            <Link to="/">
              <h2>New Game?</h2>
              <img src={restart} alt="restart" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Leaderboard);
