import { create } from 'zustand';
import { PortfolioStore } from './type';

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  portfolio: [],
  addPortfolio: (id: string) => {
    set((store) => ({
      portfolio: [{ id, portfolio_name: 'Untitled' }, ...store.portfolio],
    }));
  },
  deletePortfolio: (id: string) => {
    set((store) => ({
      portfolio: store.portfolio.filter((item) => item.id !== id),
    }));
  },
  changePortfolioName: ({ id_portfolio, portfolio_name }) => {
    set((store) => ({
      portfolio: store.portfolio.map((item) =>
        item.id === id_portfolio ? { ...item, portfolio_name } : item
      ),
    }));
  },
  editPersonalDetails: ({ id_portfolio, personal_details }) => {
    set((store) => ({
      portfolio: store.portfolio.map((item) =>
        item.id == id_portfolio ? { ...item, personal_details } : item
      ),
    }));
  },
}));
