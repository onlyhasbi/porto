## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Porto.io using Zustand Persist to save your data in SessionStorage


##DataStructure Porto
```
Portfolio = {
  id: string;
  portfolio_name: string;
  personal_details: PersonalDetails;
  experience: Experience[];
}[];


Experience = {
  id: string;
  job_title: string;
  company: string;
  city: string;
  start_date: string;
  end_date: string;
  description: string;
};

PersonalDetails = {
  cover: string;
  avatar: string;
  name: string;
  position: string;
  description: string;
};
```
