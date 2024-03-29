import './Card.css';
import { StarCard } from './StarCard/StarCard';

export const Card = ({isActive, image, name, text, rate}) => {
    return(
        isActive ?
         <div className='CardIsActive'>
            <img src={image} alt='Аватарка' width={168} height={168}/>
            <h2 className='NameCard'>{`${name}`}</h2>
            <StarCard rate={rate}/>
            <p className='TextCard lato-regular'>{`${text}`}</p>
         </div> 
         : 
         <div>
         <img src={image} alt='Аватарка' width={93} height={93}/>
         </div>
    )
}