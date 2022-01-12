import { Grid } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardMedia, CardActions, CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./SingleService.css"


const SingleService = ({ service }) => {
    const { name, id, description, logo } = service;

    return (
        <Grid item xs={12} md={4} className="service-card">
            <Card sx={{ maxWidth: 345, p: 3, backgroundColor: "rgba(83, 204, 93, 0.1)" }} >
                <CardActionArea className='CardContent'>
                    <CardMedia
                        component="img"
                        sx={{ width: "25%", mx: "auto" }}
                        image={logo}

                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div" className='serviceAfter' sx={{ fontWeight: 600 }}>
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button size="small" color="primary" sx={{ fontWeight: 600, fontSize: "1em", letterSpacing: ".15em" }} >
                        READ MORE
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default SingleService;