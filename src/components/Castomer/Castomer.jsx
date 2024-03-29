import './Castomer.css';
import { Card } from './Card/Card';
import CardAvatar1 from '../../shared/images/CardAvatar1.svg';
import CardAvatar2 from '../../shared/images/CardAvatar2.svg';
import CardAvatar3 from '../../shared/images/CardAvatar3.svg';

export const Castomer = () => {

    return(
        <div>
            <h1 className='TitleCastomer lato-800'>Our Customer Review</h1>
            <p className='TextCastomer Nunito-400'> We are recognized for exceeding client expectations and delivering great results through dedication.</p>
        <Card rate={4} isActive={true} image={CardAvatar2} name={'Jony Scotty'} text={'Quote testimonials are ads or artwork that display positive statements about your company from a brand evangelist or a delighted customer. The quote is usually accompanied by an image of the person being quoted to make the message more relatable to the target audience.'}/>
       
        </div>
    )
}

