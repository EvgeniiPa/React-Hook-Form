import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <header className="flex items-center h-16 bg-yellow-500">
        <nav className="flex items-center justify-between  w-full">
          <NavLink className="hover:text-red-700" to="/">
            useForm Page
          </NavLink>
          <NavLink className="hover:text-red-700" to="/UseController">
            useController Page
          </NavLink>
          <NavLink className="hover:text-red-700" to="/UseFormContext">
            useFormContext Page
          </NavLink>
          <NavLink className="hover:text-red-700" to="/UseFormWatch">
            useFormWatch Page
          </NavLink>
          <NavLink className="hover:text-red-700" to="/UseFormState">
            useFormState Page
          </NavLink>
          <NavLink className="hover:text-red-700" to="/UseFormFieldArray">
            useFormFieldArray Page
          </NavLink>
        </nav>
      </header>
      <Outlet />
      <footer className="bottom-0 bg-yellow-500 w-full text-center h-14 flex items-center justify-center mt-12">
        <div>By Evgenii Pasechnickov ⓒ</div>
      </footer>
    </div>
  );
}
