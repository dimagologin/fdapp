import { Footer } from "../Footer";
import { TopNav } from "../TopNav";

export const pageMainColumnClassName = " container w-[80rem] mx-auto "


export function PageHeading({ children }) {
  return <div className="bg-gray-800 pt-5 pb-5 ">
    <div className={pageMainColumnClassName + ""}>
      <h1 className="text-2xl leading-7 font-semibold text-white">
        {children}
      </h1>
    </div>
  </div>
}

export function PageBody({ children }) {
  return <div className={pageMainColumnClassName + "py-10 bg-gray-50 "}>
    {children}
  </div>
}

export function Layout({ children }) {
  return <div className="bg-gray-50 text-gray-900">
    <TopNav />
    {children}
    <Footer />
  </div>
}