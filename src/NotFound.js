import {Link} from 'react-router-dom';

const NotFound = () => {
    return (  
        <div className='NotFound' align="center">
            <h2>Sorry</h2>
            <p>This page does not exist...</p>
            <Link to='/'>Click to go back to homepage</Link>
        </div>
    );
}
 
export default NotFound;