import './StarCard.css';
import StarCardGrey from '../../../../shared/images/StarCardGrey.svg'
import StarCardLigth from '../../../../shared/images/StarCardLight.svg'

export const StarCard = ({ rate }) => {
    const Stars = ['', '', '', '', ''];

    const LigthStar = Stars.map((item, index) => {
        if (rate > (index)) {
            return (
                <img src={StarCardLigth} />
            )
        }
        return (
            <img src={StarCardGrey} />
        )
    }
    )
    return (
        LigthStar
    )
}