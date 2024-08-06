import { LucideCopy, LucideDownload } from "lucide-react";
import { generateMultipleProxies } from "../api/createProxyPool";
import { OnboardingBlock } from "../blocks/OnboardingBlock";
import { LocationPicker } from "../blocks/Outdated_LocationPicker";
import { GeneratorProxyKindSelector } from "../blocks/ProxyKindSelector";
import { PageBody, PageHeading } from "../layout/AppLayout";
import { useBalance } from "../model/balance";
import { getProxyCountry } from "../model/proxyCountry";
import { getProxyKind, ProxyType } from "../model/proxyKind";
import { useProxyList } from "../model/proxyList";
import { useTrafic } from "../model/traffic";
import { useUser } from "../model/user";
import { HardButton } from "../reusable/HardButton";
import { SoftButton } from "../reusable/SoftButton";
import { h2ClassName } from "../reusable/styles";

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

export function GenerateProxiesPage() {
  const user = useUser()
  const traffic = useTrafic()
  const balance = useBalance()
  const proxyList = useProxyList()

  return <>
    <PageHeading>Generate proxy pool</PageHeading>
    <PageBody>
      <OnboardingBlock />

      <h2 className={"mt-6 mb-4 " + h2ClassName}>
        Generate proxy pool
      </h2>

      <p className="text-gray">
        You have no proxy pools yet. Let's create your first proxy pool.
      </p>

      <div>
        <h2 className={h2ClassName}>Proxy type</h2>
        <div className="mt-2 mb-4">
          <GeneratorProxyKindSelector />
        </div>
        <div className="mb-4">
          <h2 className={h2ClassName}>
            Proxy locations
          </h2>

          <div>
            <LocationPicker />
          </div>
        </div>

        <div>
          <HardButton onClick={() => generateMultipleProxies(getProxyKind(), getProxyCountry().countryCode, 5)}>
            Generate proxy
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