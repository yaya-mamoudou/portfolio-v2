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