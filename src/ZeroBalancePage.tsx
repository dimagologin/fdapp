import { NavLink } from "react-router-dom";
import { CalculatorForm, MoneyAmount } from "./CalculatorForm";
import { h2Classes } from "./DashboardPage";
import { hardButtonStyles } from "./HardButton";
import { OrderSummary } from "./OrderSummary";
import { useIsBalancePositive } from "./state/state";

export function ZeroBalancePage() {
  const isBalancePositive = useIsBalancePositive()
  const hasPreviousPurchases = false;

  return <div>
    <div className="lg:flex gap-y-6 gap-x-20">
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
          <NavLink
            className={"block w-full text-center " + hardButtonStyles}
            to={'/checkout'}
          >
            PROCEED TO CHECKOUT
          </NavLink>
        </div>

        {
          !isBalancePositive && !hasPreviousPurchases &&
          <div className="mt-10">
            <h2 className={h2Classes + " mt-4"}>
              Still not sure?
            </h2>
            <p className="text-sm text-gray-700">
              Try our proxies risk-free! Sign up now and get 1&nbsp;GB of mobile proxy traffic for just $0.99!
              <div className="my-4">
                  <a className="border-b border-indigo-600 text-indigo-700 font-semibol py-1 cursor-pointer">
                  Start one dollar trial now
                  </a>
              </div>
            </p>
          </div>
        }
      </div>
    </div>
  </div>
}