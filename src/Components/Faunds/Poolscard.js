import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ErrorIcon from '@mui/icons-material/Error';


export default function Poolscard() {



    return (
        <>
            <div style={{ marginTop: "5px",marginBottom:"5px" }}>
                <Accordion sx={{ color: "#FFFFFF" }} className="pooolcard1">
                    <AccordionSummary
                        expandIcon={<MoreVertIcon style={{ color: "#FFFFFF" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className="panel-div">
                            <div className="icons-div">
                                <img src="https://vectorfinance.io/static/media/VTX.44f352d3.svg" alt="" />
                                <div>
                                    <h3>VTX</h3>
                                    <p>ON TRADER JOE</p>
                                </div>
                            </div>

                            <div className="apr">

                                <h5>APR</h5>
                                <div><span  style={{ color:"#AEF33C"}}>5.8%</span><ErrorIcon sx={{fontSize:"15px",marginLeft:"10px",color:"#717299"}}/></div>

                            </div>
                            <div className="vtx">

                                <h5>Staked VTX</h5>
                                <p>0.0 VTX</p>

                            </div>

                            <div className="tvl">

                                <h5>TVL</h5>
                                <p>$4,356,038</p>

                            </div>

                            <div className="clamble">

                                <h5>Claimable</h5>
                                <p>$0.00 <ErrorIcon sx={{fontSize:"15px",marginLeft:"10px",color:"#717299"}}/></p>

                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails style={{ background: "#24244A"}}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>


               

            </div>
            <div style={{ marginTop: "5px",marginBottom:"5px" }}>
            <Accordion sx={{ color: "#FFFFFF" }} className="pooolcard2">
                    <AccordionSummary
                        expandIcon={<MoreVertIcon style={{ color: "#FFFFFF" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className="panel-div">
                            <div className="icons-div">
                                <img src="https://vectorfinance.io/static/media/ptp.95c5ca66.svg" alt="" />
                                <div>
                                    <h3>VTX</h3>
                                    <p>ON TRADER JOE</p>
                                </div>
                            </div>

                            <div className="apr">

                                <h5>APR</h5>
                                <div><span  style={{ color:"#AEF33C"}}>64.3%</span><ErrorIcon sx={{fontSize:"15px",marginLeft:"10px",color:"#717299"}}/></div>

                            </div>
                            <div className="vtx">

                                <h5>Staked VTX</h5>
                                <p>0.0 VTX</p>

                            </div>

                            <div className="tvl">

                                <h5>TVL</h5>
                                <p>$4,356,038</p>

                            </div>

                            <div className="clamble">

                                <h5>Claimable</h5>
                                <p>$0.00 <ErrorIcon sx={{fontSize:"15px",marginLeft:"10px",color:"#717299"}}/></p>

                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails style={{ background: "#24244A"}}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>              
            </div>
            <div style={{ marginTop: "5px",marginBottom:"5px" }}>
            <Accordion sx={{ color: "#FFFFFF" }} className="pooolcard3">
                    <AccordionSummary
                        expandIcon={<MoreVertIcon style={{ color: "#FFFFFF" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className="panel-div">
                            <div className="icons-div">
                                <img src="https://vectorfinance.io/static/media/JOE.14ec321a.svg" alt="" />
                                <div>
                                    <h3>VTX</h3>
                                    <p>ON TRADER JOE</p>
                                </div>
                            </div>

                            <div className="apr">

                                <h5>APR</h5>
                                <div><span  style={{ color:"#AEF33C"}}>80.9%</span><ErrorIcon sx={{fontSize:"15px",marginLeft:"10px",color:"#717299"}}/></div>

                            </div>
                            <div className="vtx">

                                <h5>Staked VTX</h5>
                                <p>0.0 VTX</p>

                            </div>

                            <div className="tvl">

                                <h5>TVL</h5>
                                <p>$4,356,038</p>

                            </div>

                            <div className="clamble">

                                <h5>Claimable</h5>
                                <p>$0.00 <ErrorIcon sx={{fontSize:"15px",marginLeft:"10px",color:"#717299"}}/></p>

                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails style={{ background: "#24244A"}}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
        </>
    )
}