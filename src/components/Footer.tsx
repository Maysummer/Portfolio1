import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {IconLink, PageFooter, StyledFontAwesomeIcon} from './FooterStyles'

export default function Footer() {
  return (
    <PageFooter>
        <IconLink
          href="https://github.com/maysummer"
          target="_blank"
          id="profile-link"
          className="contact"
        >
          <StyledFontAwesomeIcon icon={faGithub} />
        </IconLink>
        <IconLink
          href="mailto:udojikenmesoma@gmail.com"
          target="_blank"
          className="contact"
        >
          <StyledFontAwesomeIcon icon={faEnvelope} />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/udojike-nmesoma/"
          target="_blank"
          className="contact"
        >
          <StyledFontAwesomeIcon icon={faLinkedin} />
        </IconLink>
    </PageFooter>
  );
}
