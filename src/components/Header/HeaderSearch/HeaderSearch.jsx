import './HeaderSearch.css'
import { SearchBarItem } from './SearchBarItem/SearchBarItem';
import { ButtonSearch } from './ButtonSearch/ButtonSearch';

export const HeaderSearch = () => {
    return (

        <div className='search-bottom-frame'>
            <div className='search-second-frame'>
                <div className='search-bar'>
                    <SearchBarItem title={'Catagories'} select={'Property Catagories'} />
                    <SearchBarItem title={'Location'} select={'Select Your City'} />
                    <SearchBarItem title={'Area'} select={'Select Your Area'} />
                </div>
                <ButtonSearch title={'Search'} />

            </div>

        </div>

    )
};