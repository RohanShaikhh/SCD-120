/* eslint-disable prettier/prettier */
import { Card } from "antd";

const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "600",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    boxWidth : "30px",
    borderRadius: "1rem",
    width: "450px",
    fontSize: "16px",
    fontWeight: "500",
  },
};

function LiquidityPool() {
  return (
    <Card
      style={styles.card}
      
    >
  <div className="wrapper"  style={{ position:"relative",zIndex: "1", display: "inline-block"}}>
  <div classNamee="hidelogo" style={{position: "absolute",
    width: "100px",
    height: "50px",
    background: "white",
    right: "290px",
    bottom: "560px",
    zIndex:"999",
    display: "block",
    color: "black",
  borderRadius : "0px 10px 0px 10px ",
  fontSize : "15px",
  textAlign : "center"
  }}><p style={{marginTop : "12px", fontWeight : "bold"}}>LiquidityPool</p></div>
    <iframe src="https://exchange.pancakeswap.finance/#/swap" frameBorder={0} width={400} height={600} />
    </div>
    </Card>
  );
}

export default LiquidityPool;
