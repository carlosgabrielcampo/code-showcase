interface SectionTitleInterface {
    title: string;
    subtitle: string;
}
export function SectionTitle({title, subtitle}: SectionTitleInterface) {
    return (
        <div className="pt-16 pb-4 space-y-1">
            <h1 className='font-bold text-2xl'>{title}</h1>
            <h1 className='text-muted-foreground'>{subtitle}</h1>
        </div>
    )
}