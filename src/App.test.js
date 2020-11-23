import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('simple test', () => {
    const { container } = render(<App />);

    //first render
    const deckCard = container.querySelectorAll('.deckCard');
    expect(deckCard).toHaveLength(52);

    const drawnCard = container.querySelector('.drawn-cards');
    expect(drawnCard).toBe(null);


    // const cardType = deckCard[0].childNodes[1].childNodes[0].src.split('/')[3].split('.')[0];
    // const cartContent = deckCard[0].childNodes[0].textContent;

    // click 3 cards
    fireEvent.click(deckCard[0]);
    fireEvent.click(deckCard[1]);
    fireEvent.click(deckCard[3]);
    const cardDeck2 =  container.querySelectorAll('.deckCard')
    expect(cardDeck2).toHaveLength(49);

    const drawnCard2 = container.querySelectorAll('.drawnCard');
    expect(drawnCard2).toHaveLength(3);

    //reset cards
    const reset = screen.getByText('Reset');
    fireEvent.click(reset);

    const drawnCard3 = container.querySelector('.drawn-cards');
    expect(drawnCard3).toBe(null);

    const deckCard3 = container.querySelectorAll('.deckCard');
    expect(deckCard3).toHaveLength(52);
});
