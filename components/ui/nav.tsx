import Link from "next/link"
import { Button } from "./button"

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Lyra</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/image" className="transition-colors hover:text-foreground/80">
              Image
            </Link>
            <Link href="/video" className="transition-colors hover:text-foreground/80">
              Video
            </Link>
            <Link href="/chat" className="transition-colors hover:text-foreground/80">
              Chat
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </nav>
        </div>
      </div>
    </header>
  )
} 