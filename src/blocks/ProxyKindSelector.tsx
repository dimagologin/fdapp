import clsx from "clsx";
import { dataCenter, mobile, ProxyKind, residential, setProxyKind, useProxyKind } from "../model/proxyKind";

export function ProxyKindRadioBox({ readonly = false, proxyKind, selectedProxyKind }) {
  const isActive = proxyKind === selectedProxyKind;
  const selectThisProxyKind = readonly ? () => { } : () => setProxyKind(proxyKind);

  return <div className={clsx({
    "flex p-4 bg-white border border-1  rounded-lg cursor-pointer ring-2 -ring-offset-1": 1,
    "border-gray-200 ring-transparent hover:border-transparent hover:ring-indigo-500/50": !isActive,
    "border-transparent  ring-indigo-500": isActive,
  })}
    onClick={selectThisProxyKind}
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

export type ProxyKindSelectorParams = {
  readonly: boolean,
  selectedProxyKind: ProxyKind,
};

export function ProxyKindSelector({ readonly = false, selectedProxyKind }: ProxyKindSelectorParams) {
  return <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
    <ProxyKindRadioBox readonly={readonly} proxyKind={mobile} selectedProxyKind={selectedProxyKind} />
    <ProxyKindRadioBox readonly={readonly} proxyKind={residential} selectedProxyKind={selectedProxyKind} />
    <ProxyKindRadioBox readonly={readonly} proxyKind={dataCenter} selectedProxyKind={selectedProxyKind} />
  </div>
}

export function CalculatorProxyKindSelector({ readonly = false }: { readonly: boolean }) {
  const proxyKind = useProxyKind();

  return <ProxyKindSelector
    selectedProxyKind={proxyKind}
    readonly={readonly}
  />
}
export const GeneratorProxyKindSelector = CalculatorProxyKindSelector;
