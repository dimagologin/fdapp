import { LucideX } from "lucide-react";
import { NavLink } from "react-router-dom";
import { CreateAccount } from "./CreateAccount";
import { ExpandableOrderSummary } from "./ExpandableOrderSummary";
import { PaymentForm } from "./PaymentForm";
import { useUser } from "./state";

export function CheckoutPage() {
  const user = useUser()
  return <div>
    <NavLink
      className="inline-block float-right text-base font-extralight text-indigo-800 cursor-pointer hover:text-indigo-900 "
      style={{ cursor: 'pointer' }}
      to={'/proxies/buy'}
    >
      BACK <LucideX className="inline-block h-5 stroke-1 relative -top-px -mr-2" />
    </NavLink>
    <h1 className="mt-6 mb-4 text-2xl leading-7 font-semibold text-gray-900">
      Checkout
    </h1>
    <ExpandableOrderSummary />
    <CreateAccount />

    {user && <PaymentForm />}
  </div>
}