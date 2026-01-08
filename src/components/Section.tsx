import { SectionTitle } from "./SectionTitle";
interface SectionInterface {
    title: string;
    subtitle: string;
    children: React.ReactElement;
    arialabel?: string;
}
export function Section({title, subtitle, children, arialabel}: SectionInterface) {
    return (
        <section aria-labelledby={arialabel}>
            <SectionTitle title={title} subtitle={subtitle}/>
            {children}
        </section>
    )
}