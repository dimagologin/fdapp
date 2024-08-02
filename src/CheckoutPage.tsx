import { LucideX } from "lucide-react";
import { NavLink } from "react-router-dom";
import { CreateAccount } from "./CreateAccount";
import { ExpandableOrderSummary } from "./ExpandableOrderSummary";
import { PageBody, PageHeading } from "./layout/Layout";
import { PaymentForm } from "./PaymentForm";
import { useUser } from "./state/state";

export function CheckoutPage() {
  const user = useUser()
  return <>
    <PageHeading right={
      <NavLink
        className="inline-block float-right text-base font-extralight text-indigo-800 cursor-pointer hover:text-indigo-900 "
        style={{ cursor: 'pointer' }}
        to={'/proxies/buy'}
      >
        BACK <LucideX className="inline-block h-5 stroke-1 relative -top-px -mr-2" />
      </NavLink>
    }>Checkout</PageHeading>
    <PageBody>
      <ExpandableOrderSummary />
      <CreateAccount />

      {user && <PaymentForm />}
    </PageBody>

  </>
}