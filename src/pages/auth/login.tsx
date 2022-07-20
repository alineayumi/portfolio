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
    <section className="h-full w-full">
      <div className="p-hor sm:p-horSm flex flex-col items-center justify-center lg:grid lg:grid-cols-9">
        <div className="flex w-9/12 flex-col justify-start md:w-1/2 lg:col-span-5 lg:w-full">
          <img src={login} alt="Phone Image" className="w-full" />
        </div>
        <div className="flex w-full flex-col  justify-center px-4 lg:col-span-4">
          <form action="" onSubmit={handleSubmit}>
            {/* email input */}
            <div className="mb-6">
              <input
                type="text"
                className="text-primaryDark focus:text-secondaryDark bg-surfaceDark border-backgroundDark focus:border-tertiaryDark form-control m-0 block w-full rounded border border-solid bg-clip-padding py-2 px-4 text-xl font-normal transition ease-in-out focus:outline-none"
                placeholder="Email address"
                ref={emailRef}
                required
              />
            </div>
            {/* password input */}
            <div className="mb-6">
              <input
                type="password"
                className="text-primaryDark focus:text-secondaryDark bg-surfaceDark border-backgroundDark focus:border-tertiaryDark form-control m-0 block w-full rounded border border-solid bg-clip-padding py-2 px-4 text-xl font-normal transition ease-in-out focus:outline-none"
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </div>
            <div className="mb-6 flex items-center justify-between">
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
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
              <p className="text-primaryDark mx-4 mb-0 text-center font-semibold">
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
