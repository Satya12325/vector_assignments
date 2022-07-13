import "./Faunds.css"
import Protocol from "./Protocol"
import Poolscard from "./Poolscard";
import Typography from '@mui/material/Typography';

export default function Faunds() {



    return (
        <>
            <div className="container">
                <div className="faunds-heading">
                    STAKE FUNDS
                </div>

                <div className="card-container">
                    <div className="cards">
                    <Typography className="subtitle" variant="body1" gutterBottom component="div">
                        YOUR DEPOSITS
                    </Typography>


                        <Typography variant="h3">$0.00<span className="usd"> USD</span></Typography>

                    </div>
                    <div className="cards">
                        <Typography className="subtitle" variant="body1" gutterBottom component="div">YOUR REWARDS</Typography>


                        <Typography className="rewards" variant="h3">$0.00<span className="usd"> USD</span></Typography>

                    </div>
                    <div className="cards" style={{ marginRight: "0px" }}>
                    <Typography className="subtitle" variant="body1" gutterBottom component="div">VECTOR TOTAL TVL</Typography>


                        <Typography variant="h3">$99,600,822<span className="usd"> USD</span></Typography>

                    </div>
                </div>

                <div className="main-card">
                    <div className="card">
                        <Typography sx={{marginBottom:2}}>VECTOR TOTAL SUPPLY</Typography>
                        <Typography variant="h4" sx={{fontSize:13,fontWeight:"bold"}}>25,766,097 VTX</Typography>
                    </div>
                    <div className="card">
                        <Typography sx={{marginBottom:2}}>MARKET CAP</Typography>
                        <Typography variant="h5" sx={{fontSize:13,fontWeight:"bold"}}>$5,849,253 USD</Typography>
                    </div>
                    <div className="card">
                        <Typography sx={{marginBottom:2}}>TOTAL LOCKED</Typography>
                        <Typography variant="h5" sx={{fontSize:13,fontWeight:"bold"}}>17,867,459 VTX</Typography>
                    </div>
                    <div className="card">
                        <Typography sx={{marginBottom:2}}>TOTAL CIRCULATING</Typography>
                        <Typography variant="h5" sx={{fontSize:13,fontWeight:"bold"}}>7,898,638 VTX</Typography>
                    </div>
                    <div className="card" style={{ borderRight: "0" }}>
                        <Typography sx={{marginBottom:2}}>TOTAL REVENUE</Typography>
                        <Typography variant="h5" sx={{fontSize:13,fontWeight:"bold"}}>$1,582,010 USD</Typography>
                    </div>
                </div>

                <div>
                    <Protocol />
                </div>
                <div>
                    <div className="pools-heading">
                        MAIN POOLS
                        <div></div>
                    </div>
                </div>

                <div>
                    <Poolscard/>
                </div>
            </div>
        </>
    )
}