export type Portfolio = {
  profile: Profile;
  experience: Experience;
};

export type Profile = {
  name: string;
  title: string;
  description: string;
};

export type Experience = {
  name: string;
  position: string;
  company: string;
  start_date: Date;
  end_date: Date;
  description: string;
};
