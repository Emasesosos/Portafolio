import React, { useState } from 'react';

export const Projects = ({ setTypeProjects }) => {

    const [hoverClass, setHoverClass] = useState('responsive');

    const handleProjectClick = (type) => {
        console.log({type});
        if(type === 'R') {
            setHoverClass('responsive');
            setTypeProjects('R');
        } else if(type === 'A') {
            setHoverClass('api');
            setTypeProjects('A');
        } else {
            setHoverClass('mern');
            setTypeProjects('M');
        }
    };

    return (
        <div className="projects__container">
            <div className="projects__title">
                <h3>Proyectos(3)</h3>
            </div>
            <div className="projects__types">
                <div 
                    className={`projects__responsive ${hoverClass}`}
                    onClick={ () => handleProjectClick('R') }
                >
                    <p>Responsive</p>
                </div>
                <div 
                    className={`projects__api ${hoverClass}`}
                    onClick={ () => handleProjectClick('A') }
                >
                    <p>API</p>
                </div>
                <div 
                    className={`projects__mern ${hoverClass}`}
                    onClick={ () => handleProjectClick('M') }
                >
                    <p>MERN</p>
                </div>
            </div>
        </div>
    );
};
