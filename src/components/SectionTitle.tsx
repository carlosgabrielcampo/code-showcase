interface SectionTitleInterface {
    title: string;
    subtitle: string;
}
export function SectionTitle({title, subtitle}: SectionTitleInterface) {
    return (
        <div className="pt-20 pb-4 max-w-[60%]">
            <h1 className='font-bold text-2xl'>{title}</h1>
            <h1 className='text-muted-foreground'>{subtitle}</h1>
        </div>
    )
}