import React from "react";

import "../Styles/BTC.css";
import "../Styles/Solana.css";
import "../Styles/Ethereum.css";
import "../Styles/Binance.css";
import "../Styles/Shibu.css";
import "../Styles/TrendingAsset.css";


import TrendingAssteslogo from "../Assets/TrendingAsset/TrendingAssteslogo.svg";
import TrendingAssetsVector from "../Assets/TrendingAsset/TrendingAssetsVector.png";
import Card from "../Assets/TrendingAsset/card.svg";

import { coinData } from "../coinData";

const TrandingAssets = () => {
  return (
    <>
      <div className="mainDiv">
        <img className="trendingAssetIconVector" src={TrendingAssetsVector} />
        <img className="trendingAssetIcon" src={TrendingAssteslogo} />
        <div className="trendingAsset">Trending Assets</div>
        <div className="cardList">
          {coinData.map((s) => {
            return (
              <div className="card">
                <img src={Card} className="cardSize" />
                <div className="coin">
                  <img src={s?.img1?.src} />
                  <img className={s.imgClass1} src={s.img2?.src} />
                  {s?.img3?.src ? (
                    <img className={s.imgClass2} src={s?.img3?.src} />
                  ) : null}
                  {s?.img4?.src ? (
                    <img className={s?.imgClass3} src={s?.img4?.src} />
                  ) : null}
                </div>

                <div className="coinText">{s.name}</div>
                <div className="priceBox">
                  <div className="price">
                    <span> ${s.currentPrice} </span>
                  </div>
                </div>

                <div
                  className="percentage"
                  style={
                    s.dayRange === "negative"
                      ? { color: "#FF4D4D" }
                      : { color: "#00ffa3" }
                  }
                >
                  &nbsp;&nbsp;
                  {s.dayRange === "negative" ? "-" : "+"}
                  {s.percentage}%
                </div>
                <div className="priceText">Price</div>
                <div className="rectanglePriceBox">
                  <div className="actualPrice">${s.actualPrice}</div>
                </div>

                <div className="tvlText">TVL</div>

                <div className="popularPairs">
                  {s.popularPair.map((p) => {
                    return (
                      <div>
                        {p.img.map((i, index) => {
                          return <img className={p.className[index]} src={i} />;
                        })}
                      </div>
                    );
                  })}
                </div>
                <div className="popularPairText">Popular Pairs</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TrandingAssets;
