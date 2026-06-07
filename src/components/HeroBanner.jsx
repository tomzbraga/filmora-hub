import imagemFundoHome from '../assets/imagemFundoHome.jpg';

function HeroBanner(){
    return(
           <div
                className="container mx-auto h-[250px] bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${imagemFundoHome})` }}
            >
               <div className="h-full w-full bg-black/40 flex flex-col items-center justify-end text-center p-6 pb-10">
                    <h1 className="text-white text-4xl font-bold drop-shadow-lg">
                        Star Wars
                    </h1>
                    <p className="text-white/80 text-sm mt-2">
                        Ficção Científica | Fantasia
                    </p>
               </div>
            </div>
    )
} 
export default HeroBanner;