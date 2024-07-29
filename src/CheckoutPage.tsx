import { LucideX } from "lucide-react";
import { CreateAccount } from "./CreateAccount";
import { OrderSummary } from "./OrderSummary";
import { PaymentForm } from "./PaymentForm";
import { cancelCheckout, useUser } from "./state";

export function CheckoutPage() {
  const user = useUser()
  return <div>
    <span
      className="inline-block float-right text-base font-extralight text-indigo-800 cursor-pointer hover:text-indigo-900 "
      style={{ cursor: 'pointer' }}
      onClick={cancelCheckout}
    >
      CLOSE <LucideX className="inline-block h-5 stroke-1 relative -top-px" />
    </span>
    <h1 className="mt-6 mb-4 text-2xl leading-7 font-semibold text-gray-900">
      Checkout
    </h1>
    <OrderSummary />
    <CreateAccount />

    {user && <PaymentForm />}
  </div>
}