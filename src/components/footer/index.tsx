import React from "react";
import "./styles.css";
import appStoreIcon1 from "../../assets/images/store/app-store.svg";
import appStoreIcon2 from "../../assets/images/store/play-store.svg";
import appStoreIcon3 from "../../assets/images/store/windows-store.svg";
import socialMediaIcon1 from "../../assets/images/social/facebook-white.svg";
import socialMediaIcon2 from "../../assets/images/social/instagram-white.svg";
import socialMediaIcon3 from "../../assets/images/social/twitter-white.svg";

const Footer: React.FC = () => {
  const appStoreIcons = [appStoreIcon1, appStoreIcon2, appStoreIcon3];
  const socialMediaIcons = [socialMediaIcon1, socialMediaIcon2, socialMediaIcon3];

  return (
    <div className="footer">
      <div className="left-icons">
        {socialMediaIcons.map((icon, index) => (
          <img key={index} src={icon} alt={`Social Media Icon ${index + 1}`} />
        ))}
      </div>
      <div className="right-icons">
        {appStoreIcons.map((icon, index) => (
          <img key={index} src={icon} alt={`App Store Icon ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
