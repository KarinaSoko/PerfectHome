import './PropertyCard.css';
import PropertyNetwork from '../../../shared/images/PropertyNetwork.svg';
import PropertyFamily from '../../../shared/images/PropertyFamily.svg';
import PropertyBathroom from '../../../shared/images/PropertyBathroom.svg';
import PropertyBedroom from '../../../shared/images/PropertyBedroom.svg';
import PropertyArea from '../../../shared/images/PropertySpace.svg';
import { ButtonVievMore } from './ButtonVievMore/ButtonVievMore';



export const PropertyCard = ({ image, network, family, Bathroom, Bedroom, area, imgAvatar, fullname }) => {

    return (
        <div className='PropertyCard'>

            <img className='PropertyImage' src={image} alt="Фото недвижимости" width={348} height={286} />
            <div className='PriceAndCategory'>
                <p className='Price lato-800'>$150,000</p>
                <div className='ChangeCategory'>
                <div className='PropertyNetwork'>
                    <img className='imgPropertyNetwork' src={PropertyNetwork} alt='icon'/>
                    <p className='font-AirbnbCereal-script'>{`${network}`}</p>
                </div>
                <div className='PropertyFamily'>
                    <img src={PropertyFamily} alt='icon'/>
                    <p className='font-AirbnbCereal-script'>{`${family}`}</p>
                </div>
                </div>
            </div>
            <div className='AboutProperty'>
                <div className='bathroom'>
                    <img src={PropertyBathroom} width={14} height={14} alt='icon'/>
                    <p className='Nunito-400' >{`${Bathroom}`}</p>
                </div>
                <div className='bedroom'>
                    <img src={PropertyBedroom} width={14} height={14} alt='icon'/>
                    <p className='Nunito-400'>{`${Bedroom}`}</p>
                </div>
                <div className='area'>
                    <img src={PropertyArea} width={14} height={14} alt='icon'/>
                    <p className='Nunito-400'>{`${area}`}</p>
                </div>
            </div>
            <div className='PersonAndButton'>
                <div className='Person'>
                    <img src={imgAvatar} alt='Аватар'/>
                    <p className='FullName Nunito-700'>{`${fullname}`}</p>
                </div>
                <ButtonVievMore title={'View More '}/>

            </div>

        </div>
    )
};
