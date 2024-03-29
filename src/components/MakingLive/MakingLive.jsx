import './MakingLive.css';
import MakingLiveMain from '../../shared/images/MakingLiveMain.png';
import MakingLiveStatic from '../../shared/images/MakingLiveStatic.png';
import { ItemMakingLive } from './ItemMakingLive/ItemMakingLive';

export const MakingLive = () => {
    return (
        <div className='MakingLive'>
            <div className='MakingLiveContents'>
                <div className='MakingLivePhotos'>
                    <img src={MakingLiveMain} alt='Фото здания' />
                    <img className='MakingLiveStatic' src={MakingLiveStatic} alt='Фото здания' />
                </div>
                <div className='MakingLiveContent'>
                    <h1 className='TitleMakingLive lato-800'>Making living spaces More Beautiful</h1>
                    <p className='DescriptionMakingLive lato-regular'>We are recognized for exceeding client expectations and delivering great results through dedication</p>
                    <ItemMakingLive title={'Booking Make Compfort' } description={'Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage.'}/>
                    <ItemMakingLive title={'Easy Payment Method' } description={'Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage.'}/>
                    <ItemMakingLive title={'Our Agent Services' } description={'Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage.'}/>
                </div>
            </div>
        </div>
    )
}