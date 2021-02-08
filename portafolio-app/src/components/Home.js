import React from 'react';
import { Aside } from './Aside';
import { CardsProjects } from './CardsProjects';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { TypesProjects } from './TypesProjects';

export const Home = () => {
    return (
        <div className="home__container">
            <Header />
            <div className="home__main">
                <Aside />
                <Main />
            </div>
            <TypesProjects />
            <CardsProjects />
            <Footer />
        </div>
    );
};
