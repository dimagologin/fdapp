import { useProxyType } from "./proxyType";
import { useFormattedTotal, useTrafic } from "./state";

export function OrderSummary({ }) {
  const proxyType = useProxyType();
  const trafic = useTrafic();
  const formattedTotal = useFormattedTotal()

  return <div className="pb-4 ">
    <h2 className={"mt-6 mb-4 font-medium text-gray-900 "}>
      Order summary
    </h2>

    <div className="grid my-4 grid-cols-2 gap-x-8 gap-y-2 justify-between leading-7">
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
        {formattedTotal}
      </div>
    </div>

  </div>
}