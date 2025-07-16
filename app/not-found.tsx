import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Not Found</h2>
        <p className="text-white/80 mb-6">Could not find the requested resource</p>
        <Link href="/" className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  )
}
