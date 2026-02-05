
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import SpotlightCard from "./SpotlightCard";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="experience" className="py-14 relative bg-background">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                    className="space-y-12"
                >
                    <motion.div variants={itemVariants} className="text-left mb-12">
                        <h2 className="section-heading inline-block relative">
                            Experience

                        </h2>
                        <p className="text-muted-foreground mt-4 max-w-2xl">
                            My professional journey and the value I've delivered across different roles.
                        </p>
                    </motion.div>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[calc(1.25rem-1px)] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:to-transparent">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                variants={itemVariants}
                                className={`relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
                            >
                                {/* Timeline Icon */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-0 md:ml-0 absolute left-0 top-0 mt-5 md:static md:mt-5 transform md:translate-x-0 z-10">
                                    <Briefcase className="w-5 h-5 text-primary" />
                                </div>

                                {/* Content Card */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 relative group-hover:-translate-y-1 transition-transform duration-300">
                                    <SpotlightCard className="p-6 rounded-xl border-border/50 shadow-sm hover:shadow-lg">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                            <h3 className="text-xl font-bold">{exp.title}</h3>
                                            <Badge variant="outline" className="bg-primary/10 w-fit">{exp.type}</Badge>
                                        </div>

                                        <div className="flex flex-col gap-2 mb-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2 font-medium text-primary">
                                                <Briefcase className="w-4 h-4" />
                                                {exp.company}
                                            </div>
                                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    {exp.date}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4" />
                                                    {exp.location}
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="space-y-2 list-none">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex gap-2 text-muted-foreground text-sm leading-relaxed">
                                                    <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </SpotlightCard>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;
