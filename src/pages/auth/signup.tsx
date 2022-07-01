import Button from 'components/button'
import welcome from '../../assets/welcome.svg'

export default function SignUp() {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col justify-center items-center p-hor sm:p-horSm lg:grid lg:grid-cols-9">
        <div className="flex flex-col justify-center md:w-1/2 lg:col-span-5 lg:w-full w:9/12">
          <img src={welcome} alt="Phone Image" className=" w-full" />
        </div>
        <div className="flex flex-col justify-center  px-4 w-full lg:col-span-4">
          <form action="">
            {/* email input */}
            <div className="mb-6">
              <input
                type="text"
                className="block py-2 px-4 m-0 w-full text-xl font-normal text-primaryDark focus:text-secondaryDark bg-clip-padding bg-surfaceDark rounded border border-backgroundDark focus:border-tertiaryDark border-solid focus:outline-none transition ease-in-out form-control"
                placeholder="Email address"
              />
            </div>
            {/* password input */}
            <div className="mb-6">
              <input
                type="password"
                className="block py-2 px-4 m-0 w-full text-xl font-normal text-primaryDark focus:text-secondaryDark bg-clip-padding bg-surfaceDark rounded border border-backgroundDark focus:border-tertiaryDark border-solid focus:outline-none transition ease-in-out form-control"
                placeholder="Password"
              />
            </div>

            <Button value="SIGNUP" onClick={() => null} isExpanded={true} />
            <div className="flex before:flex-1 after:flex-1 items-center my-4 before:mt-0.5 after:mt-0.5 before:border-t after:border-t before:border-gray-300 after:border-gray-300">
              <p className="mx-4 mb-0 font-semibold text-center text-primaryDark">
                ALREADY SIGNED UP ?
              </p>
            </div>
            <Button value="LOGIN" onClick={() => null} isExpanded={true} />
          </form>
        </div>
      </div>
    </section>
  )
}
