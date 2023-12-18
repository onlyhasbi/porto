export type Experience = {
  id: string;
  job_title: string;
  company: string;
  city: string;
  start_date: string;
  end_date: string;
  description: string;
};

export type PersonalDetails = {
  cover: string;
  avatar: string;
  name: string;
  position: string;
  description: string;
};

type EditPersonalDetails = {
  id_portfolio: string;
  personal_details: PersonalDetails;
};

type EditExperience = {
  id_portfolio: string;
  id_experience: string;
  payload: Experience;
};

type PayloadExperience = {
  id_portfolio: string;
  id_experience: string;
};

type ChangePortfolioName = { id_portfolio: string; portfolio_name: string };

export type Portfolio = {
  id: string;
  portfolio_name?: string;
  personal_details?: PersonalDetails;
  experience: Experience[];
};

export type PortfolioStore = {
  portfolio: Portfolio[];
  addPortfolio: (id: string) => void;
  editPersonalDetails: (payload: EditPersonalDetails) => void;
  deletePortfolio: (id: string) => void;
  changePortfolioName: (payload: ChangePortfolioName) => void;
  addExperience: (payoad: PayloadExperience) => void;
  deleteExperience: (payload: PayloadExperience) => void;
  editExperience: (payload: EditExperience) => void;
};
