import { ProxyKind } from "../model/proxyKind";
import { httpApi } from "./api";
import { getUserFromLocalStorage } from "./auth";

export const loadTraficUsageInfo = async (proxyKind: ProxyKind) => {
  return await httpApi('tags/traffic', {
    tag_name: getUserFromLocalStorage().email + proxyKind.postfix
  });
};
