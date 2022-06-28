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
  return (
    <li className="mb-10 ml-4">
      <div className="absolute -left-1.5 mt-1.5 w-3 h-3 bg-gray-700 rounded-full border border-gray-900"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-500">
        {date}
      </time>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-4 text-base font-normal text-gray-400">{description}</p>
      <p className="mb-4 text-base font-normal text-gray-400">{place}</p>
    </li>
  )
}
