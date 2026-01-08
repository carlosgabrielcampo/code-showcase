import { Card, CardContent } from "./ui/card";
import { Copy } from "lucide-react"
import { Button } from "./ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { sendEmail } from "@/lib/utils";
import { Link } from 'react-router-dom'

export function Contact(){
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            <div>
                <Card> 
                    <CardContent>
                        <div className="space-y-2">
                            <div className="flex items-center gap-1 text-muted-foreground">
                                <h3 className="text-foreground hover:text-primary cursor-pointer" onClick={sendEmail}>carlosgabrielcampo@gmail.com</h3>
                                <Copy className="w-4 hover:text-primary font-mono transition-colors cursor-pointer"/>
                            </div>
                            <p className="text-muted-foreground text-sm">For interviews, technical exercises, or aligning new deliveries.</p>
                            <div className="space-x-4 flex pt-4">
                                <Button size="sm" variant="gradient" onClick={sendEmail}> 
                                    Send Email
                                </Button>
                                <Link 
                                    to={"https://www.linkedin.com/in/carlosgcampo/?locale=en_US"}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <Button size="sm" variant="secondary">
                                        <FaLinkedin size={30} />
                                    </Button>
                                </Link>
                                <Link 
                                    to={"https://github.com/carlosgabrielcampo"}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <Button size="sm" variant="secondary"> 
                                        <FaGithub size={30} />
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
                                <p className="text-sm">What I'm great at</p>
                                <h3 className="text-foreground font-bold">Building reliable systems for real business problems</h3>
                            </div>
                            <p className="text-muted-foreground text-sm">Comfortable working independently or aligning with teams during interviews, technical challenges, or early project definition.</p>
                            <div className="flex flex-col text-sm text-muted-foreground">
                                <div>
                                    <span className='text-primary/80 text-lg'>• </span><span className='left-0 before:top-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-primary/50'>"Full Stack architecture, APIs and integrations"</span>
                                </div>
                                <div>
                                    <span className='text-primary/80 text-lg'>• </span><span className='left-0 before:top-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-primary/50'>"Automation flows, complex business logic and edge cases"</span>
                                </div>
                                <div>
                                    <span className='text-primary/80 text-lg'>• </span><span className='left-0 before:top-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-primary/50'>"Databases, performance considerations and pragmatic refactors"</span>
                                </div>
                            </div>
                            <div className="space-x-4 flex pt-4">
                                <Link 
                                    to="/#projects"
                                >
                                    <Button size="sm" variant="no_saturation"> 
                                        Current Projects
                                    </Button>
                                </Link>
                                <Link 
                                    to="https://docs.google.com/document/d/1gs2qe2-4vzrr2CHzCRg2Pdwq-c3VeH0GeTQC0pfFu0A/edit?usp=sharing"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <Button size="sm" variant="secondary"> 
                                        Resume
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