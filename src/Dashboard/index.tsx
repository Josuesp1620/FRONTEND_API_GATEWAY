
import { Header } from "./Header"

export function Dashboard({
  children
}: React.PropsWithChildren) {
  return (
  <div className="flex min-h-screen w-full flex-col bg-muted/40">

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 sm:pr-14">
        <Header />
        {children}
      </div>
    </div>
  )
}
