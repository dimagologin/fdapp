import { ProxyKind } from "../model/proxyKind";
import { httpApi } from "./api";
import { getUserFromLocalStorage } from "./auth";

export const loadPaidTraficUsageInfo = async (proxyKind: ProxyKind) => {
  return await httpApi('tags/paid_traffic', {
    tag_name: getUserFromLocalStorage().email + proxyKind.postfix
  });
};
