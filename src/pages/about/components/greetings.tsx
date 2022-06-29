import Button from 'components/button'
import {
  textStyle,
  highlightTextStyle,
  darkTextStyle,
  darkHighlighTextStyle
} from 'utils/constants'
import { useTheme } from 'utils/theme'
import aline from '../../../assets/aline.png'

export default function Greetings() {
  const theme = useTheme()
  const _textStyle = theme.darkMode ? darkTextStyle : textStyle
  const _highlightTextStyle = theme.darkMode
    ? darkHighlighTextStyle
    : highlightTextStyle

  return (
    <div className="flex flex-col p-hor sm:p-horSm md:grid md:grid-cols-9">
      <div className="flex flex-col justify-start md:col-span-4">
        <div className="md:mr-10">
          <h1 className={_textStyle}>Hi, my name</h1>
          <h1 className={_textStyle}>
            is <span className={_highlightTextStyle}>Aline Ayumi</span>,
          </h1>
          <h1 className={_textStyle}>and I am a</h1>
          <h1 className={_textStyle}>
            <span className={_highlightTextStyle}>Software Engineer</span>.
          </h1>
        </div>
        <Button
          onClick={() => null}
          value="GET TO KNOW ME"
          isDark={theme.darkMode}
        />
      </div>
      <div className="flex flex-col col-span-5 justify-end w-full md:aspect-square">
        <img className="rounded-xl" src={aline} />
      </div>
    </div>
  )
}
