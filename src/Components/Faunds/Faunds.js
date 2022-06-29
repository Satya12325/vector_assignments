import "./Faunds.css"
import Protocol from "./Protocol"
import Poolscard from "./Poolscard"

export default function Faunds() {



    return (
        <>
            <div className="container">
                <div className="faunds-heading">
                    STAKE FUNDS
                </div>

                <div className="card-container">
                    <div className="cards">
                        <p>YOUR DEPOSITS</p>


                        <h3>$0.00<span className="usd"> USD</span></h3>

                    </div>
                    <div className="cards">
                        <p >YOUR REWARDS</p>


                        <h3 className="rewards">$0.00<span className="usd"> USD</span></h3>

                    </div>
                    <div className="cards" style={{ marginRight: "0px" }}>
                        <p>VECTOR TOTAL TVL</p>


                        <h3>$99,600,822<span className="usd"> USD</span></h3>

                    </div>
                </div>

                <div className="main-card">
                    <div className="card">
                        <p>VECTOR TOTAL SUPPLY</p>
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