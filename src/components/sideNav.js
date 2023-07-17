import Offcanvas from "react-bootstrap/Offcanvas";

function SideNav({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose} className="bg-dark">
      <Offcanvas.Header closeButton closeVariant="white">
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body as="nav">
        <li className="text-orange-500 font-bold pl-10 my-2">SPACE X</li>
        <li className="text-amber-300 active:text-white active:font-bold cursor-pointer pl-10 my-2">
          Home
        </li>
        <li className="text-amber-300 active:text-white active:font-bold cursor-pointer pl-10 my-2">
          Careers
        </li>
        <li className="text-amber-300 active:text-white active:font-bold cursor-pointer pl-10 my-2">
          Updates
        </li>
        <li className="text-amber-300 active:text-white active:font-bold cursor-pointer pl-10 my-2">
          Shop
        </li>
        <li className="text-amber-300 active:text-white active:font-bold cursor-pointer pl-10 my-2">
          About Us
        </li>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SideNav;
