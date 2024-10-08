import { useState } from "react"
import { useTotals } from "../model/pricing"
import { OrderSummary } from "./OrderSummary"

export function ExpandableOrderSummary({ isOpened: isOpenedProp = false }) {
  const [isOpened, setOpened] = useState(isOpenedProp)
  const totals = useTotals()

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
          {totals.totalPriceText}
        </span>
      </div>
    </div>
  }

  return <div
    onClick={() => setOpened(false)}
    className="bg-gray-100 py-4 -mx-4 my-4 px-4 border-t border-b border-gray-200"
  >
    <div className="flex justify-between w-full">
      <span>
        Hide full order summary
      </span>
    </div>
    <OrderSummary />
  </div>
}