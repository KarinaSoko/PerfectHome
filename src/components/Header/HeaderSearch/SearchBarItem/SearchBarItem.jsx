import './SearchBarItem.css';
import Expand from '../../../../shared/images/Expand.svg';

export const SearchBarItem = ({title, select}) => {

    return (
        <div className='SearchBarItem'>
            <p className='titleSearchBarItem lato-600'>{`${title}`}</p>
            <div className='ExpendPlace'>
                <p className='selectSearchBarItem lato-regular'>{`${select}`}</p>
                <img className='Expand' src={Expand} alt='Развернуть' />
            </div>

        </div>

    )
};