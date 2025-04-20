import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-body">
      <Header />
      <Hero />
      {/* Additional sections like RankingsPreview, StatsPreview, etc. */}
      <Footer />
    </div>
  );
}

export default App;
