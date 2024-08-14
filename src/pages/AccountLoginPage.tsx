import { GoogleButton } from "../auth/GoogleButton";
import { useUser } from "../auth/user";
import { CreateAccountForm } from "../blocks/CreateAccountForm";
import { OnboardingBlock } from "../blocks/OnboardingBlock";
import { QuickActionsBox } from "../blocks/QuickActionsBox";
import { PageBody, PageHeading } from "../layout/AppLayout";
import { h2ClassName } from "../reusable/styles";

export function AccountLoginPage() {
  const user = useUser()


  if (user) {
    return <>
      <PageHeading>Logged in successfully</PageHeading>
      <PageBody>
        <div>
          <h2 className={h2ClassName}>{user.email}</h2>
        </div>
        <OnboardingBlock />
        <QuickActionsBox />

      </PageBody>
    </>
  }

  return <>
    <PageHeading>Login</PageHeading>
    <PageBody>
      <GoogleButton />
      <CreateAccountForm />
    </PageBody>
  </>
}