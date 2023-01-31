type ButtonProps = {
  children: React.ReactNode,
  onClick: () => void,
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="bg-zinc-100 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-500 w-6 py-1 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
