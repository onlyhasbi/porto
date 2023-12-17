type Experience = {
  job_title?: string;
  company?: string;
  city?: string;
  start_date?: string;
  end_date?: string;
  description?: string;
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

type AddExperiences = {
  id_porfolio: string;
  id_experience: string;
  personal_details: PersonalDetails;
};

type DeleteExperiences = {
  id_portfolio: string;
  id_experiences: string;
};

type ChangePortfolioName = { id_portfolio: string; portfolio_name: string };

export type Portfolio = {
  id: string;
  portfolio_name?: string;
  personal_details?: PersonalDetails;
  experience?: Experience[];
};

export type PortfolioStore = {
  portfolio: Portfolio[];
  addPortfolio: (id: string) => void;
  deletePortfolio: (id: string) => void;
  changePortfolioName: (payload: ChangePortfolioName) => void;
  editPersonalDetails: (payload: EditPersonalDetails) => void;
  addExperiences?: (payload: AddExperiences) => void;
  deleteExperiences?: (payload: DeleteExperiences) => void;
};
