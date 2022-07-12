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
                        <p className="">VECTOR TOTAL SUPPLY</p>
                        <h4>25,766,097 VTX</h4>
                    </div>
                    <div className="card">
                        <p>MARKET CAP</p>
                        <h4>$5,849,253 USD</h4>
                    </div>
                    <div className="card">
                        <p>TOTAL LOCKED</p>
                        <h4>17,867,459 VTX</h4>
                    </div>
                    <div className="card">
                        <p>TOTAL CIRCULATING</p>
                        <h4>7,898,638 VTX</h4>
                    </div>
                    <div className="card" style={{ borderRight: "0" }}>
                        <p>TOTAL REVENUE</p>
                        <h4>$1,582,010 USD</h4>
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