import { SectionTitle } from "./SectionTitle";
interface SectionInterface {
    id: string;
    title: string;
    subtitle: string;
    children: React.ReactElement;
    arialabel?: string;
}
export function Section({id, title, subtitle, children, arialabel}: SectionInterface) {
    return (
        <section id={id} aria-labelledby={arialabel}>
            <SectionTitle title={title} subtitle={subtitle}/>
            {children}
        </section>
    )
}