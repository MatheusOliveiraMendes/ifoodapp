import React, { useState } from "react";


export function Modalstore() {
  const [showModal, setShowModal] = React.useState(false);

  function abriModal() {
    setShowModal(true);
  }

  function fechaModal() {
    setShowModal(false);
  }

  const [num, setNum] = useState(0);

  const incNum = () => {
    if (num < 5)
      setNum(num + 1);
  };

  const decNum = () => {
    if (num > 0)
      setNum(num - 1);
  };

  return (
    <>

      <div className="container mx-auto px-20 pb-20 ">
        <img src="./DEFAULT.png" />


        <div className="flex flex-nowrap  pt-8">

          <div className=" ">
            <img src="./imgMenu/convenience.png" className="rounded-full h-20 w-20   bg-red-600" />
          </div>
          <div className="flex-1 p-4 "  >
            <h1 className="text-4xl font-light ">Conveniencia Ultima hora - Batatais</h1>
          </div>
          <div className="p-4 ">
            <button className="float-right text-red-500">Ver mais</button>
          </div>

        </div>

        <div className="pt-8">
          <div className="flex flex-nowrap p-3 rounded-lg border">
            <img className=" w-5 h-5 mr-4 float-left" src="./icon/loupe.svg" />
            <input type="text" className=" inset-y-0 left-12 w-1/2 md:w-full rounded-lg" placeholder="Buscar no cardapio" />
          </div>
        </div>

        <div className="pt-20">
          <h1 className="text-xl text-gray-800">Melhores Escolhas Incriveis</h1>
        </div>


        <div className="pt-12 grid grid-cols-3 space-x-4">


          <div onClick={abriModal} className="box">
            <div className="p-4 flex-1"  >
              <h1 className="font-semibold">Conveniencia Ultima hora - Batatais</h1>
              <p className="font-light text-gray-500">Conveniencia - 1,3Km</p>
              <p className="font-light text-gray-500">Fechado</p>
            </div>
            <div className="flex-shrink-0">
              <img src="./imgMenu/convenience.png" className="rounded-lg h-20 w-20   bg-red-600" />
            </div>

          </div>


          <div className="box">
            <div className="p-4 flex-1">
              <h1 className="font-semibold">Super mercado Nori - Batatais</h1>
              <p className="font-light text-gray-500">Mercado - 2,5Km</p>
              <p className="font-light text-gray-500">Fechado</p>
            </div>
            <div className="flex-shrink-0">
              <img src="./imgMenu/market.png" className="rounded-lg h-20 w-20  bg-yellow-400" />
            </div>

          </div>

          <div className="box">
            <div className="p-4 flex-1">
              <h1 className="font-semibold">Chopana - Batatais</h1>
              <p className="font-light text-gray-500">Bar - 1,1Km</p>
              <p className="font-light text-gray-500">Fechado</p>
            </div>
            <div className="flex-shrink-0">
              <img src="./imgMenu/drinks.png" className="rounded-lg h-20 w-20   bg-red-600" />
            </div>

          </div>

        </div>

        <div className="pt-12 grid grid-cols-3 space-x-4">

          <div className="box">
            <div className="p-4 flex-1">
              <h1 className="font-semibold">PetShop - Batatais</h1>
              <p className="font-light text-gray-500">PetShop - 2,2Km</p>
              <p className="font-light text-gray-500">Fechado</p>
            </div>
            <div className="flex-shrink-0">
              <img src="./imgMenu/petshop.png" className="rounded-lg h-20 w-20  bg-green-400" />
            </div>

          </div>

          <div className="box">
            <div className="p-4 flex-1">
              <h1 className="font-semibold">Janelas Lanches - Batatais</h1>
              <p className="font-light text-gray-500">Lanchonete - 1,8Km</p>
              <p className="font-light text-gray-500">Fechado</p>
            </div>
            <div className="flex-shrink-0">
              <img src="./imgMenu/restaurant.png" className="rounded-lg h-20 w-20   bg-red-600" />
            </div>

          </div>

          <div className="box">
            <div className="p-4 flex-1">
              <h1 className="font-semibold">Farmacia Fernando- Batatais</h1>
              <p className="font-light text-gray-500">Farmacia - 0,8Km</p>
              <p className="font-light text-gray-500">Fechado</p>
            </div>
            <div className="flex-shrink-0">
              <img src="./imgMenu/pharmacy.png" className="rounded-lg h-20 w-20   bg-pink-300" />
            </div>

          </div>

        </div>

      </div>


      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    Carne Queijo Salada
                  </h3>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase  text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={fechaModal}
                  >
                    Close
                  </button>

                </div>
                {/*body*/}
                <div className="grid grid-cols-2">

                  <div className="">
                    <img src="./Pat.webp" className=" m-2 p-2  " />
                  </div>

                  <div className=" p-4 overflow-y-auto h-96" >

                    <div className="box grid grid-rows-2 mt-2">
                      <h1 className="pb-4">Restaurante e Pizzaria Ana Luiza</h1>
                      <div className="border-t-2 border-dashed">
                        <p className="pt-4">120-130 min | R$5,00</p>
                      </div>

                    </div>

                    <section className=" pt-4 ">
                      <div className="block sticky  bg-gray-100 py-3 px-4 h-16 ">
                        <p className="leading-5 ">Adicionais
                      <span className="block text-gray-400">Escolha ate 4 opcoes.</span>
                        </p>
                      </div>
                    </section>

                    <section className="">
                      <span className="flex items-center justify-between border-b-2 py-4">
                        <p className="">
                          Catupity Sem Amido
                    <span className="block font-semibold text-red-500">+5,00</span>
                        </p>
                        <div className="flex gap-4  text-2xl items-center">
                          <button onClick={decNum} className="text-3xl  text-red-500">-</button>

                          <div>
                            {num}
                          </div>

                          <button onClick={incNum} className="text-red-500">+</button>
                        </div>
                      </span>

                      <span className="flex items-center justify-between border-b-2 py-4">
                        <p className="">
                          Chedarr Sem Amido
                    <span className="block font-semibold text-red-500">+5,00</span>
                        </p>
                        <div className="flex gap-4  text-2xl items-center">
                          <button onClick={decNum} className="text-3xl  text-red-500">-</button>

                          <div>
                            {num}
                          </div>

                          <button onClick={incNum} className="text-red-500">+</button>
                        </div>
                      </span>

                      <span className="flex items-center justify-between border-b-2 py-4">
                        <p className="">
                          Bacon
                    <span className="block font-semibold text-red-500">+5,00</span>
                        </p>
                        <div className="flex gap-4  text-2xl items-center">
                          <button onClick={decNum} className="text-3xl  text-red-500">-</button>

                          <div>
                            {num}
                          </div>

                          <button onClick={incNum} className="text-red-500">+</button>
                        </div>
                      </span>

                    </section>


                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center gap-4 justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">

                <div className="flex gap-6 border rounded-md p-2 text-2xl items-center">
                          <button onClick={decNum} className="text-3xl  text-red-500">-</button>

                          <div>
                            {num}
                          </div>

                          <button onClick={incNum} className="text-red-500">+</button>
                        </div>

                  <button  
                    className="bg-red-600 text-white p-4 rounded-md text-sm outline-none focus:outline-none  ease-linear transition-all duration-150"
                    type="button"
                  >
                    Adicionar

                    <span className="ml-20">
                      R$ 17,00
                    </span>
  
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}