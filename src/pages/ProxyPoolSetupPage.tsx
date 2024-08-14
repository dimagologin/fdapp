import { useState } from "react";
import { useUser } from "../auth/user";
import { OnboardingBlock } from "../blocks/OnboardingBlock";
import { PageBody, PageHeading } from "../layout/AppLayout";
import { useBalance } from "../model/balance";
import { ProxyType } from "../model/proxyKind";
import { useProxyList } from "../model/proxyList";
import { useTrafic } from "../model/traffic";

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

export function ProxyPoolSetupPage() {
  const user = useUser()
  const traffic = useTrafic()
  const balance = useBalance()
  const proxyList = useProxyList()
  const [proxyAmount, setProxyAmount] = useState(20)
  const [proxyPoolName, setProxyPoolName] = useState("Default proxy pool")

  return <>
    <PageHeading>Proxy pools</PageHeading>
    <PageBody>
      <OnboardingBlock />

    </PageBody>

  </>
}