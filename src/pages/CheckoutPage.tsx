import { LucideX } from "lucide-react";
import { NavLink, redirect } from "react-router-dom";
import { createSubscription } from "../api/payments";
import { useUser } from "../auth/user";
import { CreateAccountForm } from "../blocks/CreateAccountForm";
import { ExpandableOrderSummary } from "../blocks/ExpandableOrderSummary";
import { PaymentForm } from "../blocks/Outdated_PaymentForm";
import { PageBody, PageHeading } from "../layout/AppLayout";
import { mobile } from "../model/proxyKind";

export async function createSubscriptionCommand() {
  const response = await createSubscription(10, mobile);
  redirect(response.url);
}

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
      <CreateAccountForm />

      {user && <PaymentForm />}
    </PageBody>

  </>
}