import './NetWork.css'

export const NetWork = ({image, className}) => {
    return(
        <div className={`NetWorkCircle ${className} `}>
            <img className='NetWorkImg' src={image} width={14} height={14}/>

        </div>

    )
}