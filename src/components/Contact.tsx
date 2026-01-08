import { Card, CardContent } from "./ui/card";
import { Copy } from "lucide-react"
import { Button } from "./ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { sendEmail } from "@/lib/utils";

export function Contact(){
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            <Card> 
                <CardContent>
                    <div className="space-y-2">
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <h3 className="text-foreground hover:text-primary cursor-pointer" onClick={sendEmail}>carlosgabrielcampo@gmail.com</h3>
                            <Copy className="w-4 hover:text-primary font-mono transition-colors cursor-pointer"/>
                        </div>
                        <p className="text-muted-foreground text-sm">For interviews, technical exercises, or aligning a new delivery.</p>
                        <div className="space-x-4 flex pt-4">
                            <Button size="sm" variant="gradient"> 
                                Send Email
                            </Button>
                            <Button size="sm" variant="secondary"> 
                                <FaLinkedin size={30} />
                            </Button>
                            <Button size="sm" variant="secondary"> 
                                <FaGithub size={30} />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}