import { useState } from "react";
import { debugAddTenBucks } from "../api/debugFulfillBalance";
import { loadPaidTraficUsageInfo } from "../api/loadPaidTraficUsageInfo";
import { loadTraficUsageInfo } from "../api/loadTraficUsageInfo";
import { getTrafficByPoolName, listAllProxyPools } from "../api/proxyPools";
import { useUser } from "../auth/user";
import { PageBody, PageHeading } from "../layout/AppLayout";
import { dataCenter, mobile, residential } from "../model/proxyKind";
import { h2ClassName, linkClassName } from "../reusable/styles";



export function DebugRequestBlock({ title, request }) {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")

  const tryRequest = async () => {
    try {
      setValue('')
      setError('')
      await setValue(JSON.stringify(await request(), undefined, 2))
    } catch (e) {
      console.error(e);
      setError(e?.stack)
    }
  }
  return <>
    <div className="">
      <h1 className="text-2xl py-3">{title}</h1>
      <button className="my-2 p-2 border и border-orange-700 rounded cursor-poiner"
        onClick={tryRequest}>Make request</button>

      <pre>
        {value}
      </pre>
      {
        !!error && <>
          <div className="text-red-600">
            <h1 className="text-xl font-medium py-3">Error stack</h1>
            <pre>
              {error}
            </pre>
          </div>
        </>
      }
    </div>
    <hr className="mt-4 mb-6 " />
  </>
}
export function DebugPage() {
  const user = useUser()

  return <>
    <PageHeading>DEBUG</PageHeading>
    <PageBody>

      <div className="mb-8">
        <h2 className={h2ClassName}>{user?.email}</h2>
        {!user && <a className={linkClassName} href="/account/login" >Login</a>}
      </div>

      <DebugRequestBlock title="List all proxy pools" request={() => listAllProxyPools()} />
      <DebugRequestBlock title="Get trafic" request={async () => await getTrafficByPoolName("demo_tag_r")} />

      <DebugRequestBlock title="Load residential traffic info" request={() => loadTraficUsageInfo(residential)} />
      <DebugRequestBlock title="Load mobile traffic info" request={() => loadTraficUsageInfo(mobile)} />
      <DebugRequestBlock title="Load data center traffic info" request={() => loadTraficUsageInfo(dataCenter)} />

      <DebugRequestBlock title="Load paid residential traffic info" request={() => loadPaidTraficUsageInfo(residential)} />
      <DebugRequestBlock title="Load paid mobile traffic info" request={() => loadPaidTraficUsageInfo(mobile)} />
      <DebugRequestBlock title="Load paid data center traffic info" request={() => loadPaidTraficUsageInfo(dataCenter)} />

      <DebugRequestBlock title="Add $10" request={() => debugAddTenBucks(residential)} />
    </PageBody >

  </>
}