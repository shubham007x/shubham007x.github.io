import React from "react";
import { DiVim } from "react-icons/di";

const Github = () => {
  return (
    <div className="github-info-wrapper">
      <h1>My Stats</h1>
      <div className="stats-block">
        <div className="github-info-card">
          <div className="github-cont-stats">
            <h4 className="github-info-card-title">Github Streak</h4>
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=shubham007x&theme=dark"
              id="github-streak-stats"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="stats-block stats-second">
        <div className="github-info-card">
          <h4>Github Languages</h4>
          <img
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=shubham007x&layout=compact&theme=radical"
            alt="shubham007x"
          />
        </div>
        <div className="github-info-card">
          <div className="github-rating-stats">
            <h4 className="github-infor-card-title">Github Stats</h4>
            <img
              src="https://github-readme-stats.vercel.app/api?username=shubham007x&show_icons=true&theme=radical"
              id="github-stats-card"
              alt="calender"
            />
          </div>
        </div>
      </div>
      <div className="stats-third">
        <div className="github-info-card">
          <h4>Github Calendar</h4>

          <img
            className="react-activity-calendar"
            src="http://ghchart.rshah.org/shubham007x"
            alt="  calender"
          />
        </div>
      </div>
    </div>
  );
};

export default Github;
