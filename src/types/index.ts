export interface Member {
  id: string;
  name: string;
  role: string;
  nim?: string;
  description: string;
  photo: string;
}

export interface Material {
  id: string;
  title: string;
  description: string;
  date?: string;
  content?: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  description: string;
  photo: string;
}
