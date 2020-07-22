import React, { useRef, useEffect, useState } from 'react';
import "../styles/style.scss";

const Footer = () => {
  const el = useRef(null);
  const [thanksMsg, setThanksMsg] = useState("");
   useEffect(() => {
    let urlParamStr = window.location.search
    let params = {}
    if (urlParamStr) {
      urlParamStr = urlParamStr.substring(1)
      urlParamStr.split('&').forEach( param => {
        const temp = param.split('=')
        params = {
          ...params,
          [temp[0]]: temp[1]
        }
      })
    }
    if (params.success==="true"){
      setThanksMsg('Thank you for your subscribe');
      el.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
    
  },[]);


  return (
    <>
    <div className="top">
    asdfadsf
    </div>
    <div className="second">
    adfasdfa
    </div>
    <div ref={el}>
      <form action="https://www.aweber.com/scripts/addlead.pl" method="post"> 
        <input type="hidden" name="listname" value="awlist5671012" />
        <input type="hidden" name="redirect" value="https://upbeat-mclean-135ab6.netlify.app/book?success=true" />
        <input type="hidden" name="meta_adtracking" value="custom form" />
        <input type="hidden" name="meta_message" value="1" /> 
        <input type="hidden" name="meta_required" value="email" /> 
        <input type="hidden" name="meta_forward_vars" value="1" /> 
        <input type="text" name="email"  /> Email
        <input type="submit" name="submit" value="Subscribe" /> 
      </form>
      <p>{thanksMsg}</p>
    </div>
    </>
  );
  
};

export default Footer;