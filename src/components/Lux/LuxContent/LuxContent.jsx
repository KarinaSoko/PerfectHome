import './LuxContent.css';
import LuxFamily from '../../../shared/images/LuxFamily.svg';
import LuxBathroom from '../../../shared/images/LuxBathroom.svg';
import LuxBedroom from '../../../shared/images/LuxBedroom.svg';
import LuxSpace from '../../../shared/images/LuxSpace.svg';
import Lux12 from '../../../shared/images/Lux12.png';
import Lux22 from '../../../shared/images/Lux22.png';
import Lux32 from '../../../shared/images/Lux32.png';
import { LuxRoom } from './LuxRoom/LuxRoom';

export const LuxContent = ({ Price }) => {
    return (
        <div className='LuxContent'>
            <h1 className='LuxTitle lato-800'>Luxarious Property</h1>
            <p className='LuxText lato-regular'>We are recognized for exceeding client expectations and delivering great results through dedication, ease of process.</p>
            <p className='LuxAddress lato-700'>915 Ferndale Crescent Newmarket, ON</p>
            <div className='LuxPriceCategory'>
                <p className='LuxPrice lato-800'>{`${Price}`}</p>
                <div className='LuxCategory'>
                    <img src={LuxFamily} alt='Значок' width={15} height={15} />
                    <p className='LuxFamily lato-500'> Family</p>
                </div>

            </div>
            <div className='LuxRooms'>
                <LuxRoom img={LuxBathroom} quantity={'2'} title={'bathroom'} />
                <LuxRoom img={LuxBedroom} quantity={'2'} title={'bedroom'} />
                <LuxRoom img={LuxSpace} quantity={'1200'} title={'Sq. Fit'} />
            </div>
            <div className='LuxPhoto'>
            <img className='LuxPhotoMade' src={Lux12} alt='Фото Люкса' />
            <img className='LuxPhotoMade' src={Lux22} alt='Фото Люкса' />
            <img className='LuxPhotoMade' src={Lux32} alt='Фото Люкса' />

            </div>
        </div>
    )
}