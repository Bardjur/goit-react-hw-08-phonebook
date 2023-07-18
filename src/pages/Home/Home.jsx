import { Box, Container, Typography, Link } from "@mui/material";
import imgSrc from "images/contacts.png";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Container component="main" maxWidth="lg" sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      mt: '120px'
    }}>
      <Box sx={{width: 200}} mx="auto">
        <img src={imgSrc} style={{width:'100%'}} alt="phone book"/>
      </Box>
      <Typography 
        variant="h2" 
        component="h1"
        textTransform='uppercase' 
        textAlign="center" 
        fontWeight="700"
      >
        Phone book
      </Typography>
      <Typography 
        textTransform='uppercase' 
        textAlign="center" 
        fontWeight="700"
      >
        <Link component={RouterLink} to="login">login</Link> or <Link component={RouterLink} to="register">register</Link> to use
      </Typography>
    </Container>
  )
}