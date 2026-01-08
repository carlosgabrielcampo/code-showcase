export function Background({children}){
    return (
        <div className="min-h-full bg-background ">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-350px] left-[-100px] w-[1000px] h-[1000px] main-gradient opacity-5 rounded-full blur-3xl" />
                <div className="absolute top-[900px] right-[0px] w-[600px] h-[600px] main-gradient opacity-5 rounded-full blur-3xl" />
            </div>
            {children}
        </div>
    )
}