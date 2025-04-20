import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-[#3b4cca] p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white font-display text-lg sm:text-xl tracking-wide">
          PokéVote
        </h1>
        <nav className="space-x-4">
          <Link to="/rankings" className="text-white font-body text-sm hover:text-[#ff0000] transition">Rankings</Link>
          <Link to="/stats" className="text-white font-body text-sm hover:text-[#ff0000] transition">Stats</Link>
          <Link to="/login" className="text-white font-body text-sm hover:text-[#ff0000] transition">Login</Link>
        </nav>
      </div>
    </header>
  );
}