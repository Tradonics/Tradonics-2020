import React, { Component } from "react";
import "./style.css";
import Logo from "./logo.png";

class Footer extends Component {
  render() {
    return (
      <div>
        {/* *****************Bottom portion of the website******************** */}
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
          <div className="row">
            <div className="col-12 col-md">
              <img className="mb-2" src={Logo} alt="" width="50" height="50" />
              <small className="d-block mb-3 text-muted">
                &copy; 2020-Present
              </small>
            </div>
            {/* Grid System in Bootstrap */}
            <div className="col-6 col-md">
              <h5>Company</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#">
                    The Team
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Locations
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Partners
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Impact
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Reports and insights
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Explore</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#">
                    Resources
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Expert Tips
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Other</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
