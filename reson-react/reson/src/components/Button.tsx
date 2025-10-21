import { FC } from "react"
import { twMerge } from "tailwind-merge"

const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={twMerge(
        "bg-black rounded-lg px-4 py-1.5 text-white text-sm flex flex-row items-center justify-center gap-2 transition duration-200 hover:opacity-70 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
