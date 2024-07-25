import { LucideArrowRight } from "lucide-react";
import { CalculatorForm, MoneyAmount } from "./CalculatorForm";
import { startCheckout, useIsStartedCheckout, useProxyType, useTrafic, useUser } from "./state";

export function ZeroBalancePage() {
  const user = useUser()
  const proxyType = useProxyType()
  const trafic = useTrafic()
  const isStartedCheckout = useIsStartedCheckout()

  return <div className="">
    <div>
      <h1 className="mt-6 mb-4 text-2xl leading-7 font-semibold text-gray-900">
        Add credits
      </h1>

      <p className="text-sm text-gray-500 mb-1">
        Currently, you have <MoneyAmount>0.00</MoneyAmount> on your proxy account.
        Please, add credits to your account to generate proxies.
      </p>

      <p className="text-sm text-gray-500 ">
        Pick proxy type and amount of trafic you need and then proceed to checkout.
      </p>
    </div>

    <CalculatorForm />

    <button
      onClick={startCheckout}
      className="my-6 px-8 py-4 leading-[24px]  bg-fuchsia-900 text-white font-extralight rounded" style={{ fontSize: 24 }}
    >
      PROCEED TO CHECKOUT
      <LucideArrowRight className="inline-block ml-2" />
    </button>

  </div>
}