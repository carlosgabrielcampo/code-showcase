import { Card, CardContent } from "./ui/card";
import { Copy } from "lucide-react"
import { Button } from "./ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { copyToClipboard, sendEmail } from "@/lib/utils";
import { Link } from 'react-router-dom'

export function Contact({page_text}){
    const contact_text = page_text.sections.contact
    const emailSender = () => {
        sendEmail({email: contact_text.email, subject: contact_text.email_subject })
    }
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            <div>
                <Card> 
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex flex-wrap items-center gap-1 text-muted-foreground sm:justify-start justify-center">
                                <h3 className="text-foreground hover:text-primary active:text-primary cursor-pointer text-sm sm:text-base break-all" onClick={emailSender}>{contact_text.email}</h3>
                                <Copy className="w-4 hover:text-primary font-mono transition-colors cursor-pointer flex-shrink-0" onClick={() => copyToClipboard(contact_text.email)}/>
                            </div>
                            <p className="text-muted-foreground text-sm sm:text-left">{contact_text.container_1.title}</p>
                            <div className="flex flex-wrap gap-3 pt-4 sm:justify-start justify-center">
                                <Button size="sm" variant="gradient" onClick={emailSender} className="min-h-[44px]"> 
                                    {contact_text.container_1.email_button}
                                </Button>
                                <Link 
                                    to={contact_text.container_1.linkedIn}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <Button size="sm" variant="secondary" className="min-h-[44px] min-w-[44px]">
                                        <FaLinkedin size={24} />
                                    </Button>
                                </Link>
                                <Link 
                                    to={"https://github.com/carlosgabrielcampo"}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <Button size="sm" variant="secondary" className="min-h-[44px] min-w-[44px]"> 
                                        <FaGithub size={24} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card> 
                    <CardContent>
                        <div className="space-y-2">
                            <div className="items-center space-y-1 text-muted-foreground">
                                <p className="text-sm">{contact_text.container_2.intro}</p>
                                <h3 className="text-foreground font-bold">{contact_text.container_2.title}</h3>
                            </div>
                            <p className="text-muted-foreground text-sm">{contact_text.container_2.sub}</p>
                            <div className="flex flex-col text-sm text-muted-foreground">
                                {contact_text.container_2.description.map((item, index) => (
                                    <li
                                        key={`${index}`}
                                        className="grid grid-cols-[12px_1fr] gap-3"
                                    >
                                        <div className="text-primary/80 leading-[1.6]">•</div>
                                        <div className="leading-relaxed text-left text-sm">{item}</div>
                                    </li>
                                ))}
                            </div>
                            <div className="flex gap-3 pt-4 sm:justify-start justify-center">
                                <a href="#projects">
                                    <Button size="sm" variant="no_saturation" className="min-h-[44px]"> 
                                        {contact_text.container_2.project_button}
                                    </Button>
                                </a>
                                <Link 
                                    to={contact_text.container_2.resume_link}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <Button size="sm" variant="secondary" className="min-h-[44px]"> 
                                        {contact_text.container_2.resume_button}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}