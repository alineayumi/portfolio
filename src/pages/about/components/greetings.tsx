import Button from 'components/button';
import { textStyle, highlightTextStyle } from 'utils/constants';
import aline from '../../../assets/aline.png'

export default function Greetings() {
    return (
    <div className="flex flex-col md:grid md:grid-cols-9 p-hor sm:p-hor-sm">
      <div className="flex flex-col md:col-span-4 justify-start">
        <div className="md:mr-10">
          <h1 className={textStyle}>Hi, my name</h1>
          <h1 className={textStyle}>
            is <span className={highlightTextStyle}>Aline Ayumi</span>,
          </h1>
          <h1 className={textStyle}>and I am a</h1>
          <h1 className={textStyle}>
            <span className={highlightTextStyle}>Software Engineer</span>.
          </h1>
        </div>
        <Button onClick={() => null} value='GET TO KNOW ME' isDark={false}/>
      </div>
      <div className="flex flex-col col-span-5 w-full justify-end md:aspect-square">
        <img className="rounded-xl" src={aline} />
      </div>
    </div>);
}