import clsx from "clsx"
import { LucideBuilding, LucideCircleCheckBig, LucideServer, LucideSmartphone } from "lucide-react"
import GbInput from "./DashboardPage"
import { priceByProxyType, setProxyType, setTrafic, useProxyType, useTrafic } from "./state"

export function ProxyTypeRadioBox({ isActive = false, proxyType, title, description, Icon, onSelect }) {

  return <div className={clsx({
    "flex p-4 bg-white border border-1  rounded-lg cursor-pointer ring-2 -ring-offset-1": 1,
    "border-gray-200 ring-transparent hover:border-transparent hover:ring-fuchsia-500/50": !isActive,
    "border-transparent  ring-fuchsia-500": isActive,
  })}
    onClick={onSelect}
  >
    <span className="flex-1">
      <strong className="font-semibold text-gray-800">{title}</strong>
      <br />
      {description}
      <br />
      <span className="text-gray-800 font-semibold">${priceByProxyType[proxyType]}.00</span>{" "}
      <span className="text-gray-400">/ GB</span>
    </span>
    <Icon className={clsx({ 'stroke-gray-200': !isActive, "stroke-fuchsia-600": isActive })} />
  </div>
}

export function MoneyAmount({ children }) {
  return <strong className="font-medium text-gray-600 tabular-nums">
    ${children}
  </strong>
}

function TrafficAmountBox({ isActive = false, gb = 1, description, onSelect, }) {

  return <div className={clsx({
    "flex w-40 p-4 bg-white border border-1 rounded-lg cursor-pointer ring-2 -ring-offset-1": 1,
    "border-gray-200 ring-transparent hover:border-transparent hover:ring-fuchsia-500/50": !isActive,
    "border-transparent  ring-fuchsia-500": isActive,
  })}
    onClick={onSelect}
  >
    <span className="flex-1 text-gray-900">
      <strong className="">{gb} GB<br /></strong>
      {description}
    </span>

    <LucideCircleCheckBig className={clsx({ 'stroke-gray-200': !isActive, "stroke-fuchsia-600": isActive })} />
  </div>
}

export function CalculatorForm() {
  const proxyType = useProxyType()
  const trafic = useTrafic()

  return <div>
    <div className="mt-5">
      <h3 className={"mb-1.5 font-medium "}>
        Proxy type
      </h3>
    </div>

    <div className="grid  grid-cols-1 md:grid-cols-3  gap-4">
      <ProxyTypeRadioBox
        title="Mobile"
        proxyType="mobile"
        description={"Best anti-detect"}
        isActive={proxyType === 'mobile'}
        Icon={LucideSmartphone}
        onSelect={() => setProxyType('mobile')}
      />
      <ProxyTypeRadioBox
        title="Residential"
        description={"Best anti-detect"}
        proxyType="residential"
        isActive={proxyType === 'residential'}
        Icon={LucideBuilding}
        onSelect={() => setProxyType('residential')}
      />
      <ProxyTypeRadioBox
        title="Data center"
        proxyType="dataCenter"
        description={"More affordable"}
        isActive={proxyType === 'dataCenter'}
        Icon={LucideServer}
        onSelect={() => setProxyType('dataCenter')}
      />
    </div>

    <div className="mt-5"></div>
    <h3 className={"mb-1.5 font-medium "}>
      Trafic
    </h3>
    <div className="flex flex-col md:flex-row w-full gap-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <TrafficAmountBox
          gb={1}
          description="Hobby"
          isActive={trafic === 1}
          onSelect={() => setTrafic(1)}
        />
        <TrafficAmountBox
          gb={7}
          description="Startup"
          isActive={trafic === 7}
          onSelect={() => setTrafic(7)}
        />
        <TrafficAmountBox
          gb={30}
          description="Business"
          isActive={trafic === 30}
          onSelect={() => setTrafic(30)}
        />
        <TrafficAmountBox
          gb={120}
          description="Enterprize"
          isActive={trafic === 120}
          onSelect={() => setTrafic(120)}
        />
      </div>

      <div className="relative flex pl-1 border-r-2 border-fuchsia-500 mr-1">
        <span className="absolute left-[-2px] top-[28px] bg-gray-50">or</span>
      </div>

      <span>
        <GbInput value={trafic} setValue={setTrafic} ></GbInput>
      </span>
    </div>
  </div>
}