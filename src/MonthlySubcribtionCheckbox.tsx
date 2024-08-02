
import { Field, Label, Switch } from '@headlessui/react';
import clsx from 'clsx';
import { LucideCircleCheckBig } from 'lucide-react';
import { annualSubscription, monthlySubscription, oneTimePayment, setPaymentPeriod, usePaymentPeriod } from './paymentPeriod';
import { setIsSubscription, useIsSubscription } from './state/state';


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

export function OldMonthlySubcribtionCheckbox() {
  const isSubscription = useIsSubscription();

  return (
    <Field className="flex items-center">
      <Switch
        id='repeatCheckbox'
        checked={isSubscription}
        onChange={setIsSubscription}
        className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-indigo-600"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
        />
      </Switch>
      <Label as="label" className="ml-3 text-sm" htmlFor="repeatCheckbox">
        <span className="font-medium text-gray-900">Monthly subscription</span>{' '}
        <span className="text-gray-500">(Refill account every month)</span>
      </Label>
    </Field>
  )
}