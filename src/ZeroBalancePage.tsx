import { CalculatorForm, MoneyAmount } from "./CalculatorForm";
import { h2Classes } from "./DashboardPage";
import { HardButton } from "./HardButton";
import { OrderSummary } from "./OrderSummary";
import { useProxyType } from "./proxyType";
import { startCheckout, useIsBalancePositive, useIsStartedCheckout, useTrafic, useUser } from "./state";

export function ZeroBalancePage() {
  const user = useUser()
  const proxyType = useProxyType()
  const trafic = useTrafic()
  const isStartedCheckout = useIsStartedCheckout()
  const isBalancePositive = useIsBalancePositive()
  const hasPreviousPurchases = false;

  return <div>
    <div className="lg:flex gap-6">
    <div>
        <div>
          <h1 className="mb-4 text-2xl leading-7 font-semibold text-gray-900">
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


      </div>
      <div className="md:max-w-80">
        <div className=" pb-6 px-6 border bg-white rounded-xl">

          <OrderSummary />
          <HardButton
            // style={{ display: 'block' }}
            className="block w-full"
            onClick={startCheckout}
          >
            PROCEED TO CHECKOUT
          </HardButton>
        </div>

        {
          !isBalancePositive && hasPreviousPurchases &&
          <div className="mt-10">
            <h2 className={h2Classes + " mt-4"}>
              Still not sure?
            </h2>
            <p className="text-sm text-gray-700">
              Try our proxies risk-free! Sign up now and get 1&nbsp;GB of mobile proxy traffic for just $0.99!
              <div className="my-4">
                <button className="border border-2 rounded font-semibol px-3 py-1">
                  Start one dollar trial now
                </button>
              </div>
            </p>
          </div>
        }
      </div>
    </div>

    <div>

    </div>
  </div>
}