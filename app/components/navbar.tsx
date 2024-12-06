import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          BlockLand Registry
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" className="text-white hover:text-slate-200">Home</Button>
          <Button variant="ghost" className="text-white hover:text-slate-200">About</Button>
          <Button variant="ghost" className="text-white hover:text-slate-200">Contact</Button>
        </div>
      </div>
    </nav>
  )
}

