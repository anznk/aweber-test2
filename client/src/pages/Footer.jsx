import React from "react";
// import img
// import larry3 from "../materials/picture/larry3.jpg";
import send from "../materials/Button/SendButton.svg";
import fbIcon from "../materials/SNS_icon/Facebook_Logo_CircleWhite.svg";
import twitterIcon from "../materials/SNS_icon/Twitter_Logo_CircleWhite.svg";
// constants
const fbUrl = "https://www.facebook.com/lintonwellness/";
const twtterUrl = "https://twitter.com/lintonto";
const textP = "Want to hear more from me?";
const email = "larry@LiveWellWithPD.com"
const phoneNum = "(416) 710 6546";


const Footer = () => {
  
  return (
    <>
    <form method="post" action="https://www.aweber.com/scripts/addlead.pl">
      <input type="hidden" name="listname" value="awlist5644559" />
      {/* <input type="hidden" name="redirect" value="http://localhost:3000/book" /> */}
      <input type="hidden" name="meta_adtracking" value="custom form" />
      <input type="hidden" name="meta_message" value="1" /> 
      <input type="hidden" name="meta_required" value="email" /> 
      <input type="hidden" name="meta_forward_vars" value="1" /> 
      <input type="text" name="email"  /> Email
      <input type="submit" name="submit" value="Subscribe" /> 
    </form>
    </>

  );
};

export default Footer;