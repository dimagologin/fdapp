import { useUser } from "../auth/user";
import { CreateAccountForm } from "../blocks/CreateAccountForm";
import { PageBody, PageHeading } from "../layout/AppLayout";
import { h2ClassName } from "../reusable/styles";

export function PaymentSuccessPage() {
  const user = useUser()
  return <>
    <PageHeading >
      Payment successful
    </PageHeading>
    <PageBody>
      <div className="">
        <div>
          <h1 className={h2ClassName}>Payment successful</h1>
        </div>
        <div>
        </div>

        {!user &&
          <CreateAccountForm />
        }


      </div>

    </PageBody>

  </>
}