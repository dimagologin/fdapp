import { LucideArrowRight } from "lucide-react"
import { NavLink } from "react-router-dom"
import { hardButtonStyles } from "./HardButton"
import { useBalance, useUser } from "./state/state"


export function OnboardingBlock() {
  const user = useUser()
  const balance = useBalance()

  return <div>
    {!user &&
      <div className="mb-8 py-6 px-6 border border-orange-500 rounded-lg bg-orange-100">
        <h2 className={"font-medium text-text-orange-800 text-lg mb-3"}>
          You are not logged in
        </h2>

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
            to={"/proxies/buy"} >
            Login<LucideArrowRight className="inline h-4" />
          </NavLink>
        </p>
      </div>
    }
  </div>
}