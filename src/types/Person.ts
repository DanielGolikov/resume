// Define your data interface

interface Person {
    location: string;
    id: string;
    email: string;
    name: string;
    phone: string;
    links: { name: string, url: string }[];
    skills: [string];
    profile: string | [string];
    experience: { name: string, date: string, responsibilities: [string] }[];
    education: { name: string, date: string, description: [string] }[];
    honors: [string];
    certifications: [string];
    organisations: [{ name: string, position: string, dates: string, description: string}]
}
