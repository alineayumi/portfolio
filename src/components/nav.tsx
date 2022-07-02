import React, { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'contexts/theme'
import ThemeSwitcher from './theme-switcher'

export default function Nav() {
  const unselectedNavLinkStyle = 'block py-2 pr-4 pl-3 md:p-0 hover:underline'
  const selectedNavLinkStyle = 'block py-2 pr-4 pl-3 md:p-0 font-bold text-lg'
  const unselectedDropdown = 'w-full hover:underline'
  const selectedDropdown = ' w-full font-bold'
  const [showMenu, setMenu] = useState(false)
  const dropdownRef = useRef(null)
  const theme = useTheme()

  // logic for dropdown menu (close the dropdown when user clicks outside of it)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMenu(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }
  useOutsideAlerter(dropdownRef)

  return (
    <nav
      className={`flex fixed top-0 z-10 flex-row justify-between items-center py-2.5 px-3 w-full h-[60px] ${
        theme.darkMode
          ? 'bg-surfaceDark text-secondaryDark'
          : 'bg-surface text-secondary'
      } sm:px-4`}
    >
      <div className="flex flex-row justify-between mr-8 w-full">
        <NavLink to="/" className="flex items-center">
          <p className={`font-mono font-bold`}>Aline Ayumi</p>
        </NavLink>
        <ThemeSwitcher />
      </div>
      <button
        onClick={() => setMenu(!showMenu)}
        className={`inline-flex items-center py-2.5 px-4 text-sm font-medium text-center rounded-lg focus:outline-none md:hidden ${
          theme.darkMode ? 'focus:bg-black' : 'focus:bg-white'
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        <svg
          className="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        ref={dropdownRef}
        className={`absolute z-10 top-[70px] right-[10px] ${
          showMenu ? 'block' : 'hidden'
        } rounded shadow w-44 ${
          theme.darkMode ? 'bg-surfaceDark' : 'bg-surface'
        }`}
      >
        <ul className="flex flex-col items-start px-2 my-4 space-y-4">
          <NavLink
            to=""
            onClick={() => setMenu(false)}
            className={({ isActive }) =>
              isActive ? selectedDropdown : unselectedDropdown
            }
            aria-current="page"
          >
            <li>about</li>
          </NavLink>
          <NavLink
            to="portfolio"
            onClick={() => setMenu(false)}
            className={({ isActive }) =>
              isActive ? selectedDropdown : unselectedDropdown
            }
          >
            <li>portfolio</li>
          </NavLink>
          <NavLink
            to="contact"
            onClick={() => setMenu(false)}
            className={({ isActive }) =>
              isActive ? selectedDropdown : unselectedDropdown
            }
          >
            <li>contact</li>
          </NavLink>
          <NavLink
            to="messages"
            onClick={() => setMenu(false)}
            className={({ isActive }) =>
              isActive ? selectedDropdown : unselectedDropdown
            }
            aria-current="page"
          >
            <li>messages</li>
          </NavLink>
          <div className="flex justify-center"></div>
        </ul>
      </div>
      <div className="hidden w-auto md:block md:w-auto">
        <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:space-x-8 md:text-sm md:font-medium">
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? selectedNavLinkStyle : unselectedNavLinkStyle
              }
              aria-current="page"
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="portfolio"
              className={({ isActive }) =>
                isActive ? selectedNavLinkStyle : unselectedNavLinkStyle
              }
            >
              portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? selectedNavLinkStyle : unselectedNavLinkStyle
              }
            >
              contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="messages"
              className={({ isActive }) =>
                isActive ? selectedNavLinkStyle : unselectedNavLinkStyle
              }
            >
              messages
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
