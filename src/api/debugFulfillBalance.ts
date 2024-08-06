import { ProxyKind } from '../model/proxyKind';
import { httpApi } from './api';

export const debugAddTenBucks = async (proxyKind: ProxyKind) => {
  return await httpApi('tags/traffic', {
    // "tag_id": 0,
    tag_name: 'demo_tag_r',
    tag_values: [
      {
        tag_key: 'TRAFFIC_PAID',
        tag_value: '10',
      },
    ],
  });
};
