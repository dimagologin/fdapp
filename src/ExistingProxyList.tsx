import { LucideCopy, LucideDownload, LucideForward } from "lucide-react";

function ExistingProxyList() {
  return <div>
    <p>Select proxy locations and number of unique IPs to generate list of proxy server.</p>

    <div>
      <h2 className={"mt-6 mb-4 text-lg "}>
        Proxy location
      </h2>


    </div>


    <div>
      <h3 className="mt-6 mb-2 font-regular">
        Number of proxies
      </h3>
      <input
        className="bg-white border p-2 mb-2 rounded"
        value={10}>
      </input>
    </div>


    <div>
      <button className="py-2 px-4 border bg-indigo-600 text-indigo-100 rounded-lg">
        Generate proxies
      </button>
    </div>

    <h3 className="mt-6 mb-2 font-regular">
      Proxy list
    </h3>
    <textarea rows={10} cols={40} className="w-full border rounded my-2" />

    <div>
      <button className="inline-block py-1 px-2 mr-2 border border-indigo-600 text-sm text-indigo-600 font-semibold rounded-lg">
        Copy proxy list <LucideCopy className="inline-block h-4" />
      </button>
      <button className="inline-block py-1 px-2 mr-2 border border-indigo-600 text-sm text-indigo-600 font-semibold rounded-lg">
        Download as txt<LucideDownload className="inline-block h-4" />
      </button>
      <button className="inline-block py-1 px-2 mr-2 border border-indigo-600 text-sm text-indigo-600 font-semibold rounded-lg">
        Share via email<LucideForward className="inline-block h-4" />
      </button>
    </div>

  </div >

}