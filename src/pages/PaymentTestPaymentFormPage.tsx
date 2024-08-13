import { LucideX } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useUser } from "../auth/user";
import { ExpandableOrderSummary } from "../blocks/ExpandableOrderSummary";
import { PaymentForm } from "../blocks/Outdated_PaymentForm";
import { PageBody, PageHeading } from "../layout/AppLayout";

export function PaymentTestPaymentFormPage() {
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
      <PaymentForm />
    </PageBody>

  </>
}