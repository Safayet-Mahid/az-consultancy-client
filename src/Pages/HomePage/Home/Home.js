import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Courses from '../Courses/Courses';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import InfoBanner from '../InfoBanner/InfoBanner';
import Services from '../Services/Services';
import TeamMember from '../TeamMember/TeamMember';
import Testimonial from '../Testmonial/Testimonial';

const Home = () => {
    return (
        <div>

            <Navigation></Navigation>
            <Header></Header>
            <Services></Services>
            <About></About>
            <TeamMember></TeamMember>
            <Courses></Courses>
            <InfoBanner></InfoBanner>
            <Testimonial></Testimonial>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;