import { useCharm } from "@kaigorod/charm";
import { LucideCopy, LucideDownload } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../auth/user";
import { OnboardingBlock } from "../blocks/OnboardingBlock";
import { LocationPicker } from "../blocks/Outdated_LocationPicker";
import { ProxyKindRadioBox } from "../blocks/ProxyKindSelector";
import { PageBody, PageHeading } from "../layout/AppLayout";
import { useBalance } from "../model/balance";
import { ProxyType, useProxyKind } from "../model/proxyKind";
import { useProxyList } from "../model/proxyList";
import { useHasActiveSubscriptionsForProxyKind, useSubscriptions } from "../model/subscriptions";
import { useTrafic } from "../model/traffic";
import { HardButton } from "../reusable/HardButton";
import { SoftButton } from "../reusable/SoftButton";
import { h2ClassName, linkClassName } from "../reusable/styles";

/*
  username: 'XLpraELOLNYEAD7W',
  password: 'cl6bBsh1Njm62pTm',
  port: 10080,
  host: 'geo-dc.floppydata.com',
*/
const proxyListToString = (proxyList: ProxyType[]) => {
  return proxyList.map(
    proxy => `https://${proxy.username}:${proxy.password}@${proxy.host}:${proxy.port}/`
  ).join("\n");
}

export function ProxyPoolDetailsPage() {
  const user = useUser()
  const traffic = useTrafic()
  const balance = useBalance()
  const proxyList = useProxyList()
  const proxyKind = useProxyKind()
  const [proxyAmount, setProxyAmount] = useState(20)
  const [proxyPoolName, setProxyPoolName] = useState("Default proxy pool")
  const subscriptions = useSubscriptions()
  const hasActiveSubscriptionsForProxyKind = useHasActiveSubscriptionsForProxyKind(proxyKind)
  const poolAndProxies = useCharm(poolAndProxiesCharm)

  return <>
    <PageHeading>Proxy pool details</PageHeading>
    <PageBody>
      <OnboardingBlock />

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
          <ProxyKindRadioBox readonly={true} proxyKind={subscription} selectedProxyKind={selectedProxyKind} />
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
          <HardButton onClick={() => 0}>
            Generate proxies
          </HardButton>
        </div>

        <h2 className={h2ClassName}>List of proxy server (with credentials)</h2>

        <textarea
          className="my-2 p-2 w-full text-sm leading-7 font-mono border rounded"
          rows={10} cols={40}
          value={proxyListToString(proxyList)}
        />

        <div>
          <SoftButton className="mr-4 ">
            Copy proxy pool <LucideCopy className="inline-block h-4" />
          </SoftButton>
          <SoftButton className="mr-4 ">
            Download as txt<LucideDownload className="inline-block h-4" />
          </SoftButton>
          {/* <SoftButton className="mr-4 ">
          Share via email<LucideForward className="inline-block h-4" />
        </SoftButton> */}
        </div>


      </div>
    </PageBody>

  </>
}