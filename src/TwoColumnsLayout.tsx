import clsx from "clsx";
import { LucideBuilding, LucideCircleCheckBig, LucideServer, LucideSmartphone } from "lucide-react";
import BalanceSectionHeading from "./BalanceSectionHeading";
import CreateProxyListBox from "./CreateProxyListBox";
import { TopNav } from "./TopNav";
import { priceByProxyType, setProxyType, setTrafic, startCheckout, useProxyType, useTrafic, useUser } from "./state";



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
function MoneyAmount({ children }) {
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

const h2Classes = "text-gray-800 font-semibold ";
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

export function TwoColumnsLayout() {
  const user = useUser()
  const proxyType = useProxyType()
  const trafic = useTrafic()

  return <div className="bg-gray-50 text-gray-900">
    <TopNav />
    <div className="container bg-gray-50 mx-auto p-6 text-gray-600">
      <div className="">
        <div>
          <h1 className="mt-6 mb-4 text-2xl leading-7 font-semibold text-gray-900">
            Dashboard
          </h1>

          <p className="text-sm text-gray-500">
            Currently, you have <MoneyAmount>0.00</MoneyAmount> on your proxy account.
            Please, add credits to your account to enable proxies.
          </p>
        </div>

        <BalanceSectionHeading />

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

        <button
          onClick={startCheckout}
          className="my-6 px-4 py-1.5 leading-5 text-sm  bg-fuchsia-600 text-fuchsia-100 font-semibold rounded-lg"
        >
          CONTINUE TO CHECKOUT
        </button>


        {/* <button className="mt-4 py-2 px-4 border bg-fuchsia-600 text-fuchsia-100 rounded-lg">
          Proceed to checkout
        </button> */}

        <h2 className={"mt-6 mb-4 text-lg " + h2Classes}>
          Proxy list
        </h2>

        <CreateProxyListBox />
      </div>
    </div>
  </div>
}