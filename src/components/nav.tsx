import React, { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'contexts/theme'
import ThemeSwitcher from './theme-switcher'
import { useAuth } from 'contexts/auth'

export default function Nav() {
  const unselectedNavLinkStyle = 'block py-2 pr-4 pl-3 md:p-0 hover:underline'
  const selectedNavLinkStyle = 'block py-2 pr-4 pl-3 md:p-0 font-bold text-lg'
  const unselectedDropdown = 'w-full hover:underline'
  const selectedDropdown = ' w-full font-bold'
  const [showMenu, setMenu] = useState(false)
  const dropdownRef = useRef(null)
  const theme = useTheme()
  const auth = useAuth()

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
      className={`fixed top-0 z-10 flex h-[60px] w-full flex-row items-center justify-between py-2.5 px-3 ${
        theme.darkMode
          ? 'bg-surfaceDark text-secondaryDark'
          : 'bg-surface text-secondary'
      } sm:px-4`}
    >
      <div className="mr-8 flex w-full flex-row justify-between">
        {/* <NavLink to="/" className="flex items-center">
          <p className={`font-mono font-bold`}>Aline Ayumi</p>
        </NavLink> */}
        <NavLink
          to="/"
          className="flex items-center"
          onClick={() => auth.logout()}
        >
          <p className={`font-mono font-bold`}>Aline Ayumi</p>
        </NavLink>
        <ThemeSwitcher />
      </div>
      <button
        onClick={() => setMenu(!showMenu)}
        className={`inline-flex items-center rounded-lg py-2.5 px-4 text-center text-sm font-medium focus:outline-none md:hidden ${
          theme.darkMode ? 'focus:bg-black' : 'focus:bg-white'
        }`}
      >
        <svg
          className="h-6 w-6"
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
          className="hidden h-6 w-6"
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
        className={`absolute top-[70px] right-[10px] z-10 ${
          showMenu ? 'block' : 'hidden'
        } w-44 rounded shadow ${
          theme.darkMode ? 'bg-surfaceDark' : 'bg-surface'
        }`}
      >
        <ul className="my-4 flex flex-col items-start space-y-4 px-2">
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
            to="waves"
            onClick={() => setMenu(false)}
            className={({ isActive }) =>
              isActive ? selectedDropdown : unselectedDropdown
            }
            aria-current="page"
          >
            <li>waves</li>
          </NavLink>
          {/* <NavLink
            to="messages"
            onClick={() => setMenu(false)}
            className={({ isActive }) =>
              isActive ? selectedDropdown : unselectedDropdown
            }
            aria-current="page"
          >
            <li>messages</li>
          </NavLink> */}
          <div className="flex justify-center"></div>
        </ul>
      </div>
      <div className="hidden w-auto md:block md:w-auto">
        <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
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
            {/* <NavLink
              to="messages"
              className={({ isActive }) =>
                isActive ? selectedNavLinkStyle : unselectedNavLinkStyle
              }
            >
              messages
            </NavLink> */}
            <NavLink
              to="waves"
              className={({ isActive }) =>
                isActive ? selectedNavLinkStyle : unselectedNavLinkStyle
              }
            >
              waves
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
