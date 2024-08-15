import { charm } from "@kaigorod/charm";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CreatePoolReturnType, nicelyCreateNewProxyPoolAndGenerateProxies } from "../api/nicelyCreateNewProxyPoolAndGenerateProxies";
import { useUser } from "../auth/user";
import { OnboardingBlock } from "../blocks/OnboardingBlock";
import { LocationPicker } from "../blocks/Outdated_LocationPicker";
import { GeneratorProxyKindSelector } from "../blocks/ProxyKindSelector";
import { PageBody, PageHeading } from "../layout/AppLayout";
import { useBalance } from "../model/balance";
import { getProxyCountry } from "../model/proxyCountry";
import { getProxyKind, useProxyKind } from "../model/proxyKind";
import { useProxyList } from "../model/proxyList";
import { useHasActiveSubscriptionsForProxyKind, useSubscriptions } from "../model/subscriptions";
import { useTrafic } from "../model/traffic";
import { HardButton } from "../reusable/HardButton";
import { h2ClassName, linkClassName } from "../reusable/styles";

export const poolAndProxiesCharm = charm<CreatePoolReturnType | undefined>(undefined)

export function ProxyPoolCreatePage() {
  const user = useUser()
  const traffic = useTrafic()
  const balance = useBalance()
  const proxyList = useProxyList()
  const proxyKind = useProxyKind()
  const [proxyAmount, setProxyAmount] = useState(20)
  const [proxyPoolName, setProxyPoolName] = useState("Default proxy pool")
  const subscriptions = useSubscriptions()
  const hasActiveSubscriptionsForProxyKind = useHasActiveSubscriptionsForProxyKind(proxyKind)
  const navigate = useNavigate();

  const doId = async () => {
    const poolAndProxies: CreatePoolReturnType = await nicelyCreateNewProxyPoolAndGenerateProxies(
      proxyPoolName,
      getProxyKind(),
      [getProxyCountry().countryCode],
      proxyAmount
    );
    poolAndProxiesCharm.set(poolAndProxies);
    navigate(poolAndProxies.proxyPoolUrl)
  }


  return <>
    <PageHeading>Create proxy pool</PageHeading>
    <PageBody>
      <OnboardingBlock />

      <h2 className={"mt-6 mb-4 " + h2ClassName}>
        Create new proxy pool and generate proxies
      </h2>

      <div>
        <div className="mb-4">
          <h2 className={h2ClassName}>
            Proxy pool name
          </h2>
          <div>
            <label htmlFor="proxyAmount" className="block text-sm font-medium leading-6 text-gray-900">
              Name helps distinguishing proxy pool amoung others when you have multiple proxy pools.
              You can rename proxy pool when needed.
            </label>
          </div>

          <div>
            <input
              className="mt-2 py-1.5 px-3 border rounded text-sm text-gray-900"
              id="proxyPoolName" minLength={1} maxLength={40} value={proxyPoolName}
              onChange={e => setProxyPoolName(e.target.value)} />
          </div>
        </div>

        <h2 className={h2ClassName}>Proxy type</h2>
        <div className="mt-2 mb-4">
          <GeneratorProxyKindSelector readonly={false} />
        </div>
        {
          !hasActiveSubscriptionsForProxyKind &&
          <div className="px-8 pb-8 border border-2 border-amber-700 rounded-lg">
            <h2 className={h2ClassName}>
              You have no active {proxyKind.title.toLowerCase()} subscriptions
            </h2>
            <p>
              <NavLink className={linkClassName} to={"/proxies/buy"}>
                Buy {proxyKind.title.toLowerCase()} subscription
              </NavLink> or change proxy type.
            </p>
          </div>
        }
        <div className="mb-4">
          <h2 className={h2ClassName}>
            Proxy locations
          </h2>

          <div>
            <LocationPicker />
          </div>
        </div>
        <div className="mb-4">
          <h2 className={h2ClassName}>
            Amount of unique IP-addresses
          </h2>
          <div>
            <label htmlFor="proxyAmount" className="block text-sm font-medium leading-6 text-gray-900">
              How many proxies do you want to generate right now?
              You can add more proxies in this proxy pool when needed.
            </label>
          </div>

          <div>
            <input
              className="py-1.5 px-3 border rounded text-sm text-gray-900"
              id="proxyAmount" type="number" min={1} max={999} value={proxyAmount}
              onChange={e => setProxyAmount(e.target.value)} />
          </div>
        </div>

        <div>
          <HardButton onClick={async () => navigate(await nicelyCreateNewProxyPoolAndGenerateProxies(proxyPoolName, getProxyKind(), [getProxyCountry().countryCode], proxyAmount))}>
            Create new proxy pool and generate proxies now
          </HardButton>
        </div>

      </div>
    </PageBody>

  </>
}