//type rfc for react fn based component line 2-9

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
//props kya hai apne  components jo bnaye for ex navbar usme kuch cheeze pass krna chahte hai as variable
//line18,22 to use router jha a hai wha link to use krenge 
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
         </li>
          
        </ul>
        {/*<form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
  </form> */}
  <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" aria-checked="false" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}
//PropTypes k p small as camelcase
Navbar.propTypes = {
  title: PropTypes.string.isRequired,//undefined n ho dalna hi hai title
  aboutText: PropTypes.string
}
// konsi value suse kre agar kuch pass nhi kiya jaye to is default props
Navbar.defaultProps ={
  title: "set title here",
  aboutText: "About"
};