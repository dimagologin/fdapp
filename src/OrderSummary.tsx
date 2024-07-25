import { priceByProxyType, useProxyType, useTrafic } from "./state"

export function OrderSummary() {
  const proxyType = useProxyType()
  const trafic = useTrafic()

  return <div className="">
    <h2 className={"mt-6 mb-4 text-lg "}>
      Order summary
    </h2>

    <div className="grid my-4 grid-cols-2 gap-2 leading-7">
      <div className="min-2-60">
        <strong className="font-semibold">
          Proxy type
        </strong>
      </div>
      <div>
        {proxyType}
      </div>

      <div className="min-2-60">
        <strong className="font-semibold">
          Price, per GB
        </strong>
      </div>
      <div>
        ${priceByProxyType[proxyType]}.00
        {" "}<span className="text-gray-400">/ GB</span>
      </div>

      <div className="min-2-60">
        <strong className="font-semibold">
          Quantity
        </strong>
      </div>
      <div>
        {trafic} GB
      </div>

      <div className="col-span-2 mb-1 py-1 border-b border-gray-300"></div>

      <div className="min-2-60">
        <strong className="font-semibold text-gray-900">
          Total
        </strong>
      </div>
      <div>
        ${priceByProxyType[proxyType] * trafic}.00
      </div>
    </div>
    <div>
    </div>

  </div>
}