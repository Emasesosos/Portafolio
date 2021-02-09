import React from 'react';

export const Projects = () => {

    const handleProjectClick = (type) => {
        console.log({type});
    };

    return (
        <div className="projects__container">
            <div className="projects__title">
                <h3>Projects(3)</h3>
            </div>
            <div className="projects__types">
                <div 
                    className="projects__responsive"
                    onClick={ () => handleProjectClick('R') }
                >
                    <p>React: Responsive</p>
                </div>
                <div 
                    className="projects__api"
                    onClick={ () => handleProjectClick('A') }
                >
                    <p>React: Use of API</p>
                </div>
                <div 
                    className="projects__mern"
                    onClick={ () => handleProjectClick('M') }
                >
                    <p>MERN</p>
                </div>
            </div>
        </div>
    );
};
