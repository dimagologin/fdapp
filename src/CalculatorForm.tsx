import clsx from "clsx";
import { LucideCircleCheckBig } from "lucide-react";
import GbInput, { h2Classes } from "./DashboardPage";
import { dataCenter, mobile, residential, setProxyType, useProxyType } from "./proxyType";
import { setTrafic, useTrafic } from "./state";

export function ProxyTypeRadioBox({ proxyType }) {
  const selectedProxyType = useProxyType();
  const isActive = proxyType === selectedProxyType;

  return <div className={clsx({
    "flex p-4 bg-white border border-1  rounded-lg cursor-pointer ring-2 -ring-offset-1": 1,
    "border-gray-200 ring-transparent hover:border-transparent hover:ring-fuchsia-500/50": !isActive,
    "border-transparent  ring-fuchsia-500": isActive,
  })}
    onClick={() => setProxyType(proxyType)}
  >
    <span className="flex-1">
      <strong className="font-semibold text-gray-800">{proxyType.title}</strong>
      <br />
      {proxyType.description}
      <br />
      <span className="text-gray-800 font-semibold">{proxyType.priceStr}</span>{" "}
      <span className="text-gray-400 font-regular">/ GB</span>
    </span>
    <proxyType.Icon className={clsx({ 'stroke-gray-200': !isActive, "stroke-fuchsia-600": isActive })} />
  </div>
}

export function MoneyAmount({ children }) {
  return <strong className="font-medium text-gray-600 tabular-nums">
    ${children}
  </strong>
}

function TrafficAmountBox({ gb = 1, description, }) {
  const trafic = useTrafic();
  const isActive = trafic === gb;

  return <div className={clsx({
    "flex p-4 bg-white border border-1 rounded-lg cursor-pointer ring-2 -ring-offset-1": 1,
    "border-gray-200 ring-transparent hover:border-transparent hover:ring-fuchsia-500/50": !isActive,
    "border-transparent  ring-fuchsia-500": isActive,
  })}
    onClick={() => setTrafic(gb)}
  >
    <span className="flex-1 text-gray-900">
      <strong className="">{gb} GB<br /></strong>
      {description}
    </span>

    <LucideCircleCheckBig className={clsx({ 'stroke-gray-200': !isActive, "stroke-fuchsia-600": isActive })} />
  </div>
}

export function CalculatorForm() {
  const trafic = useTrafic()

  return <div>
    <div className="mt-5">
      <h2 className={h2Classes}>
        Proxy type
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
      <ProxyTypeRadioBox proxyType={mobile} />
      <ProxyTypeRadioBox proxyType={residential} />
      <ProxyTypeRadioBox proxyType={dataCenter} />
    </div>

    <div className="mt-5">
      <h2 className={h2Classes}>
        Trafic amount
      </h2>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <TrafficAmountBox
            gb={12}
            description="Startup"
          />
          <TrafficAmountBox
            gb={48}
            description="Business"
          />
          <TrafficAmountBox
            gb={96}
            description="Business"
          />
          <TrafficAmountBox
            gb={120}
            description="Enterprize"
          />
        </div>
      </div>
      <div>
        <h2 className={h2Classes + " mt-4"}>
          Need more trafic?
        </h2>
        <p className="text-gray-500 mb-2">
          Type exact amount of you need
        </p>
        <GbInput />
      </div>
    </div>
  </div>
}