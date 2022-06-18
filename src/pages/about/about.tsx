import aline from '../../assets/aline.png'

const whiteTextStyle =
    'text-bold text-white text-5xl'
  const blackTextStyle =
    'text-black'

export default function About() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-9 bg-green p-hor sm:p-hor-sm">
      <div className="flex flex-col md:col-span-4 justify-start">
        <div className='mr-10'>
          <h1 className={whiteTextStyle}>Hi, my name</h1>
          <h1 className={whiteTextStyle}>
            is <span className={blackTextStyle}>Aline Ayumi</span>,
          </h1>
          <h1 className={whiteTextStyle}>and I am a</h1>
          <h1 className={whiteTextStyle}>
            <span className={blackTextStyle}>Software Engineer</span>.
          </h1>
        </div>
        <button
          type="button"
          className="inline-block text-white border border-white hover:bg-white hover:text-green font-medium rounded-3xl text-sm px-5 py-2.5 w-min my-10 mr-10"
        >
          <p className='whitespace-nowrap'>GET TO KNOW ME</p>
        </button>
      </div>
      <div className="flex flex-col col-span-5 w-full justify-end md:aspect-square">
        <img className="rounded-xl" src={aline} />
      </div>
    </div>
  )
}
