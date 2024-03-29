import './World.css';
import LogoAndWorldMain from '../../../shared/images/LogoAndWorldMain.png';
import LogoAndWorldStatistc from '../../../shared/images/LogoAndWorldStatistc.png';
import { Excellence } from './Excellence/Excellence.jsx';
import { ButtonMore } from './ButtonMore/ButtonMore.jsx';

export const World = () => {
    return (
        <div className='World'>
            <div className='MainInfo'>
                <p className='lato-800 titleWorld'>World Of Smart Spaces And Development</p>
                <p className='lato-regular textWorld'>We are recognized for exceeding client expectations and delivering great results through dedication, ease of process,<br /> and extraordinary services to our worldwide clients.</p>
                <div className='ExcellenceList'>
                    <Excellence title={'300+'} select={'Properties'} />
                    <Excellence title={'20+'} select={'Experience'} />
                    <Excellence title={'150+'} select={'Varified Agent'} />
                </div>
                <ButtonMore title={'Learn More'}/>
            </div>

            <div className='MainImg'>
                <img className='LogoAndWorldMain' src={LogoAndWorldMain} alt='Фото здания' />
                <img className='LogoAndWorldStatistc' src={LogoAndWorldStatistc} alt='Статистика' />
            </div>
        </div>
    )
};