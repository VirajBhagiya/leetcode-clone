export const Topbar = () => {
    return <div className="max-w-screen-lg w-full bg-black align-center px-5 pb-5 pt-8">
        {/* <img src="/logo.png" alt="logo" className="max-w-56" /> */}
        <div className="text-8xl text-white">
            Codify
        </div>
        <NavBar />
    </div>
}

const topbarItems = [
    {
        title: "About",
        route: "/about"
    }, {
        title: "Activity",
        route: "/activity"
    }, {
        title: "Problems",
        route: "/problems"
    }, {
        title: "Leaderboard",
        route: "/leaderboard"
    }
]
function NavBar(){
    return <div className="flex mt-4">
        {topbarItems.map(item => <NavbarItem route={item.route} title={item.title} />)}
    </div>
}

function NavbarItem({title, route}: {
    title: string;
    route: string;
}){
    return <div className="mr-10 text-slate-500 text-lg cursor-pointer hover:text-white text-base font-light">
        {title}
    </div>
}