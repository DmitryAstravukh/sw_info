import React from 'react';
import s from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  /**
   * let itemClassName = s.todo_item;
    if(important) itemClassName = [itemClassName, s.important].join(' ');
   */

  return(
    <header>
      <nav className="navbar navbar-expand-lg">

        <Link className={`navbar-brand ${s.project_name}`} to="/">Star Wars Info</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className={s.burger}><div></div><div></div><div></div></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className='nav-item'>
              <Link className="nav-link" to="/people/">People</Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/planets/">Planets</Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/starships/">Starships</Link>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  );
}

export default Header;