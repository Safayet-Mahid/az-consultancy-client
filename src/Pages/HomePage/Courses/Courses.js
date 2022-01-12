import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import SingleMember from '../SingleMember/SingleMember';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {

    const courses = [

        {
            id: 1,
            name: "Economic Development",
            date: "June 11,2019",
            payment: "220",
        },
        {
            id: 2,
            name: "Economic Development",
            date: "June 11,2019",
            payment: "220",
        },
        {
            id: 3,
            name: "By the readable content",
            date: "June 11,2019",
            payment: "220",
        },
        {
            id: 4,
            name: "Reader will be distracted",
            date: "June 11,2019",
            payment: "220",
        },
        {
            id: 5,
            name: "Economic Development",
            date: "June 11,2019",
            payment: "220",
        },
        {
            id: 6,
            name: "Many web page publishing",
            date: "June 11,2019",
            payment: "220",
        },

    ]

    const bg = "https://html.rovadex.com/html-informex/assets/img/bg-team-about.svg"

    return (
        <div style={{ backgroundImage: `url( ${bg})`, backgroundColor: "rgba(83, 204, 93, 0.1)" }}>

            <Container >
                <Typography variant='h4' component="div" sx={{ fontWeight: 700, fontSize: "1.5 rem" }} className='teamAfter'>
                    Our Courses
                </Typography>
                <Typography variant='p' component="div" sx={{ color: "#5a5a5a", my: 2, fontSize: "1.2em" }}>
                    They possess the secret knowledge and interesting experience of creating a digital product.
                </Typography>
                <Grid container spacing={2}>
                    {
                        courses.map(course => <SingleCourse
                            key={course.id}
                            course={course}



                        ></SingleCourse>)


                    }

                </Grid>
                <Button variant='outlined' sx={{ my: 5 }}>View More</Button>
            </Container>

        </div>
    );
};

export default Courses;