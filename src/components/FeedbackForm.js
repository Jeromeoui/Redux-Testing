import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function FeedbackForm(){

    const spacebetween = '25px';
    const textfieldcolor = '#160052';
    const [Barlength, setBarLength] = useState((window.innerWidth)*2/3);

    useEffect(() => {
        const handleResize = () => {
        setBarLength((window.innerWidth)*2/3);
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
        return (
        <Box padding="30px">
            <Box style={{background: '#FFFFFF', height: '50px', alignItems: 'center', display: 'flex', marginBottom: spacebetween}}>
            <Typography
                style={{fontSize: '20px', fontWeight: 'bold'}}
                color="black"
                fontWeight="bold"
                marginLeft="0px"
                align="left">
            Leave us your question or feedback here.
            </Typography>     
            </Box>
            <Box display="flex" flexDirection="column" alignItems="left" sx={{width : Barlength/4}}>   
            <TextField
            required
            id="outlined-name-input"
            label="Name"
            color="primary"
            sx={{marginBottom: spacebetween}}
            />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="left" sx={{width : Barlength/4}}>
            <TextField
            required
            id="outlined-email-input"
            label="Email"
            sx={{marginBottom: spacebetween}}
            />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="left" sx={{width : Barlength*3/4}}>
            <TextField
            required
            id="outlined-subject-input"
            label="Subject"
            sx={{marginBottom: spacebetween}}
            />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="left" sx={{width : Barlength}}>
            <TextField
            required
            id="outlined-multiline-static"
            label="Question/Feedback"
            multiline
            rows={4}
            sx={{marginBottom: spacebetween}}
            />
            </Box>
            <Button variant="contained" endIcon={<SendIcon />}>
                Submit
            </Button>
        </Box>

    );
}