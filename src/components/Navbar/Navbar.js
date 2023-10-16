import React from 'react';
import styles from './Navbar.module.css';
import { IconHomeCheck } from '@tabler/icons-react';
import { Box } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import LoginModal from '../LoginModal/LoginModal';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a
        className="navbar-brand d-flex align-items-center mr-4"
        href="/"
        style={{ fontWeight: '600' }}
      >
        <Box
          className="d-inline-block align-top p-2 mx-2"
          borderRadius={'full'}
          bg={'#3A0CA3'}
        >
          <IconHomeCheck color="white" />
        </Box>
        Logo
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className={`navbar-nav mr-auto ${styles.navItemContainer}`}>
          <NavLink className="nav-link my-2" to="/">
            <li className="nav-item mx-2">
              Home <span className="sr-only">(current)</span>
            </li>
          </NavLink>
          <NavLink className="nav-link my-2" to="/about">
            <li className="nav-item mx-2">About</li>
          </NavLink>
          <NavLink className="nav-link my-2" to="/products">
            <li className="nav-item mx-2">Products</li>
          </NavLink>
          <NavLink className="nav-link my-2" to="/services">
            <li className="nav-item mx-2">Services</li>
          </NavLink>
          <NavLink className="nav-link my-2" to="/blogs">
            <li className="nav-item mx-2">Blogs</li>
          </NavLink>
        </ul>
        <a
          className={`d-flex align-items-center justify-content-center mr-4 my-3 ${styles.navItemContainer}`}
          href="/"
          style={{ textDecoration: 'none', color: 'inherit', margin: '0 auto' }}
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <Box className="d-inline-block align-top mx-2">
            <BiUserCircle size={25} />
          </Box>
          Login/Register
        </a>
      </div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body p-0">
              <LoginModal />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
