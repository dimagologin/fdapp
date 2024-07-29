import { useState } from "react";
import { generateSingleProxy } from "./api";
import { signin } from "./auth";
import { useUser } from "./state";

export function CreateAccount() {
  const user = useUser();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMesage] = useState("")

  if (user) {
    return <div className="mt-4 pb-4 border-b border-gray-200">
      <span className="font-medium">{user.email}</span>
    </div>
  }

  return <div className="">

    <h2 className={"mt-4 mb-4 text-lg "}>
      Create account and checkout
    </h2>

    <p className="my-4 text-gray-500 text-sm">
      Your account stores credit balance info and proxy list settings.
    </p>

    <div>
      <div className="mt-4">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email
        </label>
        <input
          id="email"
          value={email}
          onChange={e => {
            setErrorMesage("");
            setEmail(e.target.value);
          }}
          name="email"
          type="email"
          placeholder="name@example.com"
          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"

          value={password}
          onChange={e => {
            setErrorMesage("");
            setPassword(e.target.value);
          }}
          placeholder="***"
          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>

      {errorMessage &&
        <div className="p-2 my-2 bg-red-100 border-red-300 text-red-700 rounded">
          {errorMessage}
        </div>
      }

      <div className="pt-4">
        <button
          className="py-1.5 px-4 border bg-indigo-600 text-indigo-100 rounded-lg font-semibold"
          onClick={async (e) => {
            setErrorMesage("")
            const result = await signin(email, password)
            if (!result.ok) {
              setErrorMesage(result.message)
            }
            console.log(await generateSingleProxy({}))
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  </div>
}