import { LucideArrowRight } from "lucide-react"
import { NavLink } from "react-router-dom"
import { GoogleButton } from "../auth/GoogleButton"
import { useBalance } from "../model/balance"
import { useUser } from "../model/user"
import { hardButtonStyles } from "../reusable/HardButton"


export function NoAccountInfoBlock() {

  return (
    <div>
      <div className="mb-8 py-6 px-6 border border-orange-500 rounded-lg bg-orange-100">
        <h2 className={"font-medium text-text-orange-800 text-lg mb-3"}>
          You are not logged in
        </h2>

        <GoogleButton />

        <p>
          Start by selecting proxies you want to use.
        </p>

        <div>
          <NavLink
            className={hardButtonStyles + " inline-block mt-2 "}
            to={"/proxies/buy"} >
            Select proxies to buy
          </NavLink>
        </div>

        <p className=" mt-4">
          Have an account?{" "}
          <NavLink
            className={" text-indigo-600 font-semibold inline-block mt-2 "}
            to={"/account/login"} >
            Login<LucideArrowRight className="inline h-4" />
          </NavLink>
        </p>
      </div>
    </div>
  )
}
export function OnboardingBlock() {
  const user = useUser()
  const balance = useBalance()

  if (!user) {
    return <NoAccountInfoBlock />
  }

  // TODO if negative balance

  // TODO if no subscription with not repeat

  // TODO if 



}