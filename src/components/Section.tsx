import { SectionTitle } from "./SectionTitle";
interface SectionInterface {
    id: string;
    title: string;
    subtitle: string;
    children: React.ReactElement;
    arialabel?: string;
}
export function Section({id, title, subtitle, children}: SectionInterface) {
    return (
        <section id={id} aria-labelledby={`${title}-heading`}>
            <SectionTitle title={title} subtitle={subtitle}/>
            {children}
        </section>
    )
}