import Footer from './_components/Footer';
import NavBar from './_components/NavBar';
import Tab from './_components/ui/Tab';
import PortfolioCard from './_features/home/PortfolioCard';

export default function Home() {
  const tabItems = [
    { key: 'portofolio', label: 'Portfolio', content: <PortfolioCard /> },
  ];

  return (
    <div className="relative min-h-screen">
      <NavBar />
      <main className="w-9/12 py-5 mx-auto">
        <h2 className="font-bold text-2xl my-6">Create Instantly</h2>
        <Tab items={tabItems} />
      </main>
      <Footer />
    </div>
  );
}
