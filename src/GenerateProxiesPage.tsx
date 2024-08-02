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
import { useProxyList } from "./state/proxyList";
import { useTrafic } from "./state/trafic";
import { useUser } from "./state/user";

const proxyListToString = (proxyList) => {
  return proxyList.map(JSON.stringify).join("\n")
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

        <textarea rows={10} cols={40} className="w-full border rounded my-2" value={proxyListToString(proxyList)} />

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