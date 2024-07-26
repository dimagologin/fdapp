export function HardButton({ children, className = "", ...props }) {
  return <button
    className={
      "px-5 my-4 py-3 text-sm leading-[14px] bg-fuchsia-900 text-white  " +
      "border border-[2px] border-fuchsia-900 hover:bg-fuchsia-50 hover:text-fuchsia-900 " +
      className
    }
    {...props} >
    {children}
  </button>
}