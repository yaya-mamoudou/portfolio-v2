import { ReactNode } from "react";

export const navLinks = [
    { label: 'Projects', link: '#projects' },
    { label: 'Experience', link: '#' },
    { label: 'Skills', link: '#' },
    { label: 'Education', link: '#' },
];

export const languages = [
    { label: 'En', flag: ' 🇬🇧 ' },
    { label: 'Fr', flag: ' 🇫🇷 ' },
];

type Skill = {
    label: string;
    icon?: ReactNode;
    experience?: number;
};

export const skills: Skill[] = [
    { label: 'Tailwind CSS', experience: 4 },
    { label: 'Next.js', experience: 5 },
    { label: 'React', experience: 6 },
    { label: 'TypeScript', experience: 6 },
    { label: 'Node.js', experience: 5 },
    { label: 'Python', experience: 1 },
    { label: 'Nest.js', experience: 2 },
    { label: 'PostgreSQL', experience: 3 },
    { label: 'Prisma', experience: 3 },
    { label: 'GraphQL', experience: 3 },
    { label: 'REST', experience: 5 },
    { label: 'React Native', experience: 5 },
    { label: 'Angular', experience: 2 },
];

export type Project = {
    name: string;
    tools: string;
    type: 'Work' | 'Client' | 'Personal' | 'Fun';
    description: string;
    link: string
};

export const projects: Project[] = [
    {
        name: 'Nkwa App',
        tools: 'React Native, Expo, Nest.js',
        type: 'Work',
        link: '',
        description: 'A fintech mobile application designed to help Cameroonians build disciplined savings habits. The app allows users to create savings goals, set aside emergency '
    },
    {
        name: 'URL shortener',
        tools: 'Angular, bootstrap',
        type: 'Fun',
        link: '',
        description: 'A fintech mobile application designed to help Cameroonians build disciplined savings habits. The app allows users to create savings goals, set aside emergency '
    },
    {
        name: 'NotBroke App',
        tools: 'React Native, Nest.js, ClaudeAi',
        type: 'Work',
        link: '',
        description: 'A fintech mobile application designed to help Cameroonians build disciplined savings habits. The app allows users to create savings goals, set aside emergency '
    }
]

export type WorkType = {
    company: string;
    position: string;
    img: string;
    url: string;
    dates: string;
};
export const workData: WorkType[] = [
    {
        company: 'RecreateApp',
        position: 'Senior Software Engineer',
        img: '/images/recreateapp.jpeg',
        url: 'https://www.linkedin.com/company/recreateapp/',
        dates: '10/2024 - Present',
    },
    {
        company: 'Bridge Labs',
        position: 'Frontend Engineer',
        img: '/images/bridgelabs.jpeg',
        url: 'https://www.linkedin.com/company/bridgelabstech/about/',
        dates: '02/2024 - 04/2025',
    },
    {
        company: 'Nkwa',
        position: 'Software Engineer',
        img: '/images/nkwa.jpeg',
        url: 'https://mynkwa.com/',
        dates: '04/2023 - 01/2025',
    },
    {
        company: 'The Sports Media Agency',
        position: 'Software Engineer',
        img: '/images/sfw.jpeg',
        url: 'https://www.linkedin.com/company/the-sports-media-agency/about/',
        dates: '01/2023 - 07/2024',
    },
    {
        company: 'Camsol.io',
        position: 'FullStack Developer',
        img: '/images/camsol.jpeg',
        url: 'https://camsoltechnologies.com/en',
        dates: '08/2022 - 01/2023',
    },
];

export type Education = {
    major: string
    degree: string
    university: string
    gpa: string
}

export const education: Education[] = [
    {
        major: 'Software Engineering',
        degree: 'B.Eng',
        university: 'University of Buea',
        gpa: '3.21/4'
    }
]

export type LanguageType = {
    lang: string
    competence: string
}

export const spokenLanguages: LanguageType[] = [
    { lang: '🇬🇧 English', competence: 'Write / Listen / Fluent' },
    { lang: '🇫🇷 French', competence: 'Write / Listen / Fluent' }
]