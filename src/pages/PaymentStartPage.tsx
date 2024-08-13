import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../auth/user";
import { PageBody, PageHeading } from "../layout/AppLayout";

export function PaymentStartPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/payment/test-payment-form');
  }, []);
  const user = useUser()
  return <>
    <PageHeading >Redirecting...</PageHeading>
    <PageBody>
      Redirecting...
    </PageBody>

  </>
}