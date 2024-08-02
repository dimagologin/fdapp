import { NavLink } from "react-router-dom";
import { CalculatorForm } from "./CalculatorForm";
import { h2Classes } from "./DashboardPage";
import { hardButtonStyles } from "./HardButton";
import { PageBody, PageHeading } from "./layout/Layout";
import { OrderSummary } from "./OrderSummary";
import { useIsBalancePositive } from "./state/state";

export function ZeroBalancePage() {
  const isBalancePositive = useIsBalancePositive()
  const hasPreviousPurchases = false;

  return <>
    <PageHeading>Buy proxies</PageHeading>
    <PageBody>


    <div className="lg:flex gap-y-6 gap-x-20">
        <div>
          <p className="text-sm text-gray-500 mb-1">
            Pick proxies you need and proceed to checkout.
          </p>

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
    </PageBody>

  </>
}