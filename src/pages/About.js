import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/Profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Ashley</div>
            <div className="brief_description">
              Hello, my name is Ashley. I am currently a senior Computer Information Systems major
              at Texas A&M Central Texas. I enjoy walks in the park and reading.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
