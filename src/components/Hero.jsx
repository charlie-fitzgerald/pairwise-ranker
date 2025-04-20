import { Link } from 'react-router-dom';

export default function Hero() {
    return (
      <section className="bg-gradient-to-b from-[#3b4cca] to-[#ff0000] text-white min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6">
            Who’s the Best Pokémon?
          </h2>
          <p className="font-body text-md sm:text-lg mb-8">
            The most powerful? The cutest? The derpiest? Who&apos;s the best? You decide!
          </p>
          <Link
            to="/vote"
            className="inline-block px-6 py-3 bg-white text-[#3b4cca] font-body font-semibold text-sm sm:text-base rounded-lg shadow hover:bg-[#ffde00] hover:text-[#3b4cca] transition"
          >
            Start Voting Now
          </Link>
          <p className="mt-4 text-sm font-body italic text-yellow-300">
            An ongoing experiment to find out which Pokemon really is the best!
          </p>
        </div>
      </section>
    );
  }
  