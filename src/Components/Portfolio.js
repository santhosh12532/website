import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <a
              href={projects.url}
              target={"_blank"}
              style={{ textAlign: "center" }}
              rel="noopener noreferrer"
            >
              <div
                className="overlay"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <a
                  href={projects.github}
                  target={"_blank"}
                  style={{ color: "white" }}
                  rel="noopener noreferrer"
                >
                  GitHub{" "}
                  <i className="fa fa-github" style={{ marginLeft: "3px" }}></i>
                </a>
                <br />
                <a
                  href={projects.url}
                  target={"_blank"}
                  style={{ color: "white" }}
                  rel="noopener noreferrer"
                >
                  {projects.url ? " Live" : ""}
                  {projects.url ? (
                    <i className="fa fa-link" style={{ marginLeft: "3px" }}></i>
                  ) : (
                    ""
                  )}
                </a>
              </div>
              {projects.title}
            </a>
          </div>
        </div>
      );
    });

    return (
      // maintain image size of height : 500px , width : 1000px
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf "
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
