import { GoogleButton } from "../auth/GoogleButton";
import { CalculatorForm } from "../blocks/CalculatorForm";
import { OrderSummary } from "../blocks/OrderSummary";
import { PageBody, PageHeading } from "../layout/AppLayout";
import { useIsBalancePositive } from "../model/balance";
import { hardButtonStyles } from "../reusable/HardButton";
import { h2ClassName } from "../reusable/styles";
import { createSubscriptionCommand } from "./CheckoutPage";



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
            <button
              className={"block w-full text-center " + hardButtonStyles}
              onClick={createSubscriptionCommand}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>

          {
            !isBalancePositive && !hasPreviousPurchases &&
            <div className="mt-10">
              <h2 className={h2ClassName + " mt-4"}>
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
      <GoogleButton />

    </PageBody>

  </>
}