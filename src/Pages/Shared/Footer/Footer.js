import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <Container >
                <Grid container spacing={2} sx={{ p: 8 }}>
                    <Grid item xs={12} md={5} textAlign={"left"}>
                        <Typography component="div" variant='h6' sx={{ fontWeight: 700, fontSize: "24px" }}><span style={{ color: "green" }}>a~z </span> CONSULTANCY</Typography>
                        <Typography component="div" variant='p' sx={{ color: "#5a5a5a", fontSize: "16px", my: 1 }}>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, dolorem aperiam. Explicabo sunt possimus nihil?</Typography>
                        <Box sx={{ mt: 4 }}>
                            <span><i class="fa fas fa-facebook socialIcon"></i>
                            </span>
                            <span><i class="fa fas fa-instagram socialIcon"></i>
                            </span>
                            <span><i class="fa fas fa-youtube socialIcon"></i>
                            </span>
                            <span><i class="fa fas fa-twitter socialIcon"></i>
                            </span>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} textAlign={"left"}>
                        <Typography component="div" variant='h6' sx={{ fontWeight: 500, color: "#696969", letterSpacing: ".105em", fontSize: "16px", mb: 2 }}>CONTACTS</Typography>
                        <Typography component="div" variant='p' sx={{ color: "#225374", fontWeight: 600, mb: 2 }}><i class=" fa fas fa-map-marker" style={{ marginRight: "15px", fontSize: "22px" }}></i>7100 Athens Place
                            Washington, DC 20521</Typography>
                        <Typography component="div" variant='p' sx={{ color: "#225374", fontWeight: 600, mb: 2 }}><i style={{ marginRight: "15px", fontSize: "22px" }} class="fa fas fa-phone"></i>
                            017-58-028--857</Typography>
                        <Typography component="div" variant='p' sx={{ color: "#225374", fontWeight: 600, mb: 1 }}> <i style={{ marginRight: "15px", fontSize: "22px" }} class="fa fal fa-envelope"></i>azConsultancy@info.mail</Typography>

                    </Grid>

                    <Grid item xs={12} md={3} sx={{}}>
                        <Typography variant='h6' component="div" sx={{ letterSpacing: ".25em", mb: 3, textAlign: "left", fontSize: "16px" }}> INSTAGRAM</Typography>
                        <Grid container spacing={1}>



                            <Grid item md={4} xs={4} ><img width={"100%"} src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> </Grid>
                            <Grid item md={4} xs={4}  ><img width={"100%"} src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> </Grid>
                            <Grid item md={4} xs={4} ><img width={"100%"} src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> </Grid>
                            <Grid item md={4} xs={4}  ><img width={"100%"} src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> </Grid>
                            <Grid item md={4} xs={4}  ><img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8at4PS2Uj4SqAsQz_7fjD5gvC0gTZEMv49Q&usqp=CAU" alt="" /> </Grid>
                            <Grid item md={4} xs={4} ><img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8at4PS2Uj4SqAsQz_7fjD5gvC0gTZEMv49Q&usqp=CAU" alt="" /> </Grid>



                        </Grid>

                    </Grid>
                </Grid>
            </Container>
            <Typography variant='p' component="div" sx={{ p: 3, fontSize: "18px", backgroundColor: "#F8f8ff" }}>© 2022. Rovadex. All Rights Reserved.</Typography>
        </div>
    );
};

export default Footer;