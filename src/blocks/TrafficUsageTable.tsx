import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { getUsageByProxyPools, ProxyMonthlyUsage } from "../api/proxyPools"
import { ProxyPoolName } from "../reusable/ProxyTypeName"
import { h2ClassName } from "../reusable/styles"


export default function TraficUsageTable() {
  const [proxyPoolList, setProxyPoolList] = useState<ProxyMonthlyUsage[]>([])
  useEffect(() => {
    getUsageByProxyPools().then(setProxyPoolList)
  }, [])


  return (
    <div className="">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className={"mt-6 mb-4 " + h2ClassName}>
            Trafic this month
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            This month traffic usage. <time dateTime="2022-08-01">August 1, 2024</time> to{' '}
            <time dateTime="2022-08-31">August 12, 2024</time>.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Buy more traffic
          </button>
        </div>
      </div>
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
              </th>
            </tr>
          </thead>
          <tbody>
            {proxyPoolList.map((pool) => (
              <tr key={pool.id} className="border-b border-gray-200">
                <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div className="font-medium text-gray-900">
                    <NavLink to={`/proxies/${pool.id}`}>

                      <ProxyPoolName tag_name={pool.tag_name} />
                    </NavLink>
                  </div>
                  <div className="mt-1 truncate text-gray-500">{pool.description}</div>
                </td>
                <td className="hidden px-3 py-5  text-sm text-gray-500 sm:table-cell">{pool.kind.name}</td>
                <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">${pool.pricePerGb}</td>
                <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">{pool.usedGb}GB</td>
                <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">${pool.priceTotal}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
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
          </tfoot>
        </table>
      </div>
    </div >
  )
}
