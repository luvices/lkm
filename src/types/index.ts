export interface Member {
  id: string;
  name: string;
  role: string;
  nim?: string;
  photo: string;
  linkedin?: string;
}

export interface Material {
  id: string;
  title: string;
  description: string;
  date?: string;
  content?: string;
}
