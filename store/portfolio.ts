import { create } from 'zustand';

type Experience = {
  job_title?: string;
  company?: string;
  city?: string;
  start_date?: string;
  end_date?: string;
  description?: string;
};

type PersonalDetails = {
  cover?: string;
  avatar?: string;
  name?: string;
  position?: string;
  description?: string;
};

type Portfolio = {
  id: string;
  portfolio_name?: string;
  personalDetails?: PersonalDetails;
  experience?: Experience[];
};

type EditPersonalDetails = {
  id: string;
  personalDetails: PersonalDetails;
};

type AddExperiences = {
  id: string;
  personalDetails: PersonalDetails;
};

type DeleteExperiences = {
  portfolio_id: string;
  experiences_id: string;
};

type PortfolioStore = {
  portfolio: Portfolio[];
  addPortfolio: (id: string) => void;
  deletePortfolio?: (id: string) => void;
  editPersonalDetails?: (payload: EditPersonalDetails) => void;
  addExperiences?: (payload: AddExperiences) => void;
  deleteExperiences?: (payload: DeleteExperiences) => void;
};

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  portfolio: [],
  addPortfolio: (id: string) => {
    set((store) => ({
      portfolio: [{ id }, ...store.portfolio],
    }));
  },
}));
