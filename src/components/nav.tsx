import React, { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  const unselectedNavLinkStyle =
    'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent text-white md:p-0 hover:underline'
  const selectedNavLinkStyle =
    'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent text-black md:p-0'
  const unselectedDropdown = 'text-white w-full hover:underline'
  const selectedDropdown = 'text-secondary w-full'
  const [showMenu, setMenu] = useState(false)
  const dropdownRef = useRef(null)

  // logic for dropdown menu (close the dropdown when user clicks outside of it)
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
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
    <nav className="flex flex-row fixed w-full top-0 justify-between items-center px-3 sm:px-4 py-2.5 bg-green h-[60px]">
      <NavLink to="/" className="flex items-center">
        <p className="font-mono font-bold ">Aline Ayumi</p>
      </NavLink>
      <button
        onClick={() => setMenu(!showMenu)}
        className="md:hidden text-white bg-green-100 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
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
        } rounded shadow w-44 bg-green`}
      >
        <ul className="flex flex-col items-start my-4 space-y-4 px-2">
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
            to="work"
            onClick={() => setMenu(false)}
            className={({ isActive }) =>
              isActive ? selectedDropdown : unselectedDropdown
            }
          >
            <li>work</li>
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
        </ul>
      </div>
      <div className="hidden w-auto md:block md:w-auto">
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
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
              to="work"
              className={({ isActive }) =>
                isActive ? selectedNavLinkStyle : unselectedNavLinkStyle
              }
            >
              work
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
        </ul>
      </div>
    </nav>
  )
}
