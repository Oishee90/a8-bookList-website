import { NavLink } from "react-router-dom";



const Header = () => {
  const links = <>
  <li className="mr-5 text-lg font-work  font-semibold text-gray-500" id="sidebar"><NavLink to={"/"}>Home</NavLink></li>
  <li className="mr-5 text-lg font-work font-semibold text-gray-500 "id="sidebar"><NavLink to={"/listedBooks"}>Listed Books</NavLink></li>
  <li className="mr-5 text-lg font-work font-semibold text-gray-500 "id="sidebar"><NavLink to={"/pagestoRead"}>Pages to Read </NavLink></li>
  <li className="mr-5 text-lg font-work font-semibold text-gray-500 "id="sidebar"><NavLink to={"/about"}>About </NavLink></li>
 
</>
    return (
        <div className="navbar bg-base-100 container mx-auto mt-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-[#131313]  text-2xl font-work font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-3 items-center mr-5">
  <button className="btn rounded-lg text-white font-work font-semibold hover:bg-green-900 text-lg bg-green-600">Sign In</button>
  <button className="btn rounded-lg text-white font-work font-semibold hover:bg-blue-500 text-lg bg-[#59C6D2]"> Sign Up </button>
  </div>
</div>
    );
};

export default Header;