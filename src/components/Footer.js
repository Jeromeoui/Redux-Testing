import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import BackToTopButton from './BackToTop';

export default function Footer() {
    const [WindowWidth, setScreenWidth] = useState(window.innerWidth);
    const [WindowHeight, setScreenHeight] = useState(window.innerHeight/7);

    useEffect(() => {
        const handleResize = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight/7);
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const BoxStyles = {
        width: WindowWidth,
        height: WindowHeight,
        overflow: 'auto',
        backgroundColor: '#0d47a1',
        py: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      };

    return (
        <Box style={BoxStyles}>
                <BackToTopButton/>
                <Typography
                    variant="subtitle1"
                    style={{textAlign: 'center'}}
                    align="center"
                    color="white"
                    component="p">
                    For any further queries, kindly contact the UAM team via UAM@synapxe.sg
                </Typography>
        </Box>
    );
}