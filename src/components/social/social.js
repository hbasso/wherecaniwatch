import "./social.css";
import { InstaIcon } from "./icons/insta";
import { LinkedInIcon } from "./icons/linkedin";
import { GithubIcon } from "./icons/github";

function Social() {
  return (
    <div className="socialbubble">
    <div className="soc">
      <div className="git-icon github">
        <a
          href="https://github.com/hbasso"
          title="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />

          <p className="social-text">hbasso</p>
        </a>
      </div>

      <div className="insta-icon instagram">
        <a
          href="https://www.instagram.com/whatsthesoupdujour/?next=%2Fexplore%2Ftags%2Fphils550%2F"
          title="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <InstaIcon />

          <p className="social-text">whatsthesoupdujour</p>
        </a>
      </div>

      <div className="linkedin-icon linkedin">
        <a
          href="https://www.linkedin.com/in/hudson-basso/"
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />

          <p className="social-text">hudson-basso</p>
        </a>
      </div>
    </div>
    </div>
  );
}

export default Social;
