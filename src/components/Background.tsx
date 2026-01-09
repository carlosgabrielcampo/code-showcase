export function Background({children}){
    return (
        <div className="min-h-full bg-background ">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[0] left-[-100px] min-w-[70%]  min-h-[100%] main-gradient opacity-5 rounded-full blur-3xl" />
                <div className="absolute top-[900px] right-[0px] min-w-[60%] h-[60%] main-gradient opacity-5 rounded-full blur-3xl" />
            </div>
            {children}
        </div>
    )
}