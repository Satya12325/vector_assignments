import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Protocol() {



    return (
        <>
            <div style={{marginTop:"5px"}}>
                <Accordion sx={{background:"#1A1A36",color:"#FFFFFF"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color:"#FFFFFF"}} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography style={{fontSize:"12px"}}>DETAILED PROTOCOL STATS</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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