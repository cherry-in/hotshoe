import React from 'react'
import Footer from '../../Component/Footer';
import Menu from '../../Component/Menu';
import "./index.scss";

function Resevation() {
  return (
    <div className="d-flex flex-column h-100 justify-content-between">
      <div>
        <Menu />
        <div></div>
      </div>
      <Footer />
    </div>
  )
}

export default Resevation