import { useTheme } from 'utils/theme'
import { BsMoonFill, BsMoon, BsSunFill, BsSun } from 'react-icons/bs'

export default function ThemeSwitcher() {
  const theme = useTheme()
  return (
    <div className="flex flex-row justify-center h-6">
      <button
        className="content-center pr-2 text-white"
        onClick={theme.setDarkMode}
      >
        {theme.darkMode ? <BsMoonFill /> : <BsMoon />}
      </button>
      <label
        htmlFor="default-toggle"
        className="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="default-toggle"
          className="peer sr-only"
          checked={!theme.darkMode}
          onClick={theme.toggleDarkMode}
        />
        <div className="peer after:absolute after:top-[2px] after:left-[2px] w-11 after:w-5 h-6 after:h-5 after:content-[''] after:bg-white bg-gray-700 peer-checked:bg-gray-400 rounded-full after:rounded-full  after:transition-all peer-checked:after:translate-x-full"></div>
      </label>
      <button className="pl-2 text-white" onClick={theme.setLightMode}>
        {theme.darkMode ? <BsSun /> : <BsSunFill />}
      </button>
    </div>
  )
}
