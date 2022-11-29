import './social.css'
import { InstaIcon } from './icons/insta';
import { LinkedInIcon } from './icons/linkedin';
import { GithubIcon } from './icons/github';

function Social() {
    return (
<div class="soc">
  <div class="icon-13 github">
<a  href="https://github.com/hbasso" title="GitHub" target="_blank" rel="noreferrer">
      <GithubIcon />
      
  <p class="social-text">hbasso</p>
  </a>
  </div>

  <div class="icon-15 instagram">
<a  href="https://www.instagram.com/whatsthesoupdujour/?next=%2Fexplore%2Ftags%2Fphils550%2F" title="Instagram" target="_blank" rel="noreferrer">
    <InstaIcon />

<p class="social-text">whatsthesoupdujour</p>
</a>
</div>

  <div class="icon-17 linkedin">
<a  href="https://www.linkedin.com/in/hudson-basso/" title="LinkedIn" target="_blank" rel="noreferrer">
    <LinkedInIcon />

<p class="social-text">hudson-basso</p>
</a>
</div>

</ div>
    );
  }

  export default Social;
  