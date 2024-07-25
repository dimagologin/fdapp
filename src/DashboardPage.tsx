import { CalculatorForm, MoneyAmount } from "./CalculatorForm";
import CreateProxyListBox from "./CreateProxyListBox";
import { startCheckout, useIsStartedCheckout, useProxyType, useTrafic, useUser } from "./state";

export const h2Classes = "text-gray-800 font-semibold ";
const h3Classes = "text-gray-700 font-medium ";

export default function GbInput({ value, setValue }) {
  return (
    <div className="w-40 ">
      <div className="relative  rounded-md">
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">Trafic</span>
        </div> */}
        <input
          id="trafficNumberInput"
          name="trafficNumberInput"
          type="text"
          placeholder="100"
          aria-describedby="trafic-gb"
          className="block w-full border border-transparent py-2 pl-3 pr-4 text font-semibold leading-10 rounded-md text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span id="trafic-gb" className="text-gray-500 font-semibold">
            GB
          </span>
        </div>
      </div>
      <label htmlFor="trafficNumberInput" className="block font-regular text-gray-600">
        Custom trafic
      </label>

    </div>
  )
}

function SectionHeading({ title }) {
  return <div className="mt-10 pb-5 border-b border-gray-200 ">
    <h3 className="font-semibold leading-6 text-gray-900">{title}</h3>
  </div>
}

export function DashboardPage() {
  const user = useUser()
  const proxyType = useProxyType()
  const trafic = useTrafic()
  const isStartedCheckout = useIsStartedCheckout()

  return <div className="">
    <div>
      <h1 className="mt-6 mb-4 text-2xl leading-7 font-semibold text-gray-900">
        Dashboard
      </h1>

      <p className="text-sm text-gray-500">
        Currently, you have <MoneyAmount>0.00</MoneyAmount> on your proxy account.
        Please, add credits to your account to enable proxies.
      </p>
    </div>
    <CalculatorForm />

    <button
      onClick={startCheckout}
      className="my-6 px-4 py-1.5 leading-5 text-sm  bg-fuchsia-600 text-white font-semibold rounded"
    >
      PROCEED TO CHECKOUT
    </button>

    <h2 className={"mt-6 mb-4 text-lg " + h2Classes}>
      Proxy lists
    </h2>

    <CreateProxyListBox />
  </div>
}