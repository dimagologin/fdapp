import { Footer } from "./Footer";
import { TopNav } from "./TopNav";

export function Layout({ children }) {
  return <div className="bg-gray-50 text-gray-900">
    <TopNav />
    <div className="container bg-gray-50 mx-auto p-6">
      {children}
    </div>
    <Footer />
  </div>
}