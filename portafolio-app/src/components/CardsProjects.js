import React from 'react';
import { CardProject } from './CardProject';
import { responsive, api, mern } from './../helpers/projects';

export const CardsProjects = ({ typeProjects }) => {

    let projects;

    if(typeProjects === 'R') {
        projects = responsive;
    } else if (typeProjects === 'A') {
        projects = api;
    } else {
        projects = mern;
    }

    return (
        <div className="cardsProjects__container">
            {
                projects.map((project, index) => {
                    return <CardProject 
                                key={ index }
                                project={ project }
                            />;
                })
            }
        </div>
    );
    
};
