
import clsx from 'clsx';
import { LucideCircleCheckBig } from 'lucide-react';
import { annualSubscription, monthlySubscription, oneTimePayment, setPaymentPeriod, usePaymentPeriod } from './paymentPeriod';


function PaymentPeriodBox({ paymentPeriod, description, discountMultiplier }) {
  const activePaymentPeriod = usePaymentPeriod();
  const isActive = activePaymentPeriod === paymentPeriod;

  return <div className={clsx({
    "flex p-4 bg-white border border-1 rounded-lg cursor-pointer ring-2 -ring-offset-1": 1,
    "border-gray-200 ring-transparent hover:border-transparent hover:ring-indigo-500/50": !isActive,
    "border-transparent  ring-indigo-500": isActive,
  })}
    onClick={() => setPaymentPeriod(paymentPeriod)}
  >
    <span className="flex-1 ">
      <div className="text-gray-900 font-medium">{paymentPeriod.title}</div>
      <div>
        {description}
      </div>
    </span>

    <LucideCircleCheckBig className={clsx({ 'stroke-gray-200': !isActive, "stroke-indigo-600": isActive })} />
  </div>
}


export function MonthlySubcribtionCheckbox() {

  return <div className="w-full">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <PaymentPeriodBox
        paymentPeriod={annualSubscription}
        description={<>Pay upfront, get 50% discount</>}
        discountMultiplier={0.50}
      />
      <PaymentPeriodBox
        paymentPeriod={monthlySubscription}
        description={<>Recurring payments. <span className='inline-block'>Monthly traffic rollover.</span></>}
        discountMultiplier={1}
      />
      <PaymentPeriodBox
        paymentPeriod={oneTimePayment}
        description={<>For one month. <br />We'll remind to renew.</>}
        discountMultiplier={1}
      />

    </div>
  </div>
}
