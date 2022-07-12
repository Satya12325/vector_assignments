import "./Navbar.css"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import Typography from '@mui/material/Typography';

export default function Navbar() {



    return (
        <>
            <AppBar component="nav" style={{ background: "#1A1A36" }}>
                <Toolbar
                sx={{display: "flex",justifyContent: "space-between"}}
                >
                    <div
                    style={{display: "flex"}}
                    >

                    <div
                        className="navbar-logo"
                    >
                        <img style={{ width: "40px" }} src="https://vectorfinance.io/static/media/VectorLogo.3842f176.svg" alt="" />
                        <img src="https://vectorfinance.io/static/media/VectorText.def34a6f.svg" alt="" />
                    </div>
                    <div className="btns-container">
                        <div className="btns-active">
                            <div className="btns-line"></div>
                            <Typography style={{ textAlign: 'center' }}>

                                Stake
                            </Typography>

                        </div>
                        <div>
                            Claim
                        </div>
                        <div>
                            Lock
                        </div>
                        <div style={{display:"flex"}}>
                            <div>
                            More
                            </div>

                           
                            < KeyboardArrowDownIcon />
                        </div>
                    </div>
                    </div>

                    <div className="icon-btns">
                        <div>
                            <img src="https://vectorfinance.io/static/media/VTX.44f352d3.svg" alt="" />
                            <Typography>$0.22</Typography>
                        </div>
                        <div>
                            <img src="https://vectorfinance.io/static/media/xPTP.9b9a2efe.svg" alt="" />
                            <Typography>$0.18</Typography>
                        </div>
                        <div>
                            <img src="https://vectorfinance.io/static/media/zJOE.98990d92.svg" alt="" />
                            <Typography>$0.22</Typography>
                        </div>
                        <div>
                            <LocalGasStationIcon
                              sx={{color:"#6869E7",marginRight:"10px"}} />
                            <Typography>26.0</Typography>
                        </div>
                        <div className="wallet">
                            
                                <AccountBalanceWalletOutlinedIcon 
                                sx={{marginRight:"10px"}}
                                />
                                <div> CONNECT WALLET</div>
                          

                        </div>
                    </div>
                </Toolbar>
            </AppBar>



        </>
    )
}