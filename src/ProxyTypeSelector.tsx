import clsx from "clsx";
import { dataCenter, mobile, residential, setProxyType, useProxyType } from "./state/proxyType";

export function ProxyTypeRadioBox({ proxyType, selectedProxyType, setProxyType }) {
  const isActive = proxyType === selectedProxyType;

  return <div className={clsx({
    "flex p-4 bg-white border border-1  rounded-lg cursor-pointer ring-2 -ring-offset-1": 1,
    "border-gray-200 ring-transparent hover:border-transparent hover:ring-indigo-500/50": !isActive,
    "border-transparent  ring-indigo-500": isActive,
  })}
    onClick={() => setProxyType(proxyType)}
  >
    <span className="flex-1">
      <span className="font-semibold text-gray-800">{proxyType.title}</span>
      <br />
      {proxyType.description}
      <br />
      <span className="text-gray-800 font-semibold">{proxyType.priceStr}</span>{" "}
      <span className="text-gray-400 font-regular">/ GB</span>
    </span>
    <proxyType.Icon className={clsx({ 'stroke-gray-200': !isActive, "stroke-indigo-600": isActive })} />
  </div>
}

export function ProxyTypeSelector({ selectedProxyType, setProxyType }) {
  return <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
    <ProxyTypeRadioBox proxyType={mobile} selectedProxyType={selectedProxyType} setProxyType={setProxyType} />
    <ProxyTypeRadioBox proxyType={residential} selectedProxyType={selectedProxyType} setProxyType={setProxyType} />
    <ProxyTypeRadioBox proxyType={dataCenter} selectedProxyType={selectedProxyType} setProxyType={setProxyType} />
  </div>
}

export function CalculatorProxyTypeSelector({ }) {
  const proxyType = useProxyType();

  return <ProxyTypeSelector
    selectedProxyType={proxyType}
    setProxyType={setProxyType}
  />
}
export const GeneratorProxyTypeSelector = CalculatorProxyTypeSelector;
