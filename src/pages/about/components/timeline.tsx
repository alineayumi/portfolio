import TimelineItem from './timeline_item'

export default function Timeline() {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <TimelineItem
        title="Started Graduation of Civil Engeneering"
        description="Polytechnic School of the University of São Paulo"
        date="January 2011"
        place="São Paulo - Brazil"
      />
      <TimelineItem
        title="Production Assistant"
        description="Châteraisé Natural Sweets and Gifts"
        date="December 2011 - March 2012"
        place="Yamanashi - Japan"
      />
      <TimelineItem
        title="Civil Engeneering Internship"
        description="FT Oyamada"
        date="August 2015 - July 2016"
        place="São Paulo - Brazil"
      />
      <TimelineItem
        title="Transport Planning Internship"
        description="LOGIT"
        date="July 2016 - December 2017"
        place="São Paulo - Brazil"
      />
      <TimelineItem
        title="Graduated in Bachelor Degree in Civil Engeneering"
        description="Polytechnic School of the University of São Paulo"
        date="December 2017"
        place="São Paulo - Brazil"
      />
      <TimelineItem
        title="Transport Planning Analyst"
        description="LOGIT"
        date="January 2018 - October 2019"
        place="São Paulo - Brazil"
      />
      <TimelineItem
        title="Started Software Developler Program"
        description="42 Silicon Valley"
        date="January 2020"
        place="Fremont CA - United States"
      />
      <TimelineItem
        title="Mobile Developer Internship"
        description="The Swim App"
        date="August 2020 - August 2021"
        place="San Francisco CA - United States"
      />
      <TimelineItem
        title="Full-stack Developer Internship"
        description="Aion"
        date="March 2021 - July 2021"
        place="São Paulo - Brasil"
      />
      <TimelineItem
        title="Mobile Developer"
        description="Kenlo"
        date="July 2021 - January 2022"
        place="Campinas - Brasil"
      />
      <TimelineItem
        title="Mobile Developer"
        description="Unico IDtech"
        date="January 2022 - Present"
        place="São Paulo - Brasil"
      />
    </ol>
  )
}
