import Tab from './_components/Tab/page';

const tabItems = [
  { key: 'portofolio', label: 'Portofolio', content: <>content</> },
];
export default function Home() {
  return (
    <>
      <h2 className="font-bold text-2xl my-6">Create Instantly</h2>
      <Tab items={tabItems} />
    </>
  );
}
