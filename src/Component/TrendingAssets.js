import React from "react";

import "../Styles/BTC.css";
import "../Styles/Solana.css"
import "../Styles/Ethereum.css"
import "../Styles/Binance.css"
import "../Styles/Shibu.css"

import logo from "../Vector.svg";
import vectorPng from "../Vector.png";
import bitCoin from "../Bitcoin.svg";
import BitCoinLogo from "../BitcoinLogo.svg";
import Ethereum from "../Ethereum.svg";
import Binance from "../Binance.svg";
import BinanceDiamond from "../BinanceDiamond.svg";
import SolanaBG from "../SolanaBG.svg";
import ethereumLogo from "../ethereumLogo.svg";
import card from "../card.svg";
import VectorRound from "../VectorRound.svg";
import SolanaVector from "../SolanaVector.svg";
import EthereumVector from "../EthereumVector.svg";
import BinanceVector from "../BinanceVector.svg";
import ShibuVector from "../ShibuVector.svg";
import SolanaRoundVector from '../SolanaRoundVector.svg'


import EthereumVectorRound from '../Assets/Ethereum/EthereumVectorRound.svg'
import ShibaVector from '../Assets/Shiba/ShibaVector.svg'
import ShibaLogo from '../Assets/Shiba/ShibaLogo.svg'
import SolanaLogo from "../Assets/Solana/SolanaLogo.svg"
import BinanceLogo from '../Assets/Binance/BinanceCoinLogo.svg'


const TrandingAssets = () => {
  return (
    <>
      <img className="trendingAssetIconVector" src={vectorPng} />
      <img className="trendingAssetIcon" src={logo} />

      <div className="trendingAsset">Trending Assets</div>

      <div style={{ display: "flex", position: "absolute" }}>
        <div className="card">
          <img src={card} style={{ width: "290px", height: "430px" }} />
          <div className="coin">
            <img src={VectorRound} />
            <img className="bitCoin" src={bitCoin} />
            <img className="bitCoinLogo" src={BitCoinLogo} />
          </div>

          <div className="bitCoinText">Bitcoin (BTC) </div>
          <div className="btcPriceBox">
            <div className="btcPrice">
              <span> $31812.80 </span>
            </div>
          </div>

          <div className="btcPercentage">+10%</div>
          <div className="priceText">Price</div>
          <div className="rectanglePriceBox">
            <div className="actualPriceBtc">$60000</div>
          </div>

          <div className="tvlText">TVL</div>

          <div className="popularPairBtc">
            <div>
              <img className="solana" src={SolanaBG} />
              <img className="solanaLogoBTC" src={SolanaLogo} />
            </div>

            <img className="ethereum" src={Ethereum} />
            <img
              style={{
                width: "20px",
                position: "absolute",
                height: "15px",
                top: "12px",
                left: "52px",
              }}
              src={ethereumLogo}
            />
            <div>
              <img className="binanceOuter" src={bitCoin} />
              <img className="diamond" src={BinanceDiamond} />
              <img className="binance" src={Binance} />
            </div>
          </div>
          <div className="popularPairText">Popular Pairs</div>
        </div>


        {/* solana */}
        <div className="card1">
          <img src={card} style={{ width: "290px", height: "430px" }} />
          <div className="coin">
            <img src={SolanaVector} />
            <img className="solanaVector" src={SolanaRoundVector} />
            <img className="solanaLogo" src={SolanaLogo} />
           </div>

           <div className="bitCoinText">Solana (SOL) </div>
          <div className="btcPriceBox">
            <div className="btcPrice">
              <span> $32.83 </span>
            </div>
          </div>

          <div className="btcPercentage" style={{color:'#FF4D4D'}}>-12.32%</div>
          <div className="priceText">Price</div>
          <div className="rectanglePriceBox">
            <div className="actualPriceBtc">$60000</div>
          </div>

          <div className="tvlText">TVL</div>


          <div className="popularPairBtc">
            <div>
            <img className="solanaBitCoinLogo" src={bitCoin} />
            <img className="solanaBtcPairIcon" src={BitCoinLogo} />
            </div>

            <img className="ethereum" src={Ethereum} />
            <img
              style={{
                width: "20px",
                position: "absolute",
                height: "15px",
                top: "12px",
                left: "52px",
              }}
              src={ethereumLogo}
            />
            <div>
              <img className="binanceOuter" src={bitCoin} />
              <img className="diamond" src={BinanceDiamond} />
              <img className="binance" src={Binance} />
            </div>
          </div>
          <div className="popularPairText">Popular Pairs</div>

        </div>



        {/* etherium */}
        <div className="card1">
          <img src={card} style={{ width: "290px", height: "430px" }} />
          <div className="coin">
            <img src={EthereumVector} />
            <img className="ethereumVectorRound" src={EthereumVectorRound}/>
            <img
              style={{
                width: "150px",
                position: "absolute",
                height: "30px",
                top: "33.51%",
                left: "-25%",
              }}
              src={ethereumLogo}
            />
          </div>
          <div className="bitCoinText">Ethereum (ETH) </div>
          <div className="btcPriceBox">
            <div className="btcPrice">
              <span> $1,466.45 </span>
            </div>
          </div>

          <div className="btcPercentage" style={{color:'#FF4D4D'}}>-11.93%</div>
          <div className="priceText">Price</div>
          <div className="rectanglePriceBox">
            <div className="actualPriceBtc">$60000</div>
          </div>

          <div className="tvlText">TVL</div>


          <div className="popularPairBtc">
            <div>
              <img className="solana" src={SolanaBG} />
              <img className="solanaLogoBTC" src={SolanaLogo} />
            </div>

      
             <div>
            <img className="btcPairLogo" src={bitCoin} />
            <img className="btcPairIcon"  src={BitCoinLogo} />
            </div>
            <div>
              <img className="binanceOuter" src={bitCoin} />
              <img className="diamond" src={BinanceDiamond} />
              <img className="binance" src={Binance} />
            </div>
          </div>
          <div className="popularPairText">Popular Pairs</div>



        </div>

        
        {/* binance */}
        <div className="card1">
          <img src={card} style={{ width: "290px", height: "430px" }} />
          <div className="coin">
            <img src={BinanceVector} />
            <img className="binanceVector" src={bitCoin} />
            <img className="binanceDiamond" src={BinanceDiamond} />
            <img className="binanceLogo" src={BinanceLogo} />
          </div>

          <div className="bitCoinText">Binance USD (BUSD) </div>
          <div className="btcPriceBox">
            <div className="btcPrice">
              <span> $1.00 </span>
            </div>
          </div>

          <div className="btcPercentage" style={{color:'#FF4D4D'}}>+0.26%</div>
          <div className="priceText">Price</div>
          <div className="rectanglePriceBox">
            <div className="actualPriceBtc">$60000</div>
          </div>

          <div className="tvlText">TVL</div>

          <div className="popularPairBtc">
            <div>
              <img className="solana" src={SolanaBG} />
              <img className="solanaLogoBTC" src={SolanaLogo} />
            </div>

            <img className="ethereum" src={Ethereum} />
            <img
              style={{
                width: "20px",
                position: "absolute",
                height: "15px",
                top: "12px",
                left: "52px",
              }}
              src={ethereumLogo}
            />
            <div>
              <img className="binanceOuter" src={bitCoin} />
              <img className="diamond" src={BinanceDiamond} />
              <img className="binance" src={Binance} />
            </div>
          </div>
          <div className="popularPairText">Popular Pairs</div>

        </div>



        {/* shibu */}
        <div className="card1" style={{ paddingRight: "70px" }}>
          <img src={card} style={{ width: "290px", height: "430px" }} />
          <div className="coin">
            <img src={ShibuVector} />
            <img className="shibVector" src={ShibaVector} />
            <img className="shibuLogo" src={ShibaLogo}/>
          </div>

          <div className="bitCoinText">Shiba Inu (SHIB) </div>
          <div className="btcPriceBox">
            <div className="btcPrice">
              <span> $0.00000001948 </span>
            </div>
          </div>

          <div className="btcPercentage" style={{color:'#FF4D4D'}}>-8.1%</div>
          <div className="priceText">Price</div>
          <div className="rectanglePriceBox">
            <div className="actualPriceBtc">$60000</div>
          </div>

          <div className="tvlText">TVL</div>

          <div className="popularPairBtc">
            <div>
              <img className="solana" src={SolanaBG} />
              <img className="solanaLogoBTC" src={SolanaLogo} />
            </div>

            <img className="ethereum" src={Ethereum} />
            <img
              style={{
                width: "20px",
                position: "absolute",
                height: "15px",
                top: "12px",
                left: "52px",
              }}
              src={ethereumLogo}
            />
            <div>
              <img className="binanceOuter" src={bitCoin} />
              <img className="diamond" src={BinanceDiamond} />
              <img className="binance" src={Binance} />
            </div>
          </div>
          <div className="popularPairText">Popular Pairs</div>


        </div>


      </div>
    </>
  );
};

export default TrandingAssets;
