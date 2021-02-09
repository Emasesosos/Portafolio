import React from 'react';
import interestelar from './../../assets/Interestelar1.jpg';
import edgeOfTomorrow from './../../assets/edge_tomorrow.jpg';
import cosmos from './../../assets/cosmos.png';
import { Hobbie } from './Hobbie';

export const Hobbies = () => {

    const hobbies = [
        {
            title: 'Reading',
            description: 'I like to read, I have started read since 9 years, I read everything',
            image: interestelar
        },
        {
            title: 'Running',
            description: 'I like to run in the mornings...',
            image: edgeOfTomorrow
        },
        {
            title: 'Cooking',
            description: 'I like to cook...',
            image: cosmos
        }
    ];

    return (
        <div className="hobbies__container">
            <div className="hobbies__title">
                <h4>Hobbies</h4>
            </div>
            {
                hobbies.map((hob, index) => {
                    return <Hobbie
                                key={ index }
                                hob={ hob } 
                            />
                })
            }
        </div>
    );
};
