import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <button onClick={() => window.open(network.url, "_blank", "noopener noreferrer")}>
            <i className={network.className}></i>
          </button>
        </li>
      );
    });
    

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy; Copyright 2021 Manchivaru Santhosh Kumar</li>
                <li>
                  Developed by{" "}
                  <a title="Styleshout" href="https://manchivaru.netlify.app/" rel="noopener noreferrer">
                    Santhosh
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home" rel="noopener noreferrer">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
