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
    <h2 className={"mt-6 mb-4 font-medium text-gray-900 "}>
      Order summary
    </h2>

    <div className="grid my-4 grid-cols-2 gap-2 justify-between leading-7">
      <div className="min-2-60">
        <span >
          Proxy type
        </span>
      </div>
      <div className="font-medium text-gray-900">
        {proxyType.title}
      </div>

      <div className="min-w-44">
        <span >
          Price, per GB
        </span>
      </div>
      <div>
        <span className="text-gray-900 font-medium">{proxyType.priceStr}</span>
        {" "}<span className=" ">/ GB</span>
      </div>

      <div className="min-2-60">
        <span >
          Quantity
        </span>
      </div>
      <div>
        <span className="font-medium text-gray-900">
          {trafic} GB
        </span>
      </div>

      <div className="col-span-2 mb-2 py-1 border-b border-gray-200"></div>

      <div className="">
        <span className="font-medium text-gray-900">
          Total
        </span>
      </div>
      <div className="font-medium text-gray-900">
        ${formatUsd(proxyType.price * trafic)}
      </div>
    </div>

  </div>
}