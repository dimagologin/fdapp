import { LucideArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { PageBody, PageHeading } from "./layout/Layout";
import { OnboardingBlock } from "./OnboardingBlock";
import { useBalance, useUser } from "./state/state";
import { setTrafic, useTrafic } from "./state/trafic";
import TraficUsageTable from "./TraficUsageTable";

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

  return <>
    <PageHeading>Dashboard</PageHeading>
    <PageBody>
      <OnboardingBlock />
      <TraficUsageTable />

      <div>
        <h2 className={"mt-6 mb-4 " + h2Classes}>
          Subscription and discounts
        </h2>
        <p>
          Currently, you are on <strong>120Gb</strong> subscription tier. Which give you <strong>30%</strong> discount. Mobile traffic costs you <strong><s>$2.95</s></strong> <strong>$2.07</strong> per 1GB.
        </p>
      </div>

      <div>
        <h2 className={"mt-6 mb-4 " + h2Classes}>
        Quick actions
        </h2>
        <p className="my-4">
          <NavLink
            className="text-indigo-600 underline"
            to={"/proxies/buy"}
          >

          Buy more proxy trafic
            <LucideArrowRight className="inline-block h-4" />
          </NavLink>
        </p>
        <p className="my-4">
          <NavLink
            className="text-indigo-600 underline"
            to={"/proxies/buy"}
          >
            Create new proxy pool
            <LucideArrowRight className="inline-block h-4" />
          </NavLink>
        </p>
        <p className="my-4">
          <NavLink
            className="text-indigo-600 underline"
            to={"/proxies/buy"}
          >
            Change password
            <LucideArrowRight className="inline-block h-4" />
          </NavLink>
        </p>
        <p className="my-4">
          <NavLink
            className="text-indigo-600 underline"
            to={"/proxies/buy"}
          >
            Contact support
            <LucideArrowRight className="inline-block h-4" />
          </NavLink>
        </p>

      </div>

    </PageBody>
  </>
}