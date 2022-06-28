import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="box-border pt-[60px] mx-auto min-h-[90%] bg-surface md:min-h-[95%]">
      <Outlet />
    </div>
  )
}
