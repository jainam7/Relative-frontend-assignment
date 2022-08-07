import React from "react";

import "../Styles/BTC.css";
import "../Styles/Solana.css";
import "../Styles/Ethereum.css";
import "../Styles/Binance.css";
import "../Styles/Shibu.css";
import "../index.css";

import TrendingAssteslogo from "../Assets/TrendingAsset/TrendingAssteslogo.svg";
import TrendingAssetsVector from "../Assets/TrendingAsset/TrendingAssetsVector.png";


import BitCoin from "../Assets/Bitcoin/Bitcoin.svg";
import BitCoinLogo from "../Assets/Bitcoin/BitcoinLogo.svg";
import BitCoinVectorRound from "../Assets/Bitcoin/BitCoinVectorRound.svg";


import card from "../Assets/TrendingAsset/card.svg";


import Binance from "../Assets/Binance/Binance.svg";
import BinanceVector from "../Assets/Binance/BinanceVector.svg";
import BinanceDiamond from "../Assets/Binance/BinanceDiamond.svg";
import BinanceLogo from "../Assets/Binance/BinanceCoinLogo.svg";

import EthereumVector from "../Assets/Ethereum/EthereumVector.svg";
import EthereumVectorRound from "../Assets/Ethereum/EthereumVectorRound.svg";
import Ethereum from "../Assets/Ethereum/Ethereum.svg";
import EthereumLogo from "../Assets/Ethereum/EthereumLogo.svg";

import ShibaVector from "../Assets/Shiba/ShibaVector.svg";
import ShibaLogo from "../Assets/Shiba/ShibaLogo.svg";
import ShibuVector from "../Assets/Shiba/ShibuVector.svg";

import SolanaRoundVector from "../Assets/Solana/SolanaRoundVector.svg";
import SolanaLogo from "../Assets/Solana/SolanaLogo.svg";
import SolanaVector from "../Assets/Solana/SolanaVector.svg";
import SolanaBG from "../Assets/Solana/SolanaBG.svg";

const TrandingAssets = () => {
  return (
    <>
     
      <div style={{
          display: 'flex',
          justifyContent:'center',
          marginRight:'170px'
      }}>
      <img className="trendingAssetIconVector" src={TrendingAssetsVector} />
      <img className="trendingAssetIcon" src={TrendingAssteslogo} />

      <div className="trendingAsset">Trending Assets</div>

      <div style={{ display: "flex", 
          flexWrap: 'wrap',
          justifyContent: 'center',
          columnGap: '70.26px',
          
         }}>
        <div className="card">
          <img src={card} style={{ width: "290px", height: "430px" }} />
          <div className="coin">
            <img src={BitCoinVectorRound} />
            <img className="bitCoin" src={BitCoin} />
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
              src={EthereumLogo}
            />
            <div>
              <img className="binanceOuter" src={BitCoin} />
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
            <img className="solanaBitCoinLogo" src={BitCoin} />
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
              src={EthereumLogo}
            />
            <div>
              <img className="binanceOuter" src={BitCoin} />
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
              src={EthereumLogo}
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
            <img className="btcPairLogo" src={BitCoin} />
            <img className="btcPairIcon"  src={BitCoinLogo} />
            </div>
            <div>
              <img className="binanceOuter" src={BitCoin} />
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
            <img className="binanceVector" src={BitCoin} />
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
              src={EthereumLogo}
            />
            <div>
              <img className="binanceOuter" src={BitCoin} />
              <img className="diamond" src={BinanceDiamond} />
              <img className="binance" src={Binance} />
            </div>
          </div>
          <div className="popularPairText">Popular Pairs</div>

        </div>

      {/* shibu */}
      <div className="card1" >
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
              src={EthereumLogo}
            />
            <div>
              <img className="binanceOuter" src={BitCoin} />
              <img className="diamond" src={BinanceDiamond} />
              <img className="binance" src={Binance} />
            </div>
          </div>
          <div className="popularPairText">Popular Pairs</div>


        </div>

      </div>
      </div>
    </>
  );
};

export default TrandingAssets;
