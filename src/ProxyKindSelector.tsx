import clsx from "clsx";
import { dataCenter, mobile, residential, setProxyKind, useProxyKind } from "./state/proxyKind";

export function ProxyKindRadioBox({ proxyKind, selectedProxyKind, setProxyKind }) {
  const isActive = proxyKind === selectedProxyKind;

  return <div className={clsx({
    "flex p-4 bg-white border border-1  rounded-lg cursor-pointer ring-2 -ring-offset-1": 1,
    "border-gray-200 ring-transparent hover:border-transparent hover:ring-indigo-500/50": !isActive,
    "border-transparent  ring-indigo-500": isActive,
  })}
    onClick={() => setProxyKind(proxyKind)}
  >
    <span className="flex-1">
      <span className="font-semibold text-gray-800">{proxyKind.title}</span>
      <br />
      {proxyKind.description}
      <br />
      <span className="text-gray-800 font-semibold">{proxyKind.priceStr}</span>{" "}
      <span className="text-gray-400 font-regular">/ GB</span>
    </span>
    <proxyKind.Icon className={clsx({ 'stroke-gray-200': !isActive, "stroke-indigo-600": isActive })} />
  </div>
}

export function ProxyKindSelector({ selectedProxyKind, setProxyKind }) {
  return <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
    <ProxyKindRadioBox proxyKind={mobile} selectedProxyKind={selectedProxyKind} setProxyKind={setProxyKind} />
    <ProxyKindRadioBox proxyKind={residential} selectedProxyKind={selectedProxyKind} setProxyKind={setProxyKind} />
    <ProxyKindRadioBox proxyKind={dataCenter} selectedProxyKind={selectedProxyKind} setProxyKind={setProxyKind} />
  </div>
}

export function CalculatorProxyKindSelector({ }) {
  const proxyKind = useProxyKind();

  return <ProxyKindSelector
    selectedProxyKind={proxyKind}
    setProxyKind={setProxyKind}
  />
}
export const GeneratorProxyKindSelector = CalculatorProxyKindSelector;
