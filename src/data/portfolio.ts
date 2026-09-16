export type Project = {
  id: string
  number: string
  title: string
  category: string
  location: string
  academic: string
  software: string[]
  description: string
  quote?: string
  hero: string
  pages: number[]
  gallery: string[]
}

const page = (n: number) => `/assets/pages/page-${String(n).padStart(2, '0')}.webp`
const key = (name: string) => `/assets/key/${name}.webp`

export const profile = {
  name: 'Pasikanti Anusri',
  title: 'Fresher Architect',
  period: '2021–2026',
  birthDate: 'February 17, 2003',
  birthplace: 'Mancherial, Telangana',
  phone: '9701241541',
  email: 'anusri.netha@gmail.com',
  profileImage: '/assets/profile/anusri-profile.jpg',
  portraitImage: '/assets/profile/anusri-portrait.jpg',
  intro:
    'I am a fresher in architecture, looking forward to starting my professional journey and learning through real projects and experiences. I enjoy exploring how simple ideas, materials, light, and nature can come together to create comfortable and meaningful spaces.',
  background:
    'During my academic years, I have explored architecture through design, drawings, 3D modelling, and visual representation. I enjoy learning, trying new things, and understanding the process behind good design.',
  outlook:
    'As I begin my professional journey, I hope to learn from others, improve my skills, and grow as a designer.',
}

export const education = [
  { period: '2021–2026', qualification: 'Bachelor of Architecture', institution: 'Sri Venkateswara College of Architecture, Hyderabad.' },
  { period: '2018–2021', qualification: 'Diploma in Architecture', institution: 'Kamala Nehru Polytechnic for Women, Hyderabad.' },
  { period: '2018', qualification: 'Schooling', institution: 'Rishi Vidyalaya Gurukulam, Visakhapatnam, AP.' },
]

export const softwareSkills = ['AutoCAD', 'SketchUp', 'Enscape', 'Photoshop', 'Revit']
export const otherSkills = ['Canva', 'MS Office', 'MS Excel', 'MS Word']
export const languages = [
  { name: 'Telugu', note: 'Mother language' },
  { name: 'English', note: '' },
  { name: 'Hindi', note: '' },
]
export const interests = ['Music', 'Photography', 'Dance', 'Yoga', 'Travel']

export const experience = [
  { date: 'March 2021 – Aug 2026', role: 'Intern in Diploma', company: 'SNS Architects' },
  { date: 'Sep 2025 – Jan 2026', role: 'Intern in Bachelors', company: 'Linear Architects' },
  { date: 'March 2026', role: 'Junior Architect', company: 'Linear Architects' },
]

export const projects: Project[] = [
  {
    id: 'pub-interiors', number: '01', title: 'Pub Interiors', category: 'Public / Semi-Public', location: 'Hyderabad', academic: 'Academic Project — Semester 8, SVCA',
    software: ['AutoCAD', 'SketchUp', 'Enscape'],
    description: 'A pub interior based on the concept “Travel the World”. The idea is to bring the feeling of travelling into the space, where every area gives a glimpse of a different place and culture. The design takes inspiration from India, Japan, France, Africa and Mexico, using distinct colours, materials, furniture, patterns and decorative elements to create different moods.',
    quote: 'A space inspired by places, people and cultures.',
    hero: key('p07-1'), pages: [6,7,8,9,10,11,12,13],
    gallery: [key('p07-1'), key('p09-1'), key('p09-2'), page(10), page(11), page(12), key('p13-1'), key('p13-2')],
  },
  {
    id: 'working-drawings', number: '02', title: 'Working Drawings', category: 'Residential', location: 'Hyderabad', academic: 'Academic Project — Semester 6, SVCA',
    software: ['AutoCAD'],
    description: 'A complete set of working drawings prepared for apartment design. The drawings cover floor plans, elevations and sections, together with brick masonry details, slab layouts, sanitary and plumbing systems, foundation plans, electrical layouts and other service drawings. The set explores how design concepts translate into precise, buildable instructions.',
    quote: 'Bridging the gap between ideas and construction.',
    hero: key('p15-1'), pages: [14,15,16,17,18,19,20,21],
    gallery: [page(14), page(15), page(16), page(17), page(18), page(19), page(20), page(21)],
  },
  {
    id: 'nift-campus', number: '03', title: 'NIFT Campus', category: 'Public / Semi-Public', location: 'Nava Raipur, Chhattisgarh', academic: 'Academic Project — Semester 10, SVCA',
    software: ['AutoCAD', 'SketchUp', 'Enscape', 'Photoshop'],
    description: 'A proposed campus for the National Institute of Fashion Technology (NIFT) at Nava Raipur, Chhattisgarh. The design brings together academic, administrative and residential spaces within a connected campus environment. Interconnected built forms, courtyards and landscaped open spaces encourage interaction, informal learning and a strong connection with nature.',
    quote: 'Shaping spaces for learning, interaction, and creativity.',
    hero: key('p23-1'), pages: [22,23,24,25,26,27,28,29,30,31,32,33],
    gallery: [key('p23-1'), page(24), page(25), page(26), page(27), page(28), page(29), page(30), page(31), page(32), page(33)],
  },
  {
    id: 'internship-works', number: '04', title: 'Internship Works', category: 'Residential / Semi-Public', location: 'Hyderabad', academic: 'Portfolio Section — Internship Work',
    software: ['AutoCAD', 'SketchUp', 'Enscape'],
    description: 'During my internship, I had the chance to work on real design projects that helped me connect classroom learning with professional practice. I was involved in planning spaces, preparing drawings and exploring interior details. The work includes residential and semi-public spaces, with a focus on layouts, furniture and customized interiors.',
    quote: 'Learning by doing, designing with purpose.',
    hero: key('p37-1'), pages: [34,35,36,37,38,39,40,41,42,43,44,45],
    gallery: [key('p37-1'), page(36), key('p38-1'), key('p38-2'), key('p39-1'), key('p39-2'), page(40), key('p41-1'), key('p41-2'), page(42), key('p43-1'), key('p43-2'), page(44), key('p45-1'), key('p45-2')],
  },
]

export const miscellaneous = {
  plans: [page(46), page(47), page(48), page(49)],
  travel: [key('p52-1'), key('p52-2'), key('p52-3')],
  models: [key('p53-1'), key('p53-2')],
  boards: [page(50), page(51)],
}
