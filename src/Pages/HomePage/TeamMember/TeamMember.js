import React from 'react';

import { Button, Container, Grid, Typography } from '@mui/material';
import SingleMember from '../SingleMember/SingleMember';
import "./TeamMember.css"

const TeamMember = () => {
    const allmember = [
        {
            id: 1,
            name: "Anthony Watson",
            designation: "CEO, Infodex",
            image: "https://html.rovadex.com/html-informex/assets/img/team-1.jpg"
        },
        {
            id: 2,
            name: "Marybeth Hoover",
            designation: "CEO, Infodex",
            image: "https://html.rovadex.com/html-informex/assets/img/team-2.jpg"
        },
        {
            id: 3,
            name: "Stewart Collins",
            designation: "CEO, Infodex",
            image: "https://html.rovadex.com/html-informex/assets/img/team-3.jpg"
        }
    ]

    const bg = "https://html.rovadex.com/html-informex/assets/img/bg-team-about.svg"
    return (
        <div style={{ backgroundImage: `url( ${bg})`, backgroundColor: "rgba(83, 204, 93, 0.1)" }}>
            <Container >
                <Typography variant='h4' component="div" sx={{ fontWeight: 700, fontSize: "1.5 rem" }} className='teamAfter'>
                    Our Team
                </Typography>
                <Typography variant='p' component="div" sx={{ color: "#5a5a5a", my: 2, fontSize: "1.2em" }}>
                    They possess the secret knowledge and interesting experience of creating a digital product.
                </Typography>
                <Grid container spacing={2}>
                    {
                        allmember.map(member => <SingleMember
                            key={member.id}
                            member={member}

                        ></SingleMember>)


                    }

                </Grid>
                <Button variant='outlined' sx={{ my: 5 }}>View all team</Button>
            </Container>
        </div>
    );
};

export default TeamMember;