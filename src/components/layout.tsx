import React  from 'react';
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="mx-auto pt-[60px] ">
      <Outlet />
    </div>
  );
}