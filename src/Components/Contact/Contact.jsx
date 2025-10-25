import React from "react";
import "../Contact/Contact.css";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="title">
        <h3>Contact</h3>
      </div>
      <div className="adress">
        <ul>
          <li onClick={() => window.open("mailto:egemencakir29@gmail.com")}>
            <div className="icon">
              <EmailIcon fontSize="large" />
            </div>
            <div className="text">E-Mail</div>
          </li>

          <li
            onClick={() =>
              window.open("https://github.com/egemencakir39", "_blank")
            }
          >
            <div className="icon">
              <GitHubIcon fontSize="large" />
            </div>
            <div className="text">GitHub</div>
          </li>

          <li
            onClick={() =>
              window.open(
                "https://tr.linkedin.com/in/egemen-çakır-a05986252",
                "_blank"
              )
            }
          >
            <div className="icon">
              <LinkedInIcon fontSize="large" />
            </div>
            <div className="text">LinkedIn</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
