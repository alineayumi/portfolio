import { darkTextStyle, textStyle } from 'utils/constants'
import Timeline from './timeline'
import { useState } from 'react'
import Button from 'components/button'
import { useTheme } from 'contexts/theme'

export default function Background() {
  const [type, setType] = useState('all')
  const theme = useTheme()

  return (
    <div className="flex flex-col p-hor sm:p-horSm md:grid md:grid-cols-2">
      <div>
        <h1 className={theme.darkMode ? darkTextStyle : textStyle}>
          BACKGROUND
        </h1>
        <div className="flex flex-row">
          <Button
            value="ALL"
            onClick={() => setType('all')}
            isDark={theme.darkMode}
            isHighlight={type === 'all'}
          />
          <Button
            value="EDUCATION"
            onClick={() => setType('education')}
            isDark={theme.darkMode}
            isHighlight={type === 'education'}
          />
          <Button
            value="WORK"
            onClick={() => setType('work')}
            isDark={theme.darkMode}
            isHighlight={type === 'work'}
          />
        </div>
      </div>
      <Timeline type={type} />
    </div>
  )
}
