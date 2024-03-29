import './HeaderNav.css'

export const HeaderNav = ({title}) => {
    return (
      <div className='HeaderNav lato-500'>
        
          <p className='active'>{`${title}`}</p>
     
      </div>
  
  
    )
  };