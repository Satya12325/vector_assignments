import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ErrorIcon from '@mui/icons-material/Error';
import Box from '@mui/material/Box';
import "./Faunds.css"

export default function Poolscard() {



    return (
        <>
            <Box style={{ marginTop: "5px",marginBottom:"5px" }}>
                <Accordion sx={{ color: "#FFFFFF" }} className="pooolcard1">
                    <AccordionSummary
                        expandIcon={<MoreVertIcon style={{ color: "#FFFFFF" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Box className="panel-Box">
                            <Box className="icons-Box">
                                <img src="https://vectorfinance.io/static/media/VTX.44f352d3.svg" alt="" />
                                <Box>
                                    <Typography variant="h5" className="panel-heading">VTX</Typography>
                                    <Typography>ON TRADER JOE</Typography>
                                </Box>
                            </Box>

                            <Box className="apr">

                                <Typography variant="h5" sx={{fontSize:13,fontWeight:"bold"}}>APR</Typography>
                                <Box style={{display: "flex",alignItems: "center"}}><Typography  style={{ color:"#AEF33C"}}>5.8%</Typography><ErrorIcon sx={{fontSize:"15px",marginLeft:"10px",color:"#717299"}}/></Box>

                            </Box>
                            <Box className="vtx">

                                <Typography variant="h5" sx={{fontSize:13,fontWeight:"bold"}}>Staked VTX</Typography>
                                <Typography>0.0 VTX</Typography>

                            </Box>

                            <Box className="tvl">

                                <Typography variant="h5" sx={{fontSize:13,fontWeight:"bold"}}>TVL</Typography>
                                <Typography>$4,356,038</Typography>

                            </Box>

                            <Box className="clamble">

                                <Typography variant="h5" sx={{fontSize:13,fontWeight:"bold"}}>Claimable</Typography>
                                <Typography>$0.00 <ErrorIcon sx={{fontSize:"15px",marginLeft:"10px",color:"#717299"}}/></Typography>

                            </Box>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails style={{ background: "#24244A"}}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>


               

            </Box>
            <Box style={{ marginTop: "5px",marginBottom:"5px" }}>
            <Accordion sx={{ color: "#FFFFFF" }} className="pooolcard2">
                    <AccordionSummary
                        expandIcon={<MoreVertIcon style={{ color: "#FFFFFF" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Box className="panel-Box">
                            <Box className="icons-Box">
                                <img src="https://vectorfinance.io/static/media/ptp.95c5ca66.svg" alt="" />
                                <Box>
                                <Typography variant="h5" className="panel-heading">VTX</Typography>
                                    <Typography>ON TRADER JOE</Typography>
                                </Box>
                            </Box>

                            <Box className="apr">

                                <Typography variant="h5" sx={{fontSize:13,fontWeight:"bold"}}>APR</Typography>
                                <Box style={{display: "flex",alignItems: "center"}}><Typography  style={{ color:"#AEF33C"}}>64.3%</Typography><ErrorIcon sx={{fontSize:"15px",marginLeft:"10px",color:"#717299"}}/></Box>

                            </Box>
                            <Box className="vtx">

                                <Typography variant="h5" sx={{fontSize:13,fontWeight:"bold"}}>Staked VTX</Typography>
                                <Typography>0.0 VTX</Typography>

                            </Box>

                            <Box className="tvl">

                                <Typography variant="h5" sx={{fontSize:13,fontWeight:"bold"}}>TVL</Typography>
                                <Typography>$4,356,038</Typography>

                            </Box>

                            <Box className="clamble">

                                <Typography variant="h5" sx={{fontSize:13,fontWeight:"bold"}}>Claimable</Typography>
                                <Typography>$0.00 <ErrorIcon sx={{fontSize:"15px",marginLeft:"10px",color:"#717299"}}/></Typography>

                            </Box>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails style={{ background: "#24244A"}}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>              
            </Box>

            <Box style={{ marginTop: "5px",marginBottom:"5px" }}>
            <Accordion sx={{ color: "#FFFFFF" }} className="pooolcard3">
                    <AccordionSummary
                        expandIcon={<MoreVertIcon style={{ color: "#FFFFFF" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Box className="panel-Box">
                            <Box className="icons-Box">
                                <img src="https://vectorfinance.io/static/media/JOE.14ec321a.svg" alt="" />
                                <Box>
                                <Typography variant="h5" className="panel-heading">VTX</Typography>
                                    <Typography>ON TRADER JOE</Typography>
                                </Box>
                            </Box>

                            <Box className="apr">

                                <Typography variant="h5" sx={{fontSize:13,fontWeight:"bold"}}>APR</Typography>
                                <Box style={{display: "flex",alignItems: "center"}}><Typography  style={{ color:"#AEF33C"}}>80.9%</Typography><ErrorIcon sx={{fontSize:"15px",marginLeft:"10px",color:"#717299"}}/></Box>

                            </Box>
                            <Box className="vtx">

                                <Typography variant="h5" sx={{fontSize:13,fontWeight:"bold"}}>Staked VTX</Typography>
                                <Typography>0.0 VTX</Typography>

                            </Box>

                            <Box className="tvl">

                                <Typography variant="h5" sx={{fontSize:13,fontWeight:"bold"}}>TVL</Typography>
                                <Typography>$4,356,038</Typography>

                            </Box>

                            <Box className="clamble">

                                <Typography variant="h5" sx={{fontSize:13,fontWeight:"bold"}}>Claimable</Typography>
                                <Typography>$0.00 <ErrorIcon sx={{fontSize:"15px",marginLeft:"10px",color:"#717299"}}/></Typography>

                            </Box>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails style={{ background: "#24244A"}}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </Box>
        </>
    )
}