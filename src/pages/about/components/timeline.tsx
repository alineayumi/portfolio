import TimelineItem from './timeline-item'

interface TimelineProps {
  type: string
}

export default function Timeline({ type }: TimelineProps) {
  return (
    <div>
      <ol className="relative border-l border-gray-700">
        {experiences.map((exp, index) => {
          if (exp.type === type || type == 'all') {
            return (
              <TimelineItem
                title={exp.title}
                description={exp.description}
                date={exp.date}
                place={exp.place === null ? undefined : exp.place}
                key={index}
              />
            )
          }
        })}
      </ol>
    </div>
  )
}

const experiences = [
  {
    title: 'Mobile Developer',
    description: 'Unico IDtech',
    date: 'January 2022 - Present',
    place: null,
    type: 'work'
  },
  {
    title: 'Mobile Developer',
    description: 'Kenlo',
    date: 'July 2021 - January 2022',
    place: 'Campinas SP - Brasil',
    type: 'work'
  },
  {
    title: 'Full-stack Developer Intern',
    description: 'Aion Growth Solution',
    date: 'March 2021 - July 2021',
    place: 'Campinas SP - Brasil',
    type: 'work'
  },
  {
    title: 'Mobile Developer Intern',
    description: 'The Swim App',
    date: 'August 2020 - August 2021',
    place: 'San Francisco CA - United States',
    type: 'work'
  },
  {
    title: 'Software Developer Program',
    description: '42 Silicon Valley',
    date: 'January 2020 - November 2021',
    place: 'Fremont CA - United States',
    type: 'education'
  },
  {
    title: 'Transport Planning Analyst',
    description: 'LOGIT',
    date: 'January 2018 - October 2019',
    place: null,
    type: 'work'
  },
  {
    title: 'Graduated in Bachelor Degree in Civil Engineering',
    description: 'Polytechnic School of the University of São Paulo',
    date: 'December 2017',
    place: null,
    type: 'education'
  },
  {
    title: 'Transport Planning Intern',
    description: 'LOGIT',
    date: 'July 2016 - December 2017',
    place: null,
    type: 'work'
  },
  {
    title: 'Civil Engineering Intern',
    description: 'FT Oyamada',
    date: 'August 2015 - July 2016',
    place: null,
    type: 'work'
  },
  {
    title: 'Double Degree in Architecture',
    description: 'Architecture and Urbanism - University of São Paulo',
    date: 'January 2015 - July 2016',
    place: null,
    type: 'education'
  },
  {
    title: 'Production Assistant',
    description: 'Châteraisé Natural Sweets and Gifts',
    date: 'December 2011 - March 2012',
    place: 'Yamanashi - Japan',
    type: 'work'
  },
  {
    title: 'Started Graduation of Civil Engineering',
    description: 'Polytechnic School of the University of São Paulo',
    date: 'January 2011',
    place: null,
    type: 'education'
  }
]
