/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers1";
import DEX from "components/DEX";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import "./style.css";
import QuickStart from "components/QuickStart";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import MenuItems from "./components/MenuItems";
import LiquidityPool from "components/Wallet/LiquidityPool";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "5px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#000000",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "0px",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: "500",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();


  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  
  console.log(isServerInfo);

  return (
    <Layout style={{ height: "100vh", overflow: "auto", background: "radial-gradient(circle, #f8a202, #000000, #000000"}}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <MenuItems />
          <div style={styles.headerRight}>
            <Chains />
            g7<TokenPrice
              address="0xE265aec82ae4bf7fDea5a7B8892fdbD8055a84F5"
              chain="bsc"
              image="https://i.ibb.co/b54gmhF/adafb60d-969c-407e-8fc4-a814b405edc6.png"
              size="45px"

            />
            <Account />
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/quickstart">
              <QuickStart isServerInfo={isServerInfo} />
            </Route>
            <Route path="/MetaciansWallet">
              <Wallet />
            </Route>
            <Route path="/liquidity">
              <LiquidityPool></LiquidityPool>
            </Route>
            <Route path="/1inch">
              <Tabs defaultActiveKey="1" style={{ alignItems: "center", color:"white" }}>
                <Tabs.TabPane tab={<span>Ethereum</span>} key="1">
                  <DEX 
                  chain="eth" 
                  customTokens={{
                    "0xdAC17F958D2ee523a2206206994597C13D831ec7": {
                      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
                      decimals: 6,
                      logoURI:
                        "https://etherscan.io/token/images/tether_32.png",
                      name: "Tether USD",
                      symbol: "TUSD",
                    },
                    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
                      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                      decimals: 6,
                      logoURI:
                        "https://etherscan.io/token/images/centre-usdc_28.png",
                      name: "USD Coin",
                      symbol: "USDC",
                    },
                    "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39": {
                      address: "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39",
                      decimals: 8,
                      logoURI: "https://etherscan.io/token/images/hex_32.png",
                      name: "HEX",
                      symbol: "HEX",
                    },
                    "0x4Fabb145d64652a948d72533023f6E7A623C7C53": {
                      address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
                      decimals: 18,
                      logoURI:
                        "https://etherscan.io/token/images/binanceusd_32.png",
                      name: "Binance USD",
                      symbol: "BUSD",
                    },
                    "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE": {
                      address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
                      decimals: 18,
                      logoURI:
                        "https://etherscan.io/token/images/shibatoken_32.png",
                      name: "Shiba Inu",
                      symbol: "SHIB",
                    },
                    "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0": {
                      address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
                      decimals: 18,
                      logoURI:
                        "https://etherscan.io/token/images/matic-polygon_32.png",
                      name: "Wrapped Matic",
                      symbol: "MATIC",
                    },
                    "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b": {
                      address: "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b",
                      decimals: 8,
                      logoURI: "https://etherscan.io/token/images/cro_32.png",
                      name: "Cronos Coin",
                      symbol: "CRONO",
                    },
                    "0x6B175474E89094C44Da98b954EedeAC495271d0F": {
                      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
                      decimals: 8,
                      logoURI:
                        "https://etherscan.io/token/images/MCDDai_32.png",
                      name: "Dai Stablecoin",
                      symbol: "DAI",
                    },
                    "0x514910771AF9Ca656af840dff83E8264EcF986CA": {
                      address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
                      decimals: 18,
                      logoURI:
                        "https://etherscan.io/token/images/chainlinktoken_32.png?v=6",
                      name: "ChainLink Token",
                      symbol: "LINK",
                    },
                    "0xE1Be5D3f34e89dE342Ee97E6e90D405884dA6c67": {
                      address: "0xE1Be5D3f34e89dE342Ee97E6e90D405884dA6c67",
                      decimals: 6,
                      logoURI:
                        "https://etherscan.io/token/images/trontrx_32.png?v=2",
                      name: "Tron Token",
                      symbol: "TRON",
                    },
                    "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984": {
                      address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
                      decimals: 18,
                      logoURI:
                        "https://etherscan.io/token/images/uniswap_32.png",
                      name: "Uniswap",
                      symbol: "UNI",
                    },
                    "0x75231F58b43240C9718Dd58B4967c5114342a86c": {
                      address: "0x75231F58b43240C9718Dd58B4967c5114342a86c",
                      decimals: 18,
                      logoURI:
                        "https://etherscan.io/token/images/okex_28.png",
                      name: "OKB",
                      symbol: "OKB",
                    },
                    "0x3845badAde8e6dFF049820680d1F14bD3903a5d0": {
                      address: "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
                      decimals: 18,
                      logoURI:
                        "https://etherscan.io/token/images/sand_32.png",
                      name: "SAND Token",
                      symbol: "SAND",
                    },
                    "0xc944E90C64B2c07662A292be6244BDf05Cda44a7": {
                      address: "0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
                      decimals: 18,
                      logoURI:
                        "https://etherscan.io/token/images/TheGraph_32.png",
                      name: "Graph Token",
                      symbol: "GRAPH",
                    },
                    "0xf34960d9d60be18cC1D5Afc1A6F012A723a28811": {
                      address: "0xf34960d9d60be18cC1D5Afc1A6F012A723a28811",
                      decimals: 6,
                      logoURI:
                        "https://etherscan.io/token/images/kucointoken_32.png",
                      name: "kuCoin Token",
                      symbol: "KCS",
                    },
                    "0x4a220E6096B25EADb88358cb44068A3248254675": {
                      address: "0x4a220E6096B25EADb88358cb44068A3248254675",
                      decimals: 18,
                      logoURI:
                        "https://etherscan.io/token/images/quantnetwork_28_2.png?v=2",
                      name: "Quant",
                      symbol: "QNT",
                    },
                    "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2": {
                      address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
                      decimals: 18,
                      logoURI:
                        "https://etherscan.io/token/images/mkr-etherscan-35.png",
                      name: "Maker",
                      symbol: "MKR",
                    },
                  }}/>
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Binance Smart Chain</span>} key="2">
                  <DEX 
                    chain="bsc" 
                    customTokens ={{
                      "0xE265aec82ae4bf7fDea5a7B8892fdbD8055a84F5": {
                    address: "0xE265aec82ae4bf7fDea5a7B8892fdbD8055a84F5",
                    decimals: 18,
                    logoURI:
                      "https://i.ibb.co/3Cvc0TM/adafb60d-969c-407e-8fc4-a814b405edc6.png",
                    name: "MetaDataCity",
                    symbol: "MDC",
                },
              }}
                />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Polygon</span>} key="3">
                  <DEX chain="polygon" />
                </Tabs.TabPane>
              </Tabs>
            </Route>
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            <Route path="/onramp">
              <Ramper />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/">
              <Redirect to="/MetaciansWallet" />
            </Route>
            <Route path="/ethereum-boilerplate">
              <Redirect to="/wallet" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Connect" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer style={{ 
        textAlign: "center",
        padding: "40px 40px",
        marginTop: "10px",
        background: "transparent"}}>
        <Text style={{ 
          display: "block",
          color: "#ffffff"
       }}>
          MetaciansEXCHANGE™ by <b><a href="https://www.metacians.com/" target="_blank" rel="noreferrer">Metacians</a></b> © 2022. All rights reserved.{" "}
        </Text>

        <Text style={{ 
          display: "block",
          color: "#ffffff"
       }}>
         This platform is in <b>Beta</b>, and might present bugs and errors. Use it at your own risk.
        </Text>

        <Text style={{ 
          display: "block",
          color: "#ffffff"
       }}>
          📖 Read more about{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.metacians.com/"
          >
            Metacians
          </a>
        </Text>
        
 
      </Footer>
    </Layout>
  );
};

export const Logo = () => (
  <div style={styles.headerRight}>
  <TokenPrice
              address="0xE265aec82ae4bf7fDea5a7B8892fdbD8055a84F5"
              chain="bsc"
              image="https://i.ibb.co/Wnpbfrm/Metacian-logo-final.png" 
              size="65px"

            />

  </div>
  
);


export default App;