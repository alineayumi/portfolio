import Background from './components/background'
import Greetings from './components/greetings'

export default function About() {
  return (
    <div className='flex flex-col'>
      <Greetings />
      <Background />
    </div>
  )
}
