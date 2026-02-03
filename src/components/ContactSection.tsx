import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Links } from "@/data/links";

const ContactSection = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formPayload = {
            access_key: "6c14b370-ac51-45bc-b933-1a3ed381b3d1",
            ...formData,
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formPayload),
            });

            const data = await response.json();

            if (!response.ok)
                throw new Error(data.message || "Submission failed");

            toast({
                title: "Message Sent!",
                description:
                    "Thank you for your message. I'll get back to you soon.",
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: error.message || "Failed to send message",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className=" bg-background">
            <div className="section-container">
                <h2 className="section-heading">Get In Touch</h2>
                <p className="text-muted-foreground max-w-2xl mb-12">
                    Have a question or want to work together? Feel free to drop
                    me a message. I'd love to hear from you!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 space-y-8">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex items-start gap-5">
                                <Mail className="w-5 h-5 mt-1 text-primary" />
                                <div>
                                    <h4 className="font-medium text-foreground">
                                        Email
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        <a href={`mailto:${Links.emailonly}`}>
                                            {Links.emailonly}
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-1 text-primary" />
                                <div>
                                    <h4 className="font-medium text-foreground">
                                        Location
                                    </h4>
                                    <p className="text-sm text-muted-foreground text-nowrap ">
                                        {Links.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-foreground">
                                Connect with me
                            </h3>
                            <div className="flex space-x-4">
                                <a
                                    href={Links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="bg-muted p-3 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href={Links.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="bg-muted p-3 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href={Links.email}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Email"
                                    className="bg-muted p-3 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
