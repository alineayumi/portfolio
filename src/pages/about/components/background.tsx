import { textStyle } from 'utils/constants'
import Timeline from './timeline'
import { useState } from 'react'
import Button from 'components/button'

export default function Background() {
  const [type, setType] = useState('all')

  return (
    <div className="flex flex-col p-hor sm:p-horSm md:grid md:grid-cols-2">
      <div>
        <h1 className={textStyle}>BACKGROUND</h1>
        <div className="flex flex-row">
          <Button
            value="ALL"
            onClick={() => setType('all')}
            isDark={false}
            isHighlight={type === 'all'}
          />
          <Button
            value="EDUCATION"
            onClick={() => setType('education')}
            isDark={false}
            isHighlight={type === 'education'}
          />
          <Button
            value="WORK"
            onClick={() => setType('work')}
            isDark={false}
            isHighlight={type === 'work'}
          />
        </div>
      </div>
      <Timeline type={type} />
    </div>
  )
}
