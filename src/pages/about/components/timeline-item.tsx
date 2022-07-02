import { useTheme } from 'contexts/theme'

interface TimelineProps {
  date: string
  title: string
  description: string
  place?: string
}

export default function TimelineItem({
  date,
  title,
  description,
  place = 'São Paulo SP - Brasil'
}: TimelineProps) {
  const theme = useTheme()

  return (
    <li className="mb-10 ml-4">
      <div
        className={`absolute -left-1.5 mt-1.5 w-3 h-3 ${
          theme.darkMode
            ? 'bg-secondaryDark border-secondaryDark'
            : 'bg-secondary border-secondary'
        } rounded-full border `}
      ></div>
      <time
        className={`mb-1 text-sm font-normal leading-none ${
          theme.darkMode ? 'text-secondaryDark' : 'text-secondary'
        }`}
      >
        {date}
      </time>
      <h3
        className={`text-lg font-semibold  ${
          theme.darkMode ? 'text-primaryDark' : 'text-primary'
        }`}
      >
        {title}
      </h3>
      <p
        className={`mb-4 text-base font-normal ${
          theme.darkMode ? 'text-secondaryDark' : 'text-secondary'
        }
        `}
      >
        {description}
      </p>
      <p
        className={`mb-4 text-base font-normal ${
          theme.darkMode ? 'text-secondaryDark' : 'text-secondary'
        }
        `}
      >
        {place}
      </p>
    </li>
  )
}
