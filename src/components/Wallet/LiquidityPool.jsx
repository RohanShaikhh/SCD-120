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
    border: "1px solid #e7eaf3",
    borderRadius: "1rem",
    width: "450px",
    fontSize: "16px",
    fontWeight: "500",
    background : "black"
  },
};

function LiquidityPool() {
  return (
    <Card
      style={styles.card}
      
    >
  
    <iframe src="https://app.uniswap.org/#/swap?theme=dark" id="iframeid" height="660px" width="100%" style={{background:'black',border: 0, margin: '0 auto', marginBottom: '.5rem', display: 'block', borderRadius: '10px', maxWidth: '960px', minWidth: '300px'}}>
    
    </iframe>
    
    </Card>
  );
}

export default LiquidityPool;
