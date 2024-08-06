import { LucideArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { h2ClassName } from "../reusable/styles";

export function QuickActionsBox() {
  return <div>
    <h2 className={"mt-6 mb-4 " + h2ClassName}>
      Quick actions
    </h2>
    <p className="my-4">
      <NavLink
        className="text-indigo-600 underline"
        to={"/proxies/buy"}
      >

        Buy more proxy traffic
        <LucideArrowRight className="inline-block h-4" />
      </NavLink>
    </p>
    <p className="my-4">
      <NavLink
        className="text-indigo-600 underline"
        to={"/proxies/buy"}
      >
        Create new proxy pool
        <LucideArrowRight className="inline-block h-4" />
      </NavLink>
    </p>
    <p className="my-4">
      <NavLink
        className="text-indigo-600 underline"
        to={"/proxies/buy"}
      >
        Change password
        <LucideArrowRight className="inline-block h-4" />
      </NavLink>
    </p>
    <p className="my-4">
      <NavLink
        className="text-indigo-600 underline"
        to={"/proxies/buy"}
      >
        Contact support
        <LucideArrowRight className="inline-block h-4" />
      </NavLink>
    </p>

  </div>
}