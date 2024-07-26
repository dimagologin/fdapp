import { useEffect, useState } from "react"
import { formatUsd, useProxyType } from "./proxyType"
import { useIsStartedCheckout, useTrafic } from "./state"

export function OrderSummary({ isOpened: isOpenedProp = false }) {
  const isStartedCheckout = useIsStartedCheckout()
  const proxyType = useProxyType()
  const trafic = useTrafic()
  const [isOpened, setOpened] = useState(isOpenedProp)

  useEffect(() => {
    if (isStartedCheckout) {
      setOpened(false);
    }
  }, [isStartedCheckout]);

  if (!isOpened) {
    return <div
      onClick={() => setOpened(true)}
      className="bg-gray-100 py-4 -mx-4 my-4 px-4 border-t border-b border-gray-200"
    >
      <div className="flex justify-between w-full">
        <span>
          Show order summary
        </span>
        <span className="font-bold">
          {proxyType.priceStr}
        </span>
      </div>
    </div>
  }

  return <div className="pb-6 mb-6">
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
        {proxyType.title}
      </div>

      <div className="min-w-44">
        <strong className="font-medium text-gray-800">
          Price, per GB
        </strong>
      </div>
      <div>
        <span className="text-gray-700 font-semibold">{proxyType.priceStr}</span>
        {" "}<span className="text-gray-500 font-medium">/ GB</span>
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
        ${formatUsd(proxyType.price * trafic)}
      </div>
    </div>

  </div>
}