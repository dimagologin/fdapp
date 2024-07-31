import clsx from "clsx";
import { LucideCircleCheckBig } from "lucide-react";
import { GbInput, h2Classes } from "./DashboardPage";
import { MonthlySubcribtionCheckbox } from "./MonthlySubcribtionCheckbox";
import { CalculatorProxyTypeSelector } from "./ProxyTypeSelector";
import { setTrafic, useTrafic } from "./state";


export function MoneyAmount({ children }) {
  return <span className="font-medium  tabular-nums">
    ${children}
  </span>
}

function TrafficAmountBox({ gb = 1, description, discount }) {
  const trafic = useTrafic();
  const isActive = trafic === gb;

  return <div className={clsx({
    "flex p-4 bg-white border border-1 rounded-lg cursor-pointer ring-2 -ring-offset-1": 1,
    "border-gray-200 ring-transparent hover:border-transparent hover:ring-indigo-500/50": !isActive,
    "border-transparent  ring-indigo-500": isActive,
  })}
    onClick={() => setTrafic(gb)}
  >
    <span className="flex-1 ">
      <span className="text-gray-900 font-medium">{gb} GB<br /></span>
      {description}
      <div>
        {discount}
      </div>
    </span>

    <LucideCircleCheckBig className={clsx({ 'stroke-gray-200': !isActive, "stroke-indigo-600": isActive })} />
  </div>
}

export function CalculatorForm() {

  return <div>
    <div className="mt-5">
      <h2 className={h2Classes}>
        Select proxy type
      </h2>
    </div>

    <CalculatorProxyTypeSelector />

    <div className="mt-5">
      <h2 className={h2Classes}>
        Select trafic amount
      </h2>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <TrafficAmountBox
            gb={12}
            description="Startup"
            discount={""}
          />
          <TrafficAmountBox
            gb={48}
            description="Business"
            discount={"10% Discount"}
          />
          <TrafficAmountBox
            gb={96}
            description="Business"
            discount={"20% Discount"}
          />
          <TrafficAmountBox
            gb={120}
            description="Enterprize"
            discount={"30% Discount"}
          />
        </div>
      </div>
      <div className="mt-5">
        <h2 className={h2Classes + " mb-4"}>
          Select payment period
        </h2>
        <MonthlySubcribtionCheckbox />
      </div>
      <div>
        <h2 className={h2Classes + " mt-4"}>
          Need more trafic?
        </h2>
        <p className="text-gray-500 mb-2">
          Specify amount you need
        </p>
        <GbInput />
      </div>
    </div>
  </div>
}