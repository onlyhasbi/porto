import Footer from './_components/Footer/page';
import NavBar from './_components/NavBar/page';
import Tab from './_components/Tab/page';
import PortfolioCard from './_features/home/PortfolioCard';

export default function Home() {
  const tabItems = [
    { key: 'portofolio', label: 'Portfolio', content: <PortfolioCard /> },
  ];

  return (
    <>
      <NavBar />
      <main className="w-9/12 py-5 mx-auto h-[calc(100vh-9.5rem)]">
        <h2 className="font-bold text-2xl my-6">Create Instantly</h2>
        <Tab items={tabItems} />
      </main>
      <Footer />
    </>
  );
}
