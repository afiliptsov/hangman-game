import React from "react";
import octocat from "../../assets/other/octocat.svg";

const footer = () => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/afiliptsov/hangman-game"
    >
      <footer className="gitHubFooter">
        <img src={octocat} alt="octocat" />
      </footer>
    </a>
  );
};

export default footer;
