import clsx from "clsx";
import { LucideBuilding, LucideServer, LucideSmartphone } from "lucide-react";
import { useState } from "react";


export function ProxyTypeRadioBox({ isActive = false, title, Icon, onSelect }) {

  return <div className={clsx({
    "flex p-4 bg-white border border-1 text-center rounded-lg cursor-pointer ring-2 -ring-offset-1": 1,
    "border-gray-200 ring-transparent hover:border-transparent hover:ring-fuchsia-500/50": !isActive,
    "border-transparent  ring-fuchsia-500": isActive,
  })}
    onClick={onSelect}
  >
    <span className="flex-1 text-gray-900">
      {title}
    </span>
    <Icon className={clsx({ 'stroke-gray-200': !isActive, "stroke-fuchsia-600": isActive })} />
  </div>
}

const priceByProxyType = {
  mobile: 7,
  residential: 7,
  dataCenter: 1,
}

function MoneyAmount({ children }) {
  return <strong className="text-medium text-gray-800 tabular-nums">
    ${children}
  </strong>
}

export function TwoColumnsLayout() {
  const [proxyType, setProxyType] = useState("mobile")
  const [trafic, setTrafic] = useState(1)

  return <div className="bg-gray-50 text-gray-900">
    <div className="container bg-gray-50 mx-auto p-6 text-gray-600">
      <div className="">
        <div>
          <h1 className="mt-6 mb-4 font-medium text-gray-900">
            Proxy account balance
          </h1>

          <p>Currently, you have <MoneyAmount>0.00</MoneyAmount> on your proxy account.</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 py-4 ">
            <h3 className="mt-6 mb-4 font-regular">
              Proxy type
            </h3>
            <div className="grid grid-flow-col grid-cols-3 gap-4">
              <ProxyTypeRadioBox
                title="Mobile"
                isActive={proxyType === 'mobile'}
                Icon={LucideSmartphone}
                onSelect={() => setProxyType('mobile')}
              />
              <ProxyTypeRadioBox
                title="Residential"
                isActive={proxyType === 'residential'}
                Icon={LucideBuilding}
                onSelect={() => setProxyType('residential')}
              />
              <ProxyTypeRadioBox
                title="Data center"
                isActive={proxyType === 'dataCenter'}
                Icon={LucideServer}
                onSelect={() => setProxyType('dataCenter')}
              />
            </div>
            <h2 className="mt-6 mb-4 font-regular">
              Purchase traffic, Gb
            </h2>
            <div className="flex w-full">

              <input
                id="balance-range" min={1} max={100} step="1" type="range"
                value={trafic}
                onChange={e => setTrafic(e.target.value)}
                className="color-red-500 w-full"></input>

              <input
                className="border-gray-300 w-16 px-2 py-2 mx-2 border rounded"
                type="number"
                value={trafic}
              /> Gb
            </div>

            <h2 className="mt-6 mb-4 font-medium">
              Payment
            </h2>
            <button className="py-2 px-4 border bg-fuchsia-700 text-fuchsia-100 rounded">
              Pay now
            </button>

            <h2 className="mt-6 mb-4 font-medium text-gray-700">
              Generate proxies
            </h2>

            <div>
              <h2 className="mt-6 mb-4 font-medium">
                Proxy location
              </h2>
            </div>

            <div>
              <h3 className="mt-6 mb-2 font-regular">
                Number of proxies
              </h3>
              <input
                className="bg-white border p-2 mb-2 rounded"
                value={10}>
              </input>
            </div>

            <div>
              <h2></h2>
              <button className="py-2 px-4 border bg-fuchsia-700 text-fuchsia-100 rounded">
                Generate proxies
              </button>
            </div>
          </div>

          <div className="px-4 py-6 bg-white border rounded-xl">
            <h3 className="font-medium text-gray-800">Order summary</h3>

            <div>
              ${priceByProxyType[proxyType] * trafic}.00
            </div>
          </div>


        </div>
        <div>
        </div>
      </div>
    </div >
  </div >
}