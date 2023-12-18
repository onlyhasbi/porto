import { create } from 'zustand';
import { PortfolioStore } from './type';
import { persist, createJSONStorage } from 'zustand/middleware';

export const usePortfolioStore = create(
  persist<PortfolioStore>(
    (set) => ({
      portfolio: [],
      addPortfolio: (id: string) => {
        set((store) => ({
          portfolio: [
            { id, portfolio_name: 'Untitled', experience: [] },
            ...store.portfolio,
          ],
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
      addExperience: ({ id_portfolio, id_experience }) => {
        set((store) => ({
          portfolio: store.portfolio.map((item) => {
            if (item.id === id_portfolio) {
              const experience = [
                ...item.experience,
                {
                  id: id_experience,
                  job_title: '',
                  company: '',
                  city: '',
                  start_date: '',
                  end_date: '',
                  description: '',
                },
              ];
              return { ...item, experience };
            }
            return item;
          }),
        }));
      },
      editExperience: ({ id_portfolio, id_experience, payload }) => {
        set((store) => ({
          portfolio: store.portfolio.map((item) => {
            if (item.id === id_portfolio) {
              return {
                ...item,
                experience: item.experience.map((ex) =>
                  ex.id == id_experience ? { ...ex, ...payload } : ex
                ),
              };
            }
            return item;
          }),
        }));
      },
      deleteExperience: ({ id_portfolio, id_experience }) => {
        set((store) => ({
          portfolio: store.portfolio.map((item) => {
            if (item.id === id_portfolio) {
              return {
                ...item,
                experience: item.experience.filter(
                  (f) => f.id !== id_experience
                ),
              };
            }
            return item;
          }),
        }));
      },
    }),
    {
      name: 'porto-storage',
    }
  )
);
