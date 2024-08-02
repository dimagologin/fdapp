import { LucideCopy, LucideDownload } from "lucide-react";
import { NavLink } from "react-router-dom";
import { MoneyAmount } from "./CalculatorForm";
import { HardButton, hardButtonStyles } from "./HardButton";
import { LocationPicker } from "./LocationPicker";
import { GeneratorProxyTypeSelector } from "./ProxyTypeSelector";
import { SoftButton } from "./SoftButton";
import { useBalance, useUser } from "./state/state";
import { setTrafic, useTrafic } from "./state/trafic";

export const h2Classes = "text-gray-800 text-lg font-semibold mt-8 mb-1";
export const h3Classes = "text-gray-800 text-base font-medium mt-4 mb-1";

export function GbInput() {
  const value = useTrafic();
  return (
    <div className="w-40 mb-8">
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
          onChange={e => setTrafic(e.target.value)}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span id="trafic-gb" className="text-gray-500 font-semibold">
            GB
          </span>
        </div>
      </div>
      {/* <label htmlFor="trafficNumberInput" className="block font-regular ">
        Custom trafic
      </label> */}

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
  const trafic = useTrafic()
  const balance = useBalance()

  return <div className="">
    <div>
      <h1 className="mt-6 mb-4 text-2xl leading-7 font-semibold text-gray-900">
        Dashboard
      </h1>

      <p className="text-sm text-gray-500">
        Currently, you have <MoneyAmount>{balance}</MoneyAmount> on your proxy account.
        Please, add credits to your account to enable proxies.
      </p>
    </div>

    <NavLink
      className={hardButtonStyles + " mt-8 "}
      to={"/proxies/buy"} >
      Buy more proxy trafic
    </NavLink>

    <h2 className={"mt-6 mb-4 " + h2Classes}>
      Generate proxy pool
    </h2>

    <p className="text-gray">
      You have no proxy pools yet. Let's create your first proxy pool.
    </p>

    <div>
      <h2 className={h2Classes}>Proxy type</h2>
      <div className="mt-2 mb-4">
        <GeneratorProxyTypeSelector />
      </div>
      <div className="mb-4">
        <h2 className={h2Classes}>
          Proxy locations
        </h2>

        <div>
          <LocationPicker />
        </div>
      </div>

      <div>
        <HardButton>
          Generate proxy
        </HardButton>
      </div>

      <h2 className={h2Classes}>List of proxy server (with credentials)</h2>

      <textarea rows={10} cols={40} className="w-full border rounded my-2" />

      <div>
        <SoftButton className="mr-4 ">
          Copy proxy pool <LucideCopy className="inline-block h-4" />
        </SoftButton>
        <SoftButton className="mr-4 ">
          Download as txt<LucideDownload className="inline-block h-4" />
        </SoftButton>
        {/* <SoftButton className="mr-4 ">
          Share via email<LucideForward className="inline-block h-4" />
        </SoftButton> */}
      </div>


    </div>

  </div>
}