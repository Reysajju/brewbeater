import { Coffee } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Coffee className="h-8 w-8 text-amber-500" />
            <span className="text-white font-bold text-xl">BrewBeater</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-white hover:text-amber-500 transition">Features</a>
            <a href="#specs" className="text-white hover:text-amber-500 transition">Specs</a>
            <button className="bg-amber-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-amber-400 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}