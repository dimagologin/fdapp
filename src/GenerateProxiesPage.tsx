import { LucideCopy, LucideDownload } from "lucide-react";
import { generateMultipleProxies } from "./api/generateMultipleProxies";
import { h2Classes } from "./DashboardPage";
import { HardButton } from "./HardButton";
import { PageBody, PageHeading } from "./layout/Layout";
import { LocationPicker } from "./LocationPicker";
import { OnboardingBlock } from "./OnboardingBlock";
import { GeneratorProxyKindSelector } from "./ProxyKindSelector";
import { SoftButton } from "./SoftButton";
import { useBalance } from "./state/balance";
import { ProxyType } from "./state/proxyKind";
import { useProxyList } from "./state/proxyList";
import { useTrafic } from "./state/trafic";
import { useUser } from "./state/user";

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
  const trafic = useTrafic()
  const balance = useBalance()
  const proxyList = useProxyList()

  return <>
    <PageHeading>Generate proxy pool</PageHeading>
    <PageBody>
      <OnboardingBlock />

      <h2 className={"mt-6 mb-4 " + h2Classes}>
        Generate proxy pool
      </h2>

      <p className="text-gray">
        You have no proxy pools yet. Let's create your first proxy pool.
      </p>

      <div>
        <h2 className={h2Classes}>Proxy type</h2>
        <div className="mt-2 mb-4">
          <GeneratorProxyKindSelector />
        </div>
        <div className="mb-4">
          <h2 className={h2Classes}>
            Proxy locations
          </h2>

          <div>
            <LocationPicker />
          </div>
        </div>

        <div>
          <HardButton onClick={() => generateMultipleProxies()}>
            Generate proxy
          </HardButton>
        </div>

        <h2 className={h2Classes}>List of proxy server (with credentials)</h2>

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