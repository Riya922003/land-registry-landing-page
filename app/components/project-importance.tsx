import { Shield, TrendingUp, FileCheck } from 'lucide-react'

export default function ProjectImportance() {
  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Why BlockLand Registry Matters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <Shield className="w-16 h-16 mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2 text-slate-700">Enhanced Security</h3>
            <p className="text-slate-600">Blockchain technology ensures tamper-proof records and prevents fraud in land transactions.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <TrendingUp className="w-16 h-16 mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2 text-slate-700">Increased Efficiency</h3>
            <p className="text-slate-600">Streamlined processes reduce bureaucracy and speed up land registry procedures.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <FileCheck className="w-16 h-16 mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2 text-slate-700">Transparent Transactions</h3>
            <p className="text-slate-600">All parties involved can easily verify and track the status of land ownership and transfers.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

