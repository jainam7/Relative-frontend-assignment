import BitCoin from "./Assets/Bitcoin/Bitcoin.svg";
import BitCoinLogo from "./Assets/Bitcoin/BitcoinLogo.svg";
import BitCoinVectorRound from "./Assets/Bitcoin/BitCoinVectorRound.svg";

import SolanaBG from "./Assets/Solana/SolanaBG.svg";
import SolanaLogo from "./Assets/Solana/SolanaLogo.svg";
import SolanaRoundVector from "./Assets/Solana/SolanaRoundVector.svg";
import SolanaVector from "./Assets/Solana/SolanaVector.svg";

import Ethereum from "./Assets/Ethereum/Ethereum.svg";
import EthereumLogo from "./Assets/Ethereum/EthereumLogo.svg";
import EthereumVector from "./Assets/Ethereum/EthereumVector.svg";
import EthereumVectorRound from "./Assets/Ethereum/EthereumVectorRound.svg";

import Binance from "./Assets/Binance/Binance.svg";
import BinanceDiamond from "./Assets/Binance/BinanceDiamond.svg";
import BinanceLogo from "./Assets/Binance/BinanceCoinLogo.svg";
import BinanceVector from "./Assets/Binance/BinanceVector.svg";

import ShibaInnerVector from "./Assets/Shiba/ShibaVector.svg";
import ShibaLogo from "./Assets/Shiba/ShibaLogo.svg";
import ShibuOuterVector from "./Assets/Shiba/ShibuVector.svg";

import "./Styles/BTC.css";
import "./Styles/Solana.css";
import "./Styles/Ethereum.css";
import "./Styles/Binance.css";
import "./Styles/Shibu.css";
import "./Styles/index.css";
import "./Styles/TrendingAsset.css";

export const coinData = [
  {
    name: "Bitcoin (BTC)",
    currentPrice: "31812.80",
    actualPrice: "60000",
    percentage: "10",
    dayRange: "positive",
    img1: { src: BitCoinVectorRound },
    img2: { src: BitCoin },
    img3: { src: BitCoinLogo },
    imgClass1: "bitCoin",
    imgClass2: "bitCoinLogo",
    popularPair: [
      {
        className: ["solana", "solanaLogoBTC"],
        img: [SolanaBG, SolanaLogo],
      },
      {
        className: ["ethereum", "ethereumLogo"],
        img: [Ethereum, EthereumLogo],
      },
      {
        className: ["binanceOuter", "diamond", "binance"],
        img: [BitCoin, BinanceDiamond, Binance],
      },
    ],
  },
  {
    name: "Solana (SOL)",
    currentPrice: "32.83",
    actualPrice: "60000",
    percentage: "12.32",
    dayRange: "negative",
    img1: { src: SolanaVector },
    img2: { src: SolanaRoundVector },
    img3: { src: SolanaLogo },
    imgClass1: "solanaVector",
    imgClass2: "solanaLogo",
    popularPair: [
      {
        className: ["solanaBitCoinLogo", "solanaBtcPairIcon"],
        img: [BitCoin, BitCoinLogo],
      },
      {
        className: ["ethereum", "ethereumLogo"],
        img: [Ethereum, EthereumLogo],
      },
      {
        className: ["binanceOuter", "diamond", "binance"],
        img: [BitCoin, BinanceDiamond, Binance],
      },
    ],
  },
  {
    name: "Ethereum (ETH)",
    currentPrice: "1,466.45",
    actualPrice: "60000",
    percentage: "11.93",
    dayRange: "negative",
    img1: { src: EthereumVector },
    img2: { src: EthereumVectorRound },
    img3: { src: EthereumLogo },
    imgClass1: "ethereumVectorRound",
    imgClass2: "ethereumMainLogo",
    popularPair: [
      {
        className: ["solana", "solanaLogoBTC"],
        img: [SolanaBG, SolanaLogo],
      },
      {
        className: ["btcPairLogo", "btcPairIcon"],
        img: [BitCoin, BitCoinLogo],
      },
      {
        className: ["binanceOuter", "diamond", "binance"],
        img: [BitCoin, BinanceDiamond, Binance],
      },
    ],
  },
  {
    name: "Binance USD (BUSD)",
    currentPrice: "1.00",
    actualPrice: "60000",
    percentage: "0.26",
    dayRange: "positive",
    img1: { src: BinanceVector },
    img2: { src: BitCoin },
    img3: { src: BinanceDiamond },
    img4: { src: BinanceLogo },
    imgClass1: "binanceVector",
    imgClass2: "binanceDiamond",
    imgClass3: "binanceLogo",
    popularPair: [
      {
        className: ["solana", "solanaLogoBTC"],
        img: [SolanaBG, SolanaLogo],
      },
      {
        className: ["ethereum", "ethereumLogo"],
        img: [Ethereum, EthereumLogo],
      },
      {
        className: ["binanceOuter", "diamond", "binance"],
        img: [BitCoin, BinanceDiamond, Binance],
      },
    ],
  },
  {
    name: "Shiba Inu (SHIB)",
    currentPrice: "0.00000001948",
    actualPrice: "60000",
    percentage: "8.1",
    dayRange: "negative",
    img1: { src: ShibuOuterVector },
    img2: { src: ShibaInnerVector },
    img3: { src: ShibaLogo },
    imgClass1: "shibVector",
    imgClass2: "shibuLogo",
    popularPair: [
      {
        className: ["solana", "solanaLogoBTC"],
        img: [SolanaBG, SolanaLogo],
      },
      {
        className: ["ethereum", "ethereumLogo"],
        img: [Ethereum, EthereumLogo],
      },
      {
        className: ["binanceOuter", "diamond", "binance"],
        img: [BitCoin, BinanceDiamond, Binance],
      },
    ],
  },
];
