import imagemFundoHome from '../assets/imagemFundoHome.jpg';

function HeroBanner(){
    return(
           <div
                className="container mx-auto h-[250px] md:h-[320px] md:max-w-6xl bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${imagemFundoHome})` }}
            >
               <div className="h-full w-full bg-black/40 flex flex-col items-center justify-end text-center p-6 pb-10 md:items-start md:text-left md:pl-12 md:pb-14 md:bg-gradient-to-r md:from-black/70 md:via-black/30 md:to-transparent">
                    <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
                        Star Wars
                    </h1>
                    <p className="text-white/80 text-sm md:text-base mt-2">
                        Ficção Científica | Fantasia
                    </p>
               </div>
            </div>
    )
} 
export default HeroBanner;