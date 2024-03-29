import './Logo.css';
import Logo1 from '../../../shared/images/Logo1.svg';
import Logo2 from '../../../shared/images/logo2.svg';
import Logo3 from '../../../shared/images/logo3.svg';
import Logo4 from '../../../shared/images/logo4.svg';
import Logo5 from '../../../shared/images/logo5.svg';
import Logo6 from '../../../shared/images/logo6.svg';

export const LogoList = () => {

    return(
<div className='LogoList'>
    <img src={Logo1} alt='Логотип Smith&Robert'/>
    <img src={Logo2} alt='Логотип Smith&Robert'/>
    <img src={Logo3} alt='Логотип Smith&Robert'/>
    <img src={Logo4} alt='Логотип Smith&Robert'/>
    <img src={Logo5} alt='Логотип Smith&Robert'/>
    <img src={Logo6} alt='Логотип Smith&Robert'/>

</div>
    )
};