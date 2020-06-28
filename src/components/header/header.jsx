import React from 'react';
import s from './header.module.css';

const Header = () => {
  /**
   * let itemClassName = s.todo_item;
    if(important) itemClassName = [itemClassName, s.important].join(' ');
   */

  let navItemClass = `nav-item`;
  return(
    <header>
      <nav className="navbar navbar-expand-lg">

        <a className={`navbar-brand ${s.project_name}`} href="#">Star Wars Info</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={`${navItemClass} active`}>
              <a className="nav-link" href="#">People</a>
            </li>
            <li className={`${navItemClass}`}>
              <a className="nav-link" href="#">Planets</a>
            </li>
            <li className={`${navItemClass}`}>
              <a className="nav-link" href="#">Starships</a>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  );
}

export default Header;