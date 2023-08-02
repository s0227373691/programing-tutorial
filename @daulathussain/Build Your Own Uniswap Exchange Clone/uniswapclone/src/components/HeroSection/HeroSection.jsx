import React, { useState, useContext } from "react";
import Image from "next/image";

// ITERNAL IMPORT
import Style from "./HeroSection.module.css";
import images from "../../assets";
import { Token, SearchToken } from "../index";

const HeroSection = ({ accounts, tokenData }) => {
  // USESTATE
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokensTwo, setOpenTokensTwo] = useState(false);

  // TOKEN 1
  const [tokenOne, setTokenOne] = useState({ name: "", image: "" });

  // TOKEN 2
  const [tokenTwo, setTokenTwo] = useState({ name: "", image: "" });

  // JSX
  return (
    <div className={Style.HeroSection}>
      <div className={Style.HeroSection_box}>
        <div className={Style.HeroSection_box_heading}>
          <p>Swap</p>
          <div className={Style.HeroSection_box_heading_img}>
            <Image
              src={images.cross}
              alt="image"
              width={20}
              height={20}
              onClick={() => setOpenSettingtrue}
            />
          </div>
        </div>

        <div className={Style.HeroSection_box_input}>
          <input type="text" placeholder="0" />
          <button onClick={() => openToken(true)}>
            <Image
              src={images.image || images.ethereum}
              width={20}
              height={20}
              alt="ether"
            />
            {tokenOne.name || "ETH"}
            <small>9474</small>
          </button>
        </div>

        <div className={Style.HeroSection_box_input}>
          <input type="text" placeholder="0" />
          <button onClick={() => openToken(true)}>
            <Image
              src={tokenTwo.image || images.ethereum}
              width={20}
              height={20}
              alt="ether"
            />
            {tokenTwo.name || "ETH"}
            <small>9474</small>
          </button>
        </div>

        {accounts ? (
          <button className={Style.HeroSection_box_btn}>Connect Wallet</button>
        ) : (
          <button className={Style.HeroSection_box_btn} onClick={() => {}}>
            Swap
          </button>
        )}
      </div>

      {openSetting && <Token openSetting={openSetting} />}
      {openToken && (
        <SearchToken
          openToken={openToken}
          tokens={setTokenOne}
          tokenData={tokenData}
        />
      )}
      {openToken && (
        <SearchToken
          openToken={setOpenTokensTwo}
          tokens={setTokenTwo}
          tokenData={tokenData}
        />
      )}
    </div>
  );
};

export default HeroSection;
