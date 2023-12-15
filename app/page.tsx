import Tab from './_components/Tab/page';
import PortfolioCard from './_features/home/PortfolioCard';


export default function Home() {

  const tabItems = [
    { key: 'portofolio', label: 'Portfolio', content: <PortfolioCard /> },
  ];

  return (
    <>
      <h2 className="font-bold text-2xl my-6">Create Instantly</h2>
      <Tab items={tabItems} />
    </>
  );
}
