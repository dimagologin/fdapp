import clsx from "clsx";
import { LucideCircleCheckBig } from "lucide-react";
import { GbInput, h2Classes } from "./DashboardPage";
import { MonthlySubcribtionCheckbox } from "./MonthlySubcribtionCheckbox";
import { CalculatorProxyTypeSelector } from "./ProxyTypeSelector";
import { setTrafic, traficTiers, TraficTierType, useTrafic } from "./state/trafic";


export function MoneyAmount({ children }) {
  return <span className="font-medium  tabular-nums">
    ${children}
  </span>
}
type TrafficAmountBoxParams = {
  traficTier: TraficTierType,
  description: string
}
function TrafficAmountBox({ traficTier, description }: TrafficAmountBoxParams) {
  const trafic = useTrafic();
  const isActive = trafic === traficTier.amountGb;

  return <div className={clsx({
    "flex p-4 bg-white border border-1 rounded-lg cursor-pointer ring-2 -ring-offset-1": 1,
    "border-gray-200 ring-transparent hover:border-transparent hover:ring-indigo-500/50": !isActive,
    "border-transparent  ring-indigo-500": isActive,
  })}
    onClick={() => setTrafic(traficTier.amountGb)}
  >
    <span className="flex-1 ">
      <span className="text-gray-900 font-medium">{traficTier.amountGb} GB<br /></span>
      <div>
        {traficTier.discountPct}% discount
      </div>
      
    </span>

    <LucideCircleCheckBig className={clsx({ 'stroke-gray-200': !isActive, "stroke-indigo-600": isActive })} />
  </div>
}

export function CalculatorForm() {

  return <div>
    <div className="mt-5">
      <h2 className={h2Classes}>
        Monthly trafic volume and discount
      </h2>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <TrafficAmountBox
            traficTier={traficTiers[0]}
            description="Startup"
          />
          <TrafficAmountBox
            traficTier={traficTiers[1]}
            description="Business"
          />
          <TrafficAmountBox
            traficTier={traficTiers[2]}
            description="Business"
          />
          <TrafficAmountBox
            traficTier={traficTiers[3]}
            description="Enterprize"
          />
        </div>
      </div>
    </div>

    <div className="mt-5">
      <h2 className={h2Classes}>
        Proxy type
      </h2>
      <CalculatorProxyTypeSelector />
    </div>



    <div className="mt-5">
      <h2 className={h2Classes + " "}>
        Payment period
      </h2>
      <MonthlySubcribtionCheckbox />
    </div>
    <div className="mt-5">
      <h2 className={h2Classes + " "}>
        Need more trafic?
      </h2>
      <p className="text-gray-500 mb-2">
        Specify amount you need
      </p>
      <GbInput />
    </div>
  </div>
}