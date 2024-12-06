import { Button } from '@/components/ui/button'
import { UserCircle, Store, Building2 } from 'lucide-react'

export default function LoginOptions() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">Choose Your Role</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Button variant="outline" className="h-auto py-8 flex flex-col items-center border-2 border-slate-300 hover:border-slate-400 transition-colors">
            <UserCircle className="w-16 h-16 mb-4 text-slate-600" />
            <span className="text-xl font-semibold text-slate-700">Login as Buyer</span>
          </Button>
          <Button variant="outline" className="h-auto py-8 flex flex-col items-center border-2 border-slate-300 hover:border-slate-400 transition-colors">
            <Store className="w-16 h-16 mb-4 text-slate-600" />
            <span className="text-xl font-semibold text-slate-700">Login as Seller</span>
          </Button>
          <Button variant="outline" className="h-auto py-8 flex flex-col items-center border-2 border-slate-300 hover:border-slate-400 transition-colors">
            <Building2 className="w-16 h-16 mb-4 text-slate-600" />
            <span className="text-xl font-semibold text-slate-700">Login as Registrar</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

