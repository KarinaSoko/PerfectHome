import './Footer.css';
import LogoFooter from '../../shared/images/LogoFooter.svg';
import Facebook from '../../shared/images/Facebook1.svg';
import Instagram from '../../shared/images/instagram1.png';
import Twitter from '../../shared/images/Twitter1.svg';
import ButtonSend from '../../shared/images/ButtonSend.svg';
import { NetWork } from './NetWork/NetWork';
import { Office } from './NetWork/Office/Office';

export const Footer = () => {
    return (
        <div>
            <div className='Footer'>
                <div className='columns'>
                    <div className='column1'>
                        <img src={LogoFooter} alt='Логотип' width={195} height={46} />
                        <p className='TextFollow font-Gilroy-script'>Follow Us</p>
                        <div className='networks'>
                            <NetWork image={Twitter} className={'colorCircle'} />
                            <NetWork image={Instagram} className={''} />
                            <NetWork image={Facebook} className={'colorCircle'} />
                        </div>
                    </div>
                    <div className='column2'>
                        <h2 className='TitleFooter font-GilroyBold-script'>Subscribe Newsletter</h2>
                        <p className='TextFooterBigger font-Gilroy-script'>Get daily update about brian Reece Sales representative.</p>
                        <div className='EmailSend'>
                            <input className='Email font-Gilroy-script' type='email' placeholder='Email address'>
                            </input>
                            <button className='ButtonSend'>
                                <img src={ButtonSend}/>
                            </button>
                          
                        </div>
                    </div>
                    <Office title={'Riverdale Office'} phone={'416-462-1888'} fax={'416-462-3135'} adress={'724 Pape Avenue Toronto, ON M4K 3S7'}/>
                    <Office title={'Corporate Office'} phone={'416-531-9680'} fax={'416-531-0154'} adress={'968 College Street Toronto, ON M6H 1A5'}/>
                   
                </div>

            </div>
            <div className='FooterNav'>
                <p className='TextFooterNav lato-regular'>Copyright 2021 © All rights Reserved.</p>
            </div>
        </div>
    )
}