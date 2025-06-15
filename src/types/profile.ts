
export interface Education {
  id: string;
  school: string;
  degree: string;
  major: string;
  startYear: string;
  endYear: string;
  gpa: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startYear: string;
  endYear: string;
  city: string;
  country: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  startYear: string;
  endYear: string;
  description: string;
}

export interface ProfileType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  summary: string;
}
