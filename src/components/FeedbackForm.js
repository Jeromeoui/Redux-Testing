import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function FeedbackForm(){

    console.log('test'); 

    console.log("Hi")
    const spacebetween = '25px';
    const textfieldcolor = '#160052';
    const [Barlength, setBarLength] = useState((window.innerWidth)*2/3);
    // const [Textfiller1, setText1] = useState("");
    // const [Textfiller2, setText2] = useState("");
    // const [Textfiller3, setText3] = useState("");
    // const [Textfiller4, setText4] = useState("");
    const [textFields, setTextFields] = useState({
        name: "",
        email: "",
        subject: "",
        feedback: "",
      });

    const handleSubmit = () => {
        console.log(textFields);
    };

    function handleInputChange(event){
        const {name, value} = event.target;
        setTextFields({...textFields, [name]: value});
    }

    // const handleTextFieldChange = (e) => {
    //     const { name, value } = e.target;
    //     setTextFields((prevFields) => ({
    //       ...prevFields,
    //       [name]: value,
    //     }));
    //   };

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
            <Box component="form" onSubmit={handleSubmit} noValidate>
            <Box display="flex" flexDirection="column" alignItems="left" sx={{width : Barlength/4}}>   
            <TextField
            required
            id="outlined-name-input"
            label="Name"
            name="name"
            color="primary"
            sx={{marginBottom: spacebetween}}
            // defaultValue="test"
            value={textFields.name}
            onChange={handleInputChange}
            autoFocus
            />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="left" sx={{width : Barlength/4}}>
            <TextField
            required
            id="outlined-email-input"
            label="Email"
            name="email"
            sx={{marginBottom: spacebetween}}
            // defaultValue={Textfiller}
            value={textFields.email}
            onChange={handleInputChange}
            />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="left" sx={{width : Barlength*3/4}}>
            <TextField
            required
            id="outlined-subject-input"
            label="Subject"
            name="subject"
            sx={{marginBottom: spacebetween}}
            // defaultValue={Textfiller}
            value={textFields.subject}
            onChange={handleInputChange}
            />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="left" sx={{width : Barlength}}>
            <TextField
            required
            id="outlined-multiline-static"
            label="Question/Feedback"
            name="feedback"
            multiline
            rows={4}
            sx={{marginBottom: spacebetween}}
            // defaultValue={Textfiller}
            value={textFields.feedback}
            onChange={handleInputChange}
            />
            </Box>
            </Box>
            <Button variant="contained" endIcon={<SendIcon />}
                // onClick={() => setTextFields("")}
            >
                Submit
            </Button>
        </Box>

    );
}