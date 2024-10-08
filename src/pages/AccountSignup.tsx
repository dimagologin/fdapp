import { useUser } from "../auth/user";
import { CreateAccountForm } from "../blocks/CreateAccountForm";
import { PageBody, PageHeading } from "../layout/AppLayout";

export function AccountSignupPage() {
  const user = useUser()
  return <>
    <PageHeading>Sign up</PageHeading>
    <PageBody>
      <CreateAccountForm />
    </PageBody>
  </>
}