import SystemCompts from "./systemCompts"



function RightHero(){

    return(
        <div className="flex flex-col items-end w-full lg:items-start">
            <div>
                <h1 className="text-2xl">Project</h1>   
                <SystemCompts sysName="Sales Inventory Management System" url="https://www.facebook.com/"/>
                <SystemCompts sysName="Car Rental Management System" url="https://www.facebook.com/"/>
                <SystemCompts sysName="Probli.com" url="https://www.facebook.com/"/>
            </div>
        </div>
    )
}


export default RightHero