import React from "react";
import {Link } from "react-router-dom";

const Navbar= ()=>{
    return (
<>
      <nav className="navbar sticky-top navbar-expand-lg bg-light" style={{     paddingTop: 0,backgroundColor: "#e3f2fd" }} >
  <div className="container-fluid" style={{ backgroundColor: "#e3f2fd" }}>
    <Link className="navbar-brand" to="/">NewsHamster</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li>
        <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle"role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{ backgroundColor: "#e3f2fd",color:"#161819",border:"none" }}>
            Categories
          </div>
          <ul className="dropdown-menu" style={{ backgroundColor: "#e3f2fd" , border:"none",fontSize:"14px"}}>
            <li><Link className="dropdown-item" to="/business">Business</Link></li>
            <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="/health">Health</Link></li>
            <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/science">Science</Link></li>
            <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
</>


    );
    }

    export default Navbar