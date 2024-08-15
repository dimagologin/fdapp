import { useEffect, useState } from "react";
import { loadSubscriptionList, SubscriptionType } from "../api/loadSubscriptionList";
import { loadTraffic, TrafficType } from "../api/loadTraffic";
import { useUser } from "../auth/user";
import { OnboardingBlock } from "../blocks/OnboardingBlock";
import { QuickActionsBox } from "../blocks/QuickActionsBox";
import TraficUsageTable from "../blocks/TrafficUsageTable";
import { PageBody, PageHeading } from "../layout/AppLayout";
import { useBalance } from "../model/balance";
import { setTrafic, useTrafic } from "../model/traffic";
import { h2ClassName } from "../reusable/styles";

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
          aria-describedby="traffic-gb"
          className="block w-full border border-transparent py-2 pl-3 pr-4 text font-semibold leading-10 rounded-md text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          value={value}
          onChange={e => setTrafic(e.target.value)}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span id="traffic-gb" className="text-gray-500 font-semibold">
            GB
          </span>
        </div>
      </div>
      {/* <label htmlFor="trafficNumberInput" className="block font-regular ">
        Custom traffic
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
  // const traffic = useTrafic()
  const balance = useBalance()
  const [subscriptions, setSubscriptions] = useState<SubscriptionType[]>([]);
  const [traffic, setTraffic] = useState(new Map<number, TrafficType>());
  useEffect(() => {
    loadSubscriptionList().then(value => setSubscriptions(value))
  }, [])
  useEffect(() => {
    loadTraffic(subscriptions).then(value => setTraffic(value))
  }, [subscriptions]);

  return <>
    <PageHeading>Dashboard</PageHeading>
    <PageBody>
      <OnboardingBlock />

      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className={"mt-6 mb-4 " + h2ClassName}>
            Trafic usage this month
          </h2>
        </div>
      </div>

      {
        subscriptions.map(subscription =>
          <TraficUsageTable subscription={subscription} traffic={traffic.get(subscription.id)} />
        )
      }

      <QuickActionsBox />

    </PageBody>
  </>
}