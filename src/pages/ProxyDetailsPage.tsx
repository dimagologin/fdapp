import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrafficByPoolId } from "../api/proxyPools";
import { OnboardingBlock } from "../blocks/OnboardingBlock";
import { PageBody, PageHeading } from "../layout/AppLayout";
import { h2ClassName } from "../reusable/styles";

export function ProxyDetailsPage({ }) {
  const [traffic, setTraffic] = useState({})
  const params = useParams()
  const proxyPoolId = Number.parseInt(params.proxyPoolId);

  useEffect(() => {
    getTrafficByPoolId(proxyPoolId).then(setTraffic)
  }, [proxyPoolId])

  return <>
    <PageHeading>Proxy pools </PageHeading>
    <PageBody>
      <OnboardingBlock />

      <h1 className={h2ClassName}>{traffic.Name}</h1>

      <pre>
        {JSON.stringify(traffic, 0, 2)}
      </pre>

    </PageBody>
  </>
}