import Link from "next/link";

export function Header() {
    return (
        <header className="sticky flex-col w-screen h-4/5 bg-gray-100 top-0 z-auto p-3 border-b-2">

            <div className="flex flex-grow justify-around items-center w-full max-w-screen-xl m-auto ">

                <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <img  src="./ifood.png" className=" rounded-none w-24 h-16 " />
                </div>
                </Link>

                <div className="flex flex-row items-center" >
                    <div className="rounded-full float-left h-10 w-10 bg-red-600" >
                        <img className="pt-2" src="./imgMenu/restaurant.png" />
                    </div>
                    <a className="font-medium text-xl ml-3 text-gray-500">Restaurante</a>
                    <img className=" w-3 h-3 ml-3  float-right " src="./icon/setabaixo.svg" />
                </div>

                <div className="bg-white relative w-96 p-3 rounded-lg">
                    <img className=" w-5 h-5 float-left" src="./icon/loupe.svg" />
                    <input type="text" className="absolute inset-y-0 left-12 w-1/2 md:w-full rounded-lg" placeholder="Busque por item ou loja" />
                </div>

                <div className=" ml-8 ">
                    <h2 className="text-xs  text-gray-400  ">ENTREAGR EM</h2>
                    <div className=" flex flex-row">
                        <img className=" w-3 h-3  " src="./icon/localizacao.svg" />
                        <p className="text-xs ml-3 ">Proximo de Sete de Setembro</p>
                        <img className=" w-3 h-3 ml-3 float-right " src="./icon/setabaixo.svg" />
                    </div>
                </div>

                <div className=" flex flex-row items-center">
                    <img className=" w-6 h-6  float-left mr-5 " src="./icon/discount.svg" />
                    <img className=" w-5 h-5  float-right mr-5 " src="./icon/entrar.svg" />
                    <img className=" w-6 h-6  float-right mr-5 " src="./icon/sacola.svg" />

                </div>

            </div>
        </header>

    );
}