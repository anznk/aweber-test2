import React from "react";
// import img
import larry3 from "../../materials/picture/larry3.jpg";
import send from "../../materials/Button/SendButton.svg";
import fbIcon from "../../materials/SNS_icon/Facebook_Logo_CircleWhite.svg";
import twitterIcon from "../../materials/SNS_icon/Twitter_Logo_CircleWhite.svg";
// constants
const fbUrl = "https://www.facebook.com/lintonwellness/";
const twtterUrl = "https://twitter.com/lintonto";
const textP = "Want to hear more from me?";
const email = "larry@LiveWellWithPD.com"
const phoneNum = "(416) 710 6546";


const Footer = () => {
  
  return (
    <div className="footer-pageStyle" id="footer">
      <div className="row">
      <img className="larry-pic" src={larry3} alt="profile pics" />
      <p>{textP}</p>
      <form
        name="subscription"
        // onSubmit={e => handleSubmit(e)}
      >
      <input
        // onChange={e => handleSearchChange(e)}
        className="emailbox"
        type="text"
        id="subscription"
        placeholder="Enter your E-mail"
        name="subscription"
      />
        <input className="send-button" type="image" src={send} alt="send-button" />
        {/* <FooterButton type="submit">
					<img src={sendButton} alt="sendButton" />
				</input> */}
      </form>
      <p className="logo logo-white">Larry Linton</p>
      <div className="info">
      <p>{email}</p>
      <p>{phoneNum}</p>
      </div>
      <a href={fbUrl} target="_blank">
        <img className="fb-icon" src={fbIcon} alt="facebook icon" />
      </a>
      <a href={twtterUrl} target="_blank">
        <img className="twitter-icon" src={twitterIcon} alt="facebook icon" />
      </a>
      </div>
    </div>
  );
};

export default Footer;