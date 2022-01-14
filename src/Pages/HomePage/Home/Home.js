import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import Courses from '../Courses/Courses';
import Header from '../Header/Header';
import InfoBanner from '../InfoBanner/InfoBanner';
import Services from '../Services/Services';
import TeamMember from '../TeamMember/TeamMember';

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
        </div>
    );
};

export default Home;