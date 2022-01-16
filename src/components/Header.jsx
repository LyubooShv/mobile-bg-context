import React,{useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../context/current-user';
const Header = () =>{

const {currentUser,SignOut} = useContext(CurrentUserContext)
const [searchName, setSearchName] = useState('')

const handleChange = (e) =>{
    setSearchName(e.target.value)
}

    return(
        <div>
           <div className='header'><h1>Simple Cars</h1></div> 
           <div className='signInOutLink'>{currentUser ? <div onClick={SignOut}>Sign Out</div> : <Link to='/'>Sign In</Link>}</div> 
            <div className='searchInput'><input placeholder='search cars' onChange={handleChange} value={searchName}/></div>
        </div>
    )
}

export default Header