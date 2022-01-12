import { Box, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./SingleMember.css"

const SingleMember = ({ member }) => {

    const { name, id, designation, image } = member
    return (
        <Grid item xs={12} md={4} sx={{ my: 2 }}>
            <Card sx={{ maxWidth: 345, pb: 2 }}>
                <CardMedia
                    component="img"

                    width="100%"
                    image={image}

                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700, color: "#151515" }}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary"
                        sx={{ color: "#747474", fontWeight: 500 }}>
                        {designation}
                    </Typography>
                </CardContent>

                <div >
                    <span><i class="fa fas fa-facebook socialIconTeam"></i>
                    </span>
                    <span><i class="fa fas fa-instagram socialIconTeam"></i>
                    </span>
                    <span><i class="fa fas fa-youtube socialIconTeam"></i>
                    </span>
                    <span><i class="fa fas fa-twitter socialIconTeam"></i>
                    </span>
                </div>

            </Card>
        </Grid>
    );
};

export default SingleMember;