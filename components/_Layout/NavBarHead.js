import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Link from 'next/link';

const NavBarHead = props => {
  return (
    <>
      <nav className="navbar navbar-default navbar-sticky bootsnav">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <i className="fa fa-bars" />
            </button>
            <a className="navbar-brand" href="index.html"><img src="img/logo.png" className="logo" alt="" /></a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/auth/login">Login</Link>
              </li>
              <li>
                <Link href="/job/list">Job List</Link>
              </li>
              <li>
                <Link href="/job/detail">Job Detail</Link>
              </li>
              <li>
                <Link href="/resume">Resume</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

NavBarHead.propTypes = {

};

export default NavBarHead;