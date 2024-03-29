import './LuxRoom.css';

export const LuxRoom = ({img, quantity, title}) => {
    return(
        <div className='LuxRoom'>
            <div className='LuxElipse'>
            <img className='LuxSign' src={img} alt='Значок'/>
            </div>
            <p className='LuxRoomText font-Gilroy-script'>{`${quantity}`}</p>
            <p className='LuxRoomText font-Gilroy-script'>{`${title}`}</p>

        </div>
    )
}