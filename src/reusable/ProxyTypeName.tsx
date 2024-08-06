import { dataCenter, mobile, residential } from "../model/proxyKind";

export const isSystemPoolName = (tag_name: string) => {
  if (!tag_name) {
    return false
  }
  if (
    tag_name.endsWith(mobile.postfix) ||
    tag_name.endsWith(residential.postfix) ||
    tag_name.endsWith(dataCenter.postfix)
  ) {
    return true;
  }
  return false;
}

export const ProxyPoolName = ({ tag_name }: { tag_name: string }) => {
  if (!tag_name) {
    return <span className="font-light">No name</span>
  }
  if (tag_name.endsWith(mobile.postfix)) {
    return <span className="font-light"><span className="font-semibold">Mobile proxy pool</span> system</span>
  }
  if (tag_name.endsWith(residential.postfix)) {
    return <span className="font-light"><span className="font-medium">Residential proxy pool</span> system</span>
  }
  if (tag_name.endsWith(dataCenter.postfix)) {
    return <span className="font-light"><span className="font-medium">Data center proxy pool</span> system</span>
  }
  return <span className="font-medium">{tag_name}</span>
}