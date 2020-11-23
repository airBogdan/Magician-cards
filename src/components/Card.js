import classes from './Card.module.css';

import spadesIcon from '../assets/spades.svg';
import diamondsIcon from '../assets/diamonds.svg';
import heartsIcon from '../assets/hearts.svg';
import clubsIcon from '../assets/clubs.svg';

export default function Card (props) {
    let icon = '';
    switch (props.type) {
        case 'clubs':
            icon = <img src={clubsIcon} width='40px' height='40px' alt="clubs" />;
            break;
        case 'spades':
            icon = <img src={spadesIcon} width='40px' height='40px' alt="spades" />;
            break;
         case 'hearts':
            icon = <img src={heartsIcon} width='40px' height='40px' alt="hearts" />;
            break;
        case 'diamonds':
            icon = <img src={diamondsIcon} width='40px' height='40px' alt="diamonds" />;
            break;
        default:
            break;

    }

    const cardNumber = () => {
        switch (props.number) {
            case 15: return 'A';
            case 12: return 'J';
            case 13: return 'Q';
            case 14: return 'K';
            default: return props.number;

        }
    }
    return (
        <div onClick={props.draw} className={`${classes.card} ${props.class}`}>
            <p>{cardNumber()}</p>
            <p>{icon}</p>
            <p>{cardNumber()}</p>
        </div>
    )
}

