import { oneTimePayment, usePaymentPeriod } from "../model/paymentPeriod";
import { useTotals } from "../model/pricing";
import { useProxyKind } from "../model/proxyKind";
import { useTrafic } from "../model/trafic";

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

function SubtotalAndDiscount({ totals }) {
  if (totals.paymentPeriodDiscountPct) {

  }
  return <>
    <div className="">
      <span className="font-regular text-gray-800">
        Subtotal
      </span>
    </div>
    <div className="font-regular text-gray-800">
      {totals.subtotalPriceText}
    </div>
    {
      !!totals.tierDiscountPct && <>
        <div className="col-span-2 mb-2 py-1 border-b border-gray-200"></div>
        <div className="min-w-80">
          <span className="font-regular text-gray-800">
            Tier discount
          </span>
        </div>
        <div className="font-regular text-gray-800">
          {totals.tierDiscountPct}%
        </div>
      </>
    }
    {
      !!totals.paymentPeriodDiscountPct && <>
        <div className="col-span-2 mb-2 py-1 border-b border-gray-200"></div>
        <div className="min-w-80">
          <span className="font-regular text-gray-800">
            Annual discount
          </span>
        </div>
        <div className="font-regular text-gray-800">
          {totals.paymentPeriodDiscountPct}%
        </div>
      </>
    }
    <div className="col-span-2 mb-2 py-1 border-b border-gray-200"></div>
  </>
}

export function OrderSummary({ }) {
  const proxyKind = useProxyKind();
  const trafic = useTrafic();
  const totals = useTotals()
  const paymentPeriod = usePaymentPeriod();

  return <div className="pb-4 ">
    <h2 className={"mt-6 mb-4 font-medium text-gray-900 "}>
      Order summary
    </h2>

    <div className="grid my-4 grid-cols-2 gap-x-20 gap-y-2 justify-between leading-7">
      <div className="">
        <span >
          Proxy type
        </span>
      </div>
      <div className="font-medium text-gray-900">
        {proxyKind.title}
      </div>

      <div className="min-w-80">
        <span >
          Cost, per GB
        </span>
      </div>
      <div>
        <span className="text-gray-900 font-medium">{proxyKind.priceStr}</span>
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
      <SubtotalAndDiscount totals={totals} />
      <div className="">
        <span className="font-medium text-gray-900">
          Total
        </span>
      </div>
      <div className="font-medium text-gray-900">
        {totals.totalPriceText}
      </div>
    </div>

  </div>
}