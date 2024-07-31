import { oneTimePayment, usePaymentPeriod } from "./paymentPeriod";
import { useProxyType } from "./proxyType";
import { useFormattedTotal, useTrafic } from "./state";

function PaymentPeriodLineItem({ paymentPeriod }) {
  if (paymentPeriod === oneTimePayment) {
    return <>
      <div>
        <span >
          Payment
        </span>
      </div>
      <div>
        <span className="font-medium text-gray-900">
          one-time
        </span>
      </div>
    </>
  }

  return <>
    <div>
      <span >
        Subscription
      </span>
    </div>
    <div>
      <span className="font-medium text-gray-900">
        {paymentPeriod.short}
      </span>
    </div>
  </>
}

function SubtotalAndDiscount({ subtotal, discount }) {
  return <>
    <div className="">
      <span className="font-regular text-gray-800">
        Subtotal
      </span>
    </div>
    <div className="font-regular text-gray-800">
      {subtotal}
    </div>
    <div className="">
      <span className="font-regular text-gray-800">
        Discount
      </span>
    </div>
    <div className="font-regular text-gray-800">
      {discount}
    </div>
    <div className="col-span-2 mb-2 py-1 border-b border-gray-200"></div>
  </>
}

export function OrderSummary({ }) {
  const proxyType = useProxyType();
  const trafic = useTrafic();
  const formattedTotal = useFormattedTotal()
  const paymentPeriod = usePaymentPeriod();

  return <div className="pb-4 ">
    <h2 className={"mt-6 mb-4 font-medium text-gray-900 "}>
      Order summary
    </h2>

    <div className="grid my-4 grid-cols-2 gap-x-20 gap-y-2 justify-between leading-7">
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

      <div>
        <span >
          Quantity
        </span>
      </div>
      <div>
        <span className="font-medium text-gray-900">
          {trafic} GB
        </span>
      </div>

      <PaymentPeriodLineItem paymentPeriod={paymentPeriod} />

      <div className="col-span-2 mb-2 py-1 border-b border-gray-200"></div>

      <SubtotalAndDiscount discount={"50%"} subtotal="$1000.00" />
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