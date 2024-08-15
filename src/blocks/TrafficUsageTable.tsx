import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { loadProxyPoolsBySubscription } from "../api/loadProxyPoolsBySubscription"
import { SubscriptionType } from "../api/loadSubscriptionList"
import { tiers } from "../api/loadTiers"
import { TrafficType } from "../api/loadTraffic"
import { formatBytesToGb } from "../model/formatBytesToGb"
import { PoolType } from "../model/PoolType"
import { formatCurrency } from "../model/pricing"
import { ProxyPoolName } from "../reusable/ProxyTypeName"
import { h2ClassName } from "../reusable/styles"


export default function TraficUsageTable({ subscription, traffic }: { subscription: SubscriptionType, traffic: TrafficType }) {
  const [proxyPoolList, setProxyPoolList] = useState<PoolType[]>([])

  useEffect(() => {
    loadProxyPoolsBySubscription(subscription.id).then(list => {
      console.log("setProxyPoolList", { list });
      setProxyPoolList(list);
    });
  }, [])

  const tier = tiers[subscription.tierId];

  return (
    <div className="">
      <h1 className={h2ClassName}>{subscription.proxyKind.title} proxy traffic subscription</h1>
      <p>
        This subscription includes {" "}
        <strong>{formatBytesToGb(subscription.trafficGb)}GB</strong>{" "}
        of{" "}
        <strong>{subscription.proxyKind.title}</strong>{" "}
        traffic and gives{" "}
        <strong>{tier.DiscountPercent}%</strong> traffic cost discount.{" "}
        1GB costs{" "}
        <strong>{formatCurrency(tier.PricePerGB)}</strong> instead of{" "}
        <s>{formatCurrency(subscription.proxyKind.price)}</s>.
      </p>
      <p>
        Traffic used: <strong>{formatBytesToGb(traffic?.bytes_used)}GB</strong>
      </p>
      <div className="-mx-4 mt-8 flow-root sm:mx-0">
        <table className="min-w-full">
          <colgroup>
            <col className="w-full sm:w-1/2" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
          </colgroup>
          <thead className="border-b border-gray-300 text-gray-900">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                Proxy pool
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Countries
              </th>
              {/* <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Type
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Price, per GB
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Trafic used
              </th>
              <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                Price
              </th> */}
            </tr>
          </thead>
          <tbody>
            {proxyPoolList.map((pool) => (
              <tr key={pool.id} className="border-b border-gray-200">
                <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div className="font-medium text-gray-900">
                    {/* {JSON.stringify({ pool })} */}
                    <NavLink to={`/proxy-pool/${pool.id}`}>

                      <ProxyPoolName tag_name={pool.pool_name} />
                    </NavLink>
                  </div>
                  {/* <div className="mt-1 truncate text-gray-500"></div> */}
                </td>
                <td className="hidden px-3 py-5  text-sm text-gray-500 sm:table-cell">{pool.countries.join(", ")}</td>
                {/* <td className="hidden px-3 py-5  text-sm text-gray-500 sm:table-cell">{subscription.proxyKind.title}</td>
                <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">${pool.pricePerGb}</td>
                <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">{pool.usedGb}GB</td>
                <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">${pool.priceTotal}</td> */}
              </tr>
            ))}
          </tbody>
          {/* <tfoot>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
              >
                Total usage
              </th>
              <th scope="row" className="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">
                Total usage
              </th>
              <td className="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-0">$35.40</td>
            </tr>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
              >
                Remaining
              </th>
              <th scope="row" className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">
                Trafic remaining
              </th>
              <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">$64.60</td>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </div >
  )
}
