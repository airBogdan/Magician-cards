import { useState } from 'react';
import './App.css';
import Card from './components/Card';


function App() {
    const numbers = [15,2,3,4,5,6,7,8,9,10,12,13,14];
    const types = [{type: "clubs", value: 4}, {type: "spades", value: 3}, {type: 'hearts', value: 2}, {type: 'diamonds', value: 1}];
    const cards = [];

    let id = 0;
    types.forEach(type => {
        numbers.forEach((number) => {
            cards.push({number, type: type.type, typeValue: type.value, id});
            id++;
        })
    })

    const cardState = useState([...cards]);
    const drawnCards = useState([]);

    const drawCard = (index) => {
        const newCardState = [...cardState[0]];
        const newDrawnCards = [...drawnCards[0], newCardState.splice(index, 1)[0]];
        drawnCards[1](newDrawnCards);
        cardState[1](newCardState);
    }

    const shuffle = () => {
        const cards = [...cardState[0]];
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        cardState[1](cards);
    }


    const sortCards = () => {
        const sortedCards = [...drawnCards[0].sort((a,b) => {
            if (a.typeValue == b.typeValue) return b.number - a.number
            else return b.typeValue - a.typeValue
        })];
        drawnCards[1](sortedCards);
    }

    const reset = () => {
        cardState[1]([...cards]);
        drawnCards[1]([]);
    }

    return (
        <div className="App">
            <div className='card-container'>
                <aside>
                    <button onClick={shuffle}>Shuffle</button>
                    <button onClick={reset} className='reset'>Reset</button>
                </aside>
                <div className='deck-cards'>
                    {cardState[0].map((card, index) => {
                        return <Card number={card.number} type={card.type} key={card.id} draw={() => drawCard(index)} class='deckCard' />
                    })}
                </div>
            </div>

            {!drawnCards[0].length ? null :
                <div className='card-container'>
                    <aside>
                        <button onClick={sortCards}>Sort</button>
                    </aside>
                    <div className='drawn-cards'>
                        {drawnCards[0].map(card => <Card number={card.number} type={card.type} key={card.id} class='drawnCard' />)}
                    </div>
                </div>
            }
        </div>
    );
}

export default App;
