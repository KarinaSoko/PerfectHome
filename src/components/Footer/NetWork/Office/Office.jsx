import './Office.css';

export const Office = ({title, phone, fax, adress}) => {
    return(
        <div className='Office'>
                        <h2 className='TitleFooter font-GilroyBold-script'>{`${title}`}</h2>
                        <p className='TextFooter font-Gilroy-script'>Phone: {`${phone}`}</p>
                        <p className='TextFooter font-Gilroy-script'>Fax: {`${fax}`}</p>
                        <p className='TextFooter font-Gilroy-script'>{`${adress}`}</p>

                    </div>
    )
}