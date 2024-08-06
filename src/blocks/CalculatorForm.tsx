import clsx from "clsx";
import { LucideCircleCheckBig } from "lucide-react";
import { setTrafic, trafficTiers, TraficTierType, useTrafic } from "../model/traffic";
import { GbInput } from "../pages/DashboardPage";
import { h2ClassName } from "../reusable/styles";
import { MonthlySubcribtionCheckbox } from "./MonthlySubscriptionCheckbox";
import { CalculatorProxyKindSelector } from "./ProxyKindSelector";


export function MoneyAmount({ children }) {
  return <span className="font-medium  tabular-nums">
    ${children}
  </span>
}
type TrafficAmountBoxParams = {
  trafficTier: TraficTierType,
  description: string
}
function TrafficAmountBox({ trafficTier, description }: TrafficAmountBoxParams) {
  const traffic = useTrafic();
  const isActive = traffic === trafficTier.amountGb;

  return <div className={clsx({
    "flex p-4 bg-white border border-1 rounded-lg cursor-pointer ring-2 -ring-offset-1": 1,
    "border-gray-200 ring-transparent hover:border-transparent hover:ring-indigo-500/50": !isActive,
    "border-transparent  ring-indigo-500": isActive,
  })}
    onClick={() => setTrafic(trafficTier.amountGb)}
  >
    <span className="flex-1 ">
      <span className="text-gray-900 font-medium">{trafficTier.amountGb} GB<br /></span>
      <div>
        {trafficTier.discountPct}% discount
      </div>

    </span>

    <LucideCircleCheckBig className={clsx({ 'stroke-gray-200': !isActive, "stroke-indigo-600": isActive })} />
  </div>
}

export function CalculatorForm() {

  return <div>
    <div className="mt-5">
      <h2 className={h2ClassName}>
        Monthly traffic volume and discount
      </h2>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <TrafficAmountBox
            trafficTier={trafficTiers[0]}
            description="Startup"
          />
          <TrafficAmountBox
            trafficTier={trafficTiers[1]}
            description="Business"
          />
          <TrafficAmountBox
            trafficTier={trafficTiers[2]}
            description="Business"
          />
          <TrafficAmountBox
            trafficTier={trafficTiers[3]}
            description="Enterprize"
          />
        </div>
      </div>
    </div>

    <div className="mt-5">
      <h2 className={h2ClassName}>
        Proxy type
      </h2>
      <CalculatorProxyKindSelector />
    </div>



    <div className="mt-5">
      <h2 className={h2ClassName + " "}>
        Payment period
      </h2>
      <MonthlySubcribtionCheckbox />
    </div>
    <div className="mt-5">
      <h2 className={h2ClassName + " "}>
        Need more traffic?
      </h2>
      <p className="text-gray-500 mb-2">
        Specify amount you need
      </p>
      <GbInput />
    </div>
  </div>
}