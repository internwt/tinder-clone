import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import SwipeButton from './SwipeButton'
import './Card.css'
function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "steve jobs",
            url: 'https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg'
        },
        {
            name: "steve jobs",
            url: 'https://i.mdel.net/mdx/i/2019/01/2019_01_16_Models.com_15.jpg'
        },
        {
            name: "steve jobs",
            url: 'https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg'
        },
        {
            name: "steve jobs",
            url: 'https://i.mdel.net/mdx/i/2019/01/2019_01_16_Models.com_15.jpg'
        },
        {
            name: "steve jobs",
            url: 'https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg'
        },
        {
            name: "steve jobs",
            url: 'https://i.mdel.net/mdx/i/2019/01/2019_01_16_Models.com_15.jpg'
        }
    ])
    return (
        <div>
            <h1>tinder cards</h1>
            <div className="tinederCards_conatainer">
                {
                    people.map((person, index) =>
                        (
                            <TinderCard
                                className='swipe'
                                key={person.name}
                                preventSwipe={['up', 'down']}
                            >
                                <div style={{ backgroundImage: `url(${person.url})` }} className='card'>
                                    <h3>  {person.name}</h3>
                                </div>

                            </TinderCard>
                        )
                    )
                }
                <SwipeButton />
            </div>
        </div>
    )
}

export default TinderCards
