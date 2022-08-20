import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const logout = () => {
      signOut(auth);
    };
   const navBar = (
     <>
       <li>
         <Link to="/">Home</Link>
       </li>
       <li>
         <Link to="/Programs">Programs</Link>
       </li>
       <li>
         <Link to="/Courses">Courses</Link>
       </li>
       <li>
         <Link to="/Contact">Contact Us</Link>
       </li>
     </>
   );
  return (
    <div>
      <div class="navbar bg-primary text-white">
        <div class="navbar-start">
          <div class="dropdown ">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
            >
              {navBar}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-3xl">Ed Tech</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{navBar}</ul>
        </div>
        <div class="navbar-end">
          {user ? (
            <a onClick={logout} href="/" class="btn bg-accent text-white">
              Sign Out
            </a>
          ) : (
            <a href="/Login" class="btn bg-accent text-white">
              Log in
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;