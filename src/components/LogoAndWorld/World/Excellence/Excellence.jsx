import './Excellence.css'

export const Excellence = ({ title, select }) => {

    return (
        <div className='Excellence'>
            <p className='titleExcellence Nunito-800'>{`${title}`}</p>
            <p className='selectExcellence Nunito-400'>{`${select}`}</p>
        </div>

    )
};