import './HeaderMenu.css';
import Logo from '../../../shared/images/RealEstateHeader.svg'
import { HeaderNav } from './HeaderNav/HeaderNav';
import { ButtonAdd } from './ButtonAdd/ButtonAdd';

export const HeaderMenu = () => {
  return (
    <div className='Menu'>
      <img className='logo' src={Logo} alt='Логотип' />
      <div className='NavList '>
      <HeaderNav title={'Home'}/>
      <HeaderNav title={'Company'}/>
      <HeaderNav title={'Pricing'}/>
      <HeaderNav title={'Contact'}/>
      </div>
      <ButtonAdd title={'Add Listing'}/>
    </div>


  )
};