import React from 'react';
import reading from './../../assets/reading.jpg';
import running from './../../assets/running.jpg';
import cooking from './../../assets/cooking.jpg';
import { Hobbie } from './Hobbie';

export const Hobbies = () => {

    const hobbies = [
        {
            title: 'Leer',
            description: 'Uno de mis libros favoritos es "La insoportable levedad del ser" de Milan Kundera.',
            image: reading
        },
        {
            title: 'Correr',
            description: 'Es bueno para la salud pero he encontrado en este hábito mucha paz y tiempo para reflexionar.',
            image: running
        },
        {
            title: 'Cocinar',
            description: 'Puedo ir de lo más sencillo a lo más elaborado, experimentar.',
            image: cooking
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
