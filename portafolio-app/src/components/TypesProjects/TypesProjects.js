import React from 'react';
import { Projects } from './../Projects/Projects';

export const TypesProjects = ({ setTypeProjects }) => {
    return (
        <div className="typesProjects__container">
            <Projects 
                setTypeProjects={ setTypeProjects }
            />
        </div>
    );
};
