import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="bg-[#0B0F19]/60 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full flex justify-between items-center shadow-2xl">
        <div className="text-white font-bold text-xl tracking-tight">
          Abc<span className="text-indigo-500">.</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-gray-400 text-sm font-medium">
          <Link href="#home" className="hover:text-white transition-colors">Home</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        <button className="p-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all">
          {/* Simple Toggle Icon Placeholder */}
          <div className="w-5 h-5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;