import { login, useUser } from "./state";

export function CreateAccount() {
  const user = useUser();

  if (user) {
    return <div>Loggen in as <strong>user</strong></div>
  }

  return <div className="pt-8">

    <h2 className={"mt-6 mb-4 text-lg "}>
      Create account
    </h2>

    <p className="text-gray-500 text-sm">
      You balance refill will be saved into the current account.
    </p>

    <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Email
      </label>
      <div className="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
        Password
      </label>
      <div className="mt-2">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="***"
          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>

      <div className="pt-4">
        <button
          className="py-1.5 px-4 border bg-indigo-600 text-fuchsia-100 rounded-lg font-semibold"
          onClick={login}
        >
          Sign in
        </button>
      </div>
    </div>
  </div>
}