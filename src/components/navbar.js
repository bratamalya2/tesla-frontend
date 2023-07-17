function Navbar({ handleShow }) {
  return (
    <nav className="w-90 h-[75px] list-none flex flex-nowrap justify-around items-center sticky top-0 z-10 bg-[#afacac]">
      <li
        className="sm:hidden  text-amber-300 hover:text-white cursor-pointer absolute left-0 pl-10"
        onClick={handleShow}
      >
        <span className="material-symbols-outlined">menu</span>
      </li>
      <li className="text-white font-bold pl-10 my-2">SPACE X</li>
      <li className="hidden sm:block text-amber-300 hover:text-white hover:underline hover:font-bold cursor-pointer">
        Home
      </li>
      <li className="hidden sm:block text-amber-300 hover:text-white hover:underline hover:font-bold cursor-pointer">
        Careers
      </li>
      <li className="hidden sm:block text-amber-300 hover:text-white hover:underline hover:font-bold cursor-pointer">
        Updates
      </li>
      <li className="hidden sm:block text-amber-300 hover:text-white hover:underline hover:font-bold cursor-pointer">
        Shop
      </li>
      <li className="hidden sm:block text-amber-300 hover:text-white hover:underline hover:font-bold cursor-pointer">
        About Us
      </li>
    </nav>
  );
}

export default Navbar;
