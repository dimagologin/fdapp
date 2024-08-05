import { CreateAccountForm } from "../blocks/CreateAccountForm";
import { PageBody, PageHeading } from "../layout/AppLayout";
import { useUser } from "../model/user";

export function AccountLoginPage() {
  const user = useUser()
  return <>
    <PageHeading>Sign up</PageHeading>
    <PageBody>
      <CreateAccountForm />
    </PageBody>
  </>
}