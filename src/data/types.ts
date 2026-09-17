export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  tags: string[]
  logo?: string
}

export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  link: string
  image?: string
}
