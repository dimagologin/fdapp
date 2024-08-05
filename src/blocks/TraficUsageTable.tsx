import { h2ClassName } from "../reusable/styles"

const proxyPoolList = [
  { name: 'Mobile proxy pool (system)', title: 'mobile', traficGb: 12, pricePerGb: 2.95, priceTotal: 35.4 },
  { name: 'Residential proxy pool (system)', title: 'residential', traficGb: 0, pricePerGb: 2.95, priceTotal: 0 },
  { name: 'Data center proxy pool (system)', title: 'data center', traficGb: 0, pricePerGb: 0.89, priceTotal: 0 },
  // More people...
]

export default function TraficUsageTable() {
  return (
    <div className="">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className={"mt-6 mb-4 " + h2ClassName}>
            Trafic this month
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            This month trafic usage. <time dateTime="2022-08-01">August 1, 2024</time> to{' '}
            <time dateTime="2022-08-31">August 12, 2024</time>.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Buy more trafic
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
            {proxyPoolList.map((proxyPool) => (
              <tr key={proxyPool.id} className="border-b border-gray-200">
                <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div className="font-medium text-gray-900">{proxyPool.name}</div>
                  <div className="mt-1 truncate text-gray-500">{proxyPool.description}</div>
                </td>
                <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">${proxyPool.pricePerGb}</td>
                <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">{proxyPool.traficGb} GB</td>
                <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">${proxyPool.priceTotal}</td>
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
    </div>
  )
}
