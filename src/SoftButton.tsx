export function SoftButton({ children, className = "", ...props }) {
  return <button
    className={
      "rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm " +
      " border border-indigo-800 text-indigo-800 " +
      " over:border-indigo-500 focus-visible:outline"

      + " " + className
    }
    {...props} >
    {children}
  </button>
}