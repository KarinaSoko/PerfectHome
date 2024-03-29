import './Header.css';
import { HeaderMenu } from './HeaderMenu/HeaderMenu.jsx';
import HeaderPhoto from '../../shared/images/HeaderPhoto.png'
import { HeaderSearch } from './HeaderSearch/HeaderSearch.jsx';
import StartImg from '../../shared/images/StartImg.svg'


export const Header = () => {
  return (
    <div className='Header'>
      <HeaderMenu />
      <div className='Main'>
        <img className='HeaderPhoto' src={HeaderPhoto} alt='Главное фото' />
        <div className='link_start'>
          <p className='text_link_start lato-bold'>Let’s Start</p>
          <img className='StartImg' src={StartImg} alt='Стрелочка' />
        </div>
      </div>
      <HeaderSearch />

    </div>
  )
};