import './Lux.css';
import LuxMain from '../../shared/images/LuxMain2.png';
import { LuxContent } from './LuxContent/LuxContent';

export const Lux = () =>{

    return(
        <div className='Lux'>
            <div className='LuxContents'>
            <img className='imgLuxMain' src={LuxMain} alt='Фото Люкса'/>
            <LuxContent Price={'$898,000'}/>
            </div>
        </div>
    )
}