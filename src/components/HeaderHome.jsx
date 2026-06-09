import logo from '../assets/fimora-logo.png'

function HeaderHome (){
    return (
        <header className="bg-[#09090B] border-b border-white/70 ">
            <div className="flex items-center justify-between pl-2 pr-6 max-w-full">

                <div className="pl-0">
                    <img src={logo} alt="Filmora" className="h-20 w-60" />
                </div>

            </div>
        </header>
    )
}

export default HeaderHome;