import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from 'utils/theme'

export default function Layout() {
  const theme = useTheme()

  return (
    <div
      className={`box-border pt-[60px] mx-auto min-h-[90%] md:min-h-[95%] ${
        theme.darkMode ? 'bg-backgroundDark' : 'bg-background'
      } md:min-h-[95%`}
    >
      <Outlet />
    </div>
  )
}
