import React from "react";
import facbookLogo from "../images/facebook-icon.png";
import GithubLogo from "../images/github-icon.png";
import InstagramLogo from "../images/instagram-icon.png";
import TwitterLogo from "../images/twitter-icon.png";

export default function Footer() {
  return (
    <footer>
      <img src={facbookLogo} alt="facebook-icon" />
      <img src={GithubLogo} alt="github-icon" />
      <img src={InstagramLogo} alt="instagram-icon" />
      <img src={TwitterLogo} alt="twitter-logo" />
    </footer>
  );
}
