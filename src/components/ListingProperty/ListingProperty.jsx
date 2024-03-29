import './ListingProperty.css';
import { PropertyCard } from './PropertyCard/PropertyCard';
import Property_1_3 from '../../shared/images/Property1_1.png'
import Property_2_4 from '../../shared/images/Property2_2.png'
import Property_3_6 from '../../shared/images/Property3_3.png'
import Person from '../../shared/images/Person.svg';

export const ListingProperty =() => {
    return (
<div className='ListingProperty'>
    <h1 className='lato-800 titleListingProperty'>Our Listing Property</h1>
    <p className='Nunito-400 sloganListingProperty'>We are recognized for exceeding client expectations and delivering great results through dedication.</p>
    <div className='PropertyList'>
    < PropertyCard image={Property_1_3} network = {'4 Network'} family = {'Family'} Bathroom ={'2 bathroom'} Bedroom = {'2 bedroom'} area = {'1200 Sq. Fit'} imgAvatar = {Person} fullname = {'Adams Justin'} />
    < PropertyCard image={Property_2_4} network = {'4 Network'} family = {'Family'} Bathroom ={'2 bathroom'} Bedroom = {'2 bedroom'} area = {'1200 Sq. Fit'} imgAvatar = {Person} fullname = {'Adams Justin'} />
    < PropertyCard image={Property_3_6} network = {'4 Network'} family = {'Family'} Bathroom ={'2 bathroom'} Bedroom = {'2 bedroom'} area = {'1200 Sq. Fit'} imgAvatar = {Person} fullname = {'Adams Justin'} />
    < PropertyCard image={Property_1_3} network = {'4 Network'} family = {'Family'} Bathroom ={'2 bathroom'} Bedroom = {'2 bedroom'} area = {'1200 Sq. Fit'} imgAvatar = {Person} fullname = {'Adams Justin'} />
    < PropertyCard image={Property_2_4} network = {'4 Network'} family = {'Family'} Bathroom ={'2 bathroom'} Bedroom = {'2 bedroom'} area = {'1200 Sq. Fit'} imgAvatar = {Person} fullname = {'Adams Justin'} />
    < PropertyCard image={Property_3_6} network = {'4 Network'} family = {'Family'} Bathroom ={'2 bathroom'} Bedroom = {'2 bedroom'} area = {'1200 Sq. Fit'} imgAvatar = {Person} fullname = {'Adams Justin'} />
</div>
</div>
    )
}