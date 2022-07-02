import Button from 'components/button'
import ErrorAlert from 'components/error_alert'
import { useAuth } from 'contexts/auth'
import { useTheme } from 'contexts/theme'
import React, { FormEvent, useState } from 'react'
import welcome from '../../assets/welcome.svg'

const inputStyle =
  'block py-2 px-4 m-0 w-full text-xl font-normal text-primaryDark focus:text-secondaryDark bg-clip-padding bg-surfaceDark rounded border border-backgroundDark focus:border-tertiaryDark border-solid focus:outline-none transition ease-in-out form-control'

export default function SignUp() {
  const emailRef = React.createRef<HTMLInputElement>()
  const passwordRef = React.createRef<HTMLInputElement>()
  const passwordConfirmRef = React.createRef<HTMLInputElement>()
  const auth = useAuth()
  const theme = useTheme()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      console.log('------')
      console.log(emailRef.current?.value)
      console.log(passwordRef.current?.value)

      await auth.signup({
        email: emailRef.current?.value,
        password: passwordRef.current?.value
      })
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <section className="w-full h-full">
      <div className="flex flex-col justify-center items-center p-hor sm:p-horSm lg:grid lg:grid-cols-9">
        <div className="flex flex-col justify-center md:w-1/2 lg:col-span-5 lg:w-full">
          <img src={welcome} alt="Phone Image" className=" w-full" />
        </div>
        {error && (
          <ErrorAlert
            title="Holy Smokes!"
            description={error}
            onClose={() => setError('')}
            isDark={theme.darkMode}
          />
        )}
        <div className="flex flex-col justify-center  px-4 w-full lg:col-span-4">
          <form action="" onSubmit={handleSubmit}>
            {/* email input */}
            <div className="mb-6">
              <input
                type="text"
                name="email"
                id="email"
                className={inputStyle}
                placeholder="Email address"
                ref={emailRef}
                required
              />
            </div>
            {/* password input */}
            <div className="mb-6">
              <input
                type="password"
                name="password"
                id="password"
                className={inputStyle}
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </div>

            {/* password confirmation */}
            <div className="mb-6">
              <input
                type="password"
                name="password-confirm"
                id="password-confirm"
                className={inputStyle}
                placeholder="Password"
                ref={passwordConfirmRef}
                required
              />
            </div>

            <Button
              value="SIGN UP"
              disabled={loading}
              onClick={() => null}
              isExpanded={true}
              type="submit"
            />
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
