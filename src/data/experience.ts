
import { Briefcase, Calendar, MapPin } from "lucide-react";

export type Experience = {
    id: number;
    title: string;
    company: string;
    type: string;
    date: string;
    location: string;
    description: string[];
};

export const experiences: Experience[] = [
    {
        id: 1,
        title: "Software Engineer",
        company: "aiMotive",
        type: "Internship",
        date: "2022 - 2026",
        location: "Budapest, Hungary · Hybrid",
        description: [
            "Developed and maintained applications using C++ with Qt/QML and Python, enhancing software functionality (2022 - 2024).",
            "Transitioned to modern frontend and backend solutions with TypeScript, React, and Python for improved user experience (2024 - 2026).",
            "Gained hands-on experience with CI/CD pipelines, utilizing Jenkins, Groovy, and Docker for automation.",
        ],
    },
    {
        id: 2,
        title: "Junior RPA Developer",
        company: "AGCO Corporation",
        type: "Part-time",
        date: "2021 - 2022",
        location: "Budapest, Hungary",
        description: [
            "Developed and maintained RPA solutions using Blue Prism to streamline business processes.",
            "Implemented SAP GUI automation, enhancing data extraction and transaction workflows.",
            "Supported internal tools and applications utilizing .NET and C#.",
        ],
    },
    {
        id: 3,
        title: "Automation Developer Intern",
        company: "Albemarle Corporation",
        type: "Internship",
        date: "2020 - 2021",
        location: "Budapest, Hungary",
        description: [
            "Developed VBA applications and internal tools to enhance automation processes.",
            "Created Power BI dashboards to visualize data and improve decision-making.",
            "Collaborated with ABAP developers to integrate SAP tools effectively.",
        ],
    },
];
