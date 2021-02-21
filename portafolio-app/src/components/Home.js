import React, { useState } from 'react';
import { Aside } from './Aside';
import { CardsProjects } from './Cards/CardsProjects';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { TypesProjects } from './TypesProjects/TypesProjects';

export const Home = () => {

    const [typeProjects, setTypeProjects] = useState('R');

    return (
        <div className="home__container">
            <Header />
            <div className="home__main">
                <Aside />
                <Main />
            </div>
            <TypesProjects 
                setTypeProjects={ setTypeProjects }
            />
            <CardsProjects 
                typeProjects={ typeProjects }
            />
            <Footer />
        </div>
    );
};
