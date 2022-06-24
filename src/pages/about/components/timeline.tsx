import TimelineItem from './timeline_item'

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
    title: 'Started Graduation of Civil Engeneering',
    description: 'Polytechnic School of the University of São Paulo',
    date: 'January 2011',
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
    title: 'Double Degree in Architecture',
    description: 'Architecture and Urbanism - University of São Paulo',
    date: 'January 2015 - July 2016',
    place: null,
    type: 'education'
  },
  {
    title: 'Civil Engeneering Internship',
    description: 'FT Oyamada',
    date: 'August 2015 - July 2016',
    place: null,
    type: 'work'
  },
  {
    title: 'Transport Planning Internship',
    description: 'LOGIT',
    date: 'July 2016 - December 2017',
    place: null,
    type: 'work'
  },
  {
    title: 'Graduated in Bachelor Degree in Civil Engeneering',
    description: 'Polytechnic School of the University of São Paulo',
    date: 'December 2017',
    place: null,
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
    title: 'Software Developler Program',
    description: '42 Silicon Valley',
    date: 'January 2020 - November 2021',
    place: 'Fremont CA - United States',
    type: 'education'
  },
  {
    title: 'Mobile Developer Internship',
    description: 'The Swim App',
    date: 'August 2020 - August 2021',
    place: 'San Francisco CA - United States',
    type: 'work'
  },
  {
    title: 'Mobile Developer',
    description: 'Kenlo',
    date: 'July 2021 - January 2022',
    place: null,
    type: 'work'
  },
  {
    title: 'Mobile Developer',
    description: 'Unico Idtech',
    date: 'January 2022 - Present',
    place: null,
    type: 'work'
  }
]
