import { Footer } from "./Footer";
import { TopNav } from "./TopNav";

export function Layout({ children }) {
  return <div className="bg-gray-50 text-gray-900">
    <TopNav />
    <div className="container max-w-7xl mt-10 bg-gray-50 mx-auto p-6">
      {children}
    </div>
    <Footer />
  </div>
}