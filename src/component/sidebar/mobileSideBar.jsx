import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

import Offcanvas from 'react-bootstrap/Offcanvas';
import SideBar from './sidebar';

function MobileSideBar({show,setShow}) {


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
  

   

      <Offcanvas show={show} placement={'end'} onHide={handleClose} >
    
        <Offcanvas.Body>
         <SideBar setShowOffCanvas={setShow} open={true} setShow={setShow}  mobile/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MobileSideBar;