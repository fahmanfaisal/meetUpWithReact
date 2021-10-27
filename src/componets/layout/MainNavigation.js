import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return <header className={classes.header}>
        <div className={classes.logo}>
            React MeetUp
        </div>
        <ul>
            <li>
                <Link to='/'>All Meet ups</Link>
            </li>
            <li>
                <Link to='/new-meetup'>Add Meet ups</Link>
            </li>
            <li>
                <Link to='/favourits'>My Favourites</Link>
            </li>
        </ul>

        </header>
}

export default MainNavigation;