import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import SingleService from './SingleService/SingleService';

const Services = () => {
    const bg = "https://html.rovadex.com/html-informex/assets/img/bg-team-about.svg"
    const services = [
        {
            id: 1,
            logo: "https://html.rovadex.com/html-informex/assets/img/event-icon-1.svg",
            name: "Business Coaching",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ipsum temporibus tempora. Ea delectus architecto repellendus,"
        },
        {
            id: 2,
            logo: "https://html.rovadex.com/html-informex/assets/img/event-icon-2.svg",
            name: "Online Courses",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ipsum temporibus tempora. Ea delectus architecto repellendus,"
        },
        {
            id: 3,
            logo: "https://html.rovadex.com/html-informex/assets/img/event-icon-3.svg",
            name: "Conferences",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ipsum temporibus tempora. Ea delectus architecto repellendus,"
        },
    ]
    return (
        <div style={{ backgroundImage: `url( ${bg})`, backgroundColor: "rgba(83, 204, 93, 0.1)", margin: "20px 0 0" }}>
            <Container sx={{ flexGrow: 1, }}>
                <Grid container spacing={3} py={5}>
                    {
                        services.map(service => <SingleService
                            key={service.id}
                            service={service}
                        ></SingleService>)
                    }

                </Grid>
            </Container>
        </div>

    );
};

export default Services;