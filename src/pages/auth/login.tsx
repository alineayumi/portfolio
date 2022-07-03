import Button from 'components/button'
import { useAuth } from 'contexts/auth'
import React, { FormEvent, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import login from '../../assets/login.svg'

export default function Login() {
  const emailRef = React.createRef<HTMLInputElement>()
  const passwordRef = React.createRef<HTMLInputElement>()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const auth = useAuth()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await auth.login({
        email: emailRef.current?.value,
        password: passwordRef.current?.value
      })
      console.log('log in success')
      navigate('/')
    } catch {
      setError('Failed to log in')
      console.log('log in error')
    }

    setLoading(false)
  }

  return (
    <section className="w-full h-full">
      <div className="flex flex-col justify-center items-center p-hor sm:p-horSm lg:grid lg:grid-cols-9">
        <div className="flex flex-col justify-start w-9/12 md:w-1/2 lg:col-span-5 lg:w-full">
          <img src={login} alt="Phone Image" className="w-full" />
        </div>
        <div className="flex flex-col justify-center  px-4 w-full lg:col-span-4">
          <form action="" onSubmit={handleSubmit}>
            {/* email input */}
            <div className="mb-6">
              <input
                type="text"
                className="block py-2 px-4 m-0 w-full text-xl font-normal text-primaryDark focus:text-secondaryDark bg-clip-padding bg-surfaceDark rounded border border-backgroundDark focus:border-tertiaryDark border-solid focus:outline-none transition ease-in-out form-control"
                placeholder="Email address"
                ref={emailRef}
                required
              />
            </div>
            {/* password input */}
            <div className="mb-6">
              <input
                type="password"
                className="block py-2 px-4 m-0 w-full text-xl font-normal text-primaryDark focus:text-secondaryDark bg-clip-padding bg-surfaceDark rounded border border-backgroundDark focus:border-tertiaryDark border-solid focus:outline-none transition ease-in-out form-control"
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <a
                href="#!"
                className="text-secondaryDark hover:text-tertiaryDark focus:text-primaryDark active:text-primaryDark transition duration-200 ease-in-out"
              >
                Forgot password?
              </a>
            </div>
            <Button
              value="LOGIN"
              disabled={loading}
              onClick={() => null}
              isExpanded={true}
              type="submit"
            />
            <div className="flex before:flex-1 after:flex-1 items-center my-4 before:mt-0.5 after:mt-0.5 before:border-t after:border-t before:border-gray-300 after:border-gray-300">
              <p className="mx-4 mb-0 font-semibold text-center text-primaryDark">
                NEW HERE ?
              </p>
            </div>
            <NavLink to="/signup">
              <Button value="SIGNUP" onClick={() => null} isExpanded={true} />
            </NavLink>
          </form>
        </div>
      </div>
    </section>
  )
}
