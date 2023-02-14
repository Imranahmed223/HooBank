import React from "react";
import "./Home.scss";
import Hanheader from "../../../assets/Handheader.svg";
import Persentage from '../../../assets/homeAssets/persntage.png';
const Home = () => {
  return (
    <>
      <div className="subheader-container">
        <div className="subheader-container-content">
          <div className="subheader-container-content-left">
            <div className="subheader-container-content-left-discountbox">
                <img src={Persentage} alt="persentage" />
                <p>
                    <span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT
                </p>
            </div>
          </div>
          <div className="subheader-container-content-right">
            <img src={Hanheader} alt="subheader-Img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
