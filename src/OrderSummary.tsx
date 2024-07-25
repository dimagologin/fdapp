import { useEffect, useState } from "react"
import { priceByProxyType, useIsStartedCheckout, useProxyType, useTrafic } from "./state"

export function OrderSummary() {
  const isStartedCheckout = useIsStartedCheckout()
  const proxyType = useProxyType()
  const trafic = useTrafic()
  const [isOpened, setOpened] = useState(false)

  useEffect(() => {
    if (isStartedCheckout) {
      setOpened(false);
    }
  }, [isStartedCheckout]);

  if (!isOpened) {
    return <div className="bg-gray-100 py-4 -mx-4 my-4 px-4 border-t border-b border-gray-200">
      <div className="flex justify-between w-full">
        <span>
          Show order summary
        </span>
        <span className="font-bold">
          ${priceByProxyType[proxyType] * trafic}.00
        </span>
      </div>
    </div>
  }

  return <div className="border-b border-red-500 pb-6 mb-6">
    <h2 className={"mt-6 mb-4 font-semibold text-gray-900 "}>
      Order summary
    </h2>

    <div className="grid my-4 grid-cols-2 gap-2 leading-7">
      <div className="min-2-60">
        <strong className="font-medium text-gray-800">
          Proxy type
        </strong>
      </div>
      <div>
        {proxyType}
      </div>

      <div className="min-2-60">
        <strong className="font-medium text-gray-800">
          Price, per GB
        </strong>
      </div>
      <div>
        ${priceByProxyType[proxyType]}.00
        {" "}<span className="text-gray-400">/ GB</span>
      </div>

      <div className="min-2-60">
        <strong className="font-medium text-gray-800">
          Quantity
        </strong>
      </div>
      <div>
        {trafic} GB
      </div>

      <div className="col-span-2 mb-1 py-1 border-b border-gray-300"></div>

      <div className="min-2-60">
        <strong className="font-medium text-gray-900">
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