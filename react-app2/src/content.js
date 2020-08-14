import React, { Component } from "react";
import "./style.css";
import Logo from "./logo.png";

class Content extends Component {
  render() {
    return (
      <div>
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">xxx</h4>
            </div>
          </div>

          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">xxx</h4>
            </div>
          </div>
        </div>
        <br />
        <hr className="style1" />
        {/*Images with their description in button*/}
        <div className="modal-body row">
          <div className="col-md-6">
            <img className="mb-2" src={Logo} alt="" width="300" height="300" />
          </div>
          <div className="col-md-6">
            <p className="text-center">
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              finibus nibh eu luctus dignissim. Ut et dolor felis. Curabitur
              pretium accumsan tortor sed tempus. Integer ultrices hendrerit
              sapien, id faucibus lacus condimentum tincidunt. Integer pretium
              odio non felis sollicitudin, at dapibus lacus maximus.
            </p>
            <button type="button" className="btn btn-primary btn-lg btn-block">
              FIND A BROKER
            </button>
          </div>
          <br />
          <hr className="style1" />
          <div className="col-md-6">
            <p className="text-center">
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              finibus nibh eu luctus dignissim. Ut et dolor felis. Curabitur
              pretium accumsan tortor sed tempus. Integer ultrices hendrerit
              sapien, id faucibus lacus condimentum tincidunt. Integer pretium
              odio non felis sollicitudin, at dapibus lacus maximus.
            </p>
            <button type="button" className="btn btn-primary btn-lg btn-block">
              TRADE STOCKS
            </button>
          </div>

          <div className="col-md-6">
            <center>
              <img
                className="mb-2"
                src={Logo}
                alt=""
                width="300"
                height="300"
              />
            </center>
          </div>

          <div className="col-md-6">
            <img className="mb-2" src={Logo} alt="" width="400" height="300" />
          </div>
          <div className="col-md-6">
            <p className="text-center">
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              finibus nibh eu luctus dignissim. Ut et dolor felis. Curabitur
              pretium accumsan tortor sed tempus. Integer ultrices hendrerit
              sapien, id faucibus lacus condimentum tincidunt. Integer pretium
              odio non felis sollicitudin, at dapibus lacus maximus.
            </p>
            <button type="button" className="btn btn-primary btn-lg btn-block">
              FIND OUT MORE
            </button>
          </div>
        </div>
        <br />
        <hr className="style1" />
        {/* This is the card section of the website*/}
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src={Logo} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">XXX</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus finibus nibh eu luctus dignissim. Ut et dolor felis.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={Logo} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">XXX</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus finibus nibh eu luctus dignissim. Ut et dolor felis.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={Logo} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">XXX</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus finibus nibh eu luctus dignissim. Ut et dolor felis.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
