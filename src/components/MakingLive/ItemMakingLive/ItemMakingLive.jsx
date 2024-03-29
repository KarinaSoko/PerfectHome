import './ItemMakingLive.css';
import MakingLiveItem from '../../../shared/images/MakingLiveItem.svg';

export const ItemMakingLive = ({ title, description }) => {
    return (
        <div className='ItemMakingLive'>

            <div className='TextItem'>
                <div className='circle'>
                    <img className='ItemMaking' src={MakingLiveItem} alt='Галочка' />
                </div>
                <h2 className='TitleTextItem lato-bold'>{`${title}`}</h2>
            </div>

            <p className='DescriptionTextItem Nunito-400'>{`${description}`}</p>


        </div>
    )
}