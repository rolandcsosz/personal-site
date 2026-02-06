import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import {
    FileText,
    Briefcase,
    GraduationCap,
    Award,
    Download,
} from "lucide-react";
import LazyImage from "./LazyImage";
import { Links } from "@/data/links";
import SpotlightCard from "./SpotlightCard";

const AboutSection = () => {
    const resumeUrl = Links.resume;
    const { toast } = useToast();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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

    const handledownload = () => {
        toast({
            title: "Downloading Resume",
            description: "Your download will start shortly.",
        });
    };

    return (
        <section id="about" className="py-14 relative bg-background">
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="section-heading text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={itemVariants}
                >
                    About Me
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
                    {/* Content Column */}
                    <motion.div
                        className="lg:col-span-8 space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary" />{" "}
                                Bio
                            </h3>
                            <p className="text-muted-foreground">
                                Software engineer with 4+ years of professional experience in software development and
                                testing. I specialize in full-stack development
                                across web, desktop, and mobile platforms,
                                combining strong technical foundations with
                                creative problem-solving to build clean,
                                user-centric applications.
                            </p>
                        </motion.div>

                        <div className="flex justify-center md:justify-start">
                            <motion.div
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    boxShadow:
                                        "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                                }}
                                className="flex w-fit rounded-lg"
                            >
                                <SpotlightCard className="h-full border-[1px] border-white/10 backdrop-blur-sm bg-card/50">
                                    <CardContent className="pt-6">
                                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                            <GraduationCap className="w-5 h-5 text-primary" />{" "}
                                            Education
                                        </h3>
                                        <div className="space-y-2">
                                            <p className="font-medium">
                                                BSc in Computer Engineering
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                BME (Budapest University of
                                                Technology and Economics)
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                2022 September - 2026 January
                                            </p>
                                        </div>
                                    </CardContent>
                                </SpotlightCard>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Profile Column */}
                    <motion.div
                        className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        <motion.div
                            className="relative"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Avatar className="w-60 h-60 border-4 border-primary/20">
                                <AvatarImage
                                    src="/imgs/me.png"
                                    alt="Roland Csősz"
                                    loading="lazy"
                                />
                                <AvatarFallback>RCs</AvatarFallback>
                            </Avatar>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="text-center lg:text-left"
                        >
                            <h3 className="text-2xl font-bold">Roland Csősz</h3>
                            <p className="text-muted-foreground">
                                Full-Stack Developer
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-2 justify-center lg:justify-start"
                        >
                            <Badge variant="outline" className="bg-primary/10">
                                React
                            </Badge>
                            <Badge variant="outline" className="bg-primary/10">
                                TypeScript
                            </Badge>
                            <Badge variant="outline" className="bg-primary/10">
                                Node.js
                            </Badge>
                            <Badge variant="outline" className="bg-primary/10">
                                Python
                            </Badge>
                            <Badge variant="outline" className="bg-primary/10">
                                C++
                            </Badge>
                             <Badge variant="outline" className="bg-primary/10">
                                Qt/QML
                            </Badge>
                            <Badge variant="outline" className="bg-primary/10">
                                UI/UX
                            </Badge>
                            <Badge variant="outline" className="bg-primary/10">
                                CI/CD
                            </Badge>
                            <Badge variant="outline" className="bg-primary/10">
                                Docker
                            </Badge>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/*<Button className="gap-2" asChild onClick={handledownload}>
                <a href={resumeUrl} download="Aathif_Zahir_CV.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>*/}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
