import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from "react";
import { api } from '../services/api';


type Loja = {
    id: string;
    title: string;
    seguimento: string;
    localizacao: string;
    imagem: string;
    status: string;  
  }

  type LojaProps = {
    
    lojas: Loja[];
}
  

export function Content( props: LojaProps ) {


    return (
        <div className="container mx-auto px-12">
            <div className="pt-20">
                <h1 className="text-xl text-gray-800">Restaurantes e mercados</h1>
            </div>

            <p>{JSON.stringify(props.lojas)}</p>

            <div className="text-gray-500  container mx-auto flex space-x-4 pt-4">
                <button className="rounded-full py-3 px-6 border hover:bg-gray-50 ">Entrega</button>
                <button className="rounded-full py-3 px-6 border hover:bg-gray-50">Cozinhas</button>
                <button className="rounded-full py-3 px-6 border hover:bg-gray-50">Pagamento</button>
                <button className="rounded-full py-3 px-6 border hover:bg-gray-50">Distancia</button>
                <button className="rounded-full py-3 px-6 border hover:bg-gray-50">Super-restaurantes</button>
                <button className="rounded-full py-3 px-6 border hover:bg-gray-50">Ordenar</button>
            </div>

            <div className="pt-12 grid grid-cols-3 space-x-4">

                <Link href="/shop">
                    <div className="box">
                        <div className="flex-shrink-0">
                            <img src="./imgMenu/convenience.png" className="rounded-full h-20 w-20   bg-red-600" />
                        </div>
                        <div className="border-l-2 p-4"  >
                            <h1 className="font-semibold">Conveniencia Ultoma hora - Batatais</h1>
                            <p className="font-light text-gray-500">Conveniencia - 1,3Km</p>
                            <p className="font-light text-gray-500">Fechado</p>
                        </div>
                    </div>
                </Link>

                <div className="box">
                    <div className="flex-shrink-0">
                        <img src="./imgMenu/market.png" className="rounded-full h-20 w-20   bg-yellow-400" />
                    </div>
                    <div className="border-l-2 p-4">
                        <h1 className="font-semibold">Super mercado Nori - Batatais</h1>
                        <p className="font-light text-gray-500">Mercado - 2,5Km</p>
                        <p className="font-light text-gray-500">Fechado</p>
                    </div>
                </div>

                <div className="box">
                    <div className="flex-shrink-0">
                        <img src="./imgMenu/drinks.png" className="rounded-full h-20 w-20   bg-red-600" />
                    </div>
                    <div className="border-l-2 p-4">
                        <h1 className="font-semibold">Chopana - Batatais</h1>
                        <p className="font-light text-gray-500">Bar - 1,1Km</p>
                        <p className="font-light text-gray-500">Fechado</p>
                    </div>
                </div>

            </div>

            <div className="pt-12 grid grid-cols-3 space-x-4">

                <div className="box">
                    <div className="flex-shrink-0">
                        <img src="./imgMenu/petshop.png" className="rounded-full h-20 w-20   bg-green-400" />
                    </div>
                    <div className="border-l-2 p-4">
                        <h1 className="font-semibold">PetShop - Batatais</h1>
                        <p className="font-light text-gray-500">PetShop - 2,2Km</p>
                        <p className="font-light text-gray-500">Fechado</p>
                    </div>
                </div>

                <div className="box">
                    <div className="flex-shrink-0">
                        <img src="./imgMenu/restaurant.png" className="rounded-full h-20 w-20   bg-red-600" />
                    </div>
                    <div className="border-l-2 p-4">
                        <h1 className="font-semibold">Janelas Lanches - Batatais</h1>
                        <p className="font-light text-gray-500">Lanchonete - 1,8Km</p>
                        <p className="font-light text-gray-500">Fechado</p>
                    </div>
                </div>

                <div className="box">
                    <div className="flex-shrink-0">
                        <img src="./imgMenu/pharmacy.png" className="rounded-full h-20 w-20   bg-pink-300" />
                    </div>
                    <div className="border-l-2 p-4">
                        <h1 className="font-semibold">Farmacia Fernando- Batatais</h1>
                        <p className="font-light text-gray-500">Farmacia - 0,8Km</p>
                        <p className="font-light text-gray-500">Fechado</p>
                    </div>
                </div>

            </div>

            <div className=" group border p-2 mt-8 text-center hover:bg-red-600 rounded-md">
                <button className="text-red-500 font-light group-hover:text-white ">Ver mais restaurantes e mercados</button>
            </div>

            <div className="border-t-2 mt-12">
                <h1 className="text-xl text-gray-800 mt-8">Explore por cidades</h1>
                <button className="float-right text-red-500">Ver todas</button>
            </div>


            <div className="grid grid-cols-4">
                <ul className="list-footer">
                    <li>Belo Horizonte</li>
                    <li>Brasilia</li>
                    <li>Campinas</li>
                    <li>Curitiba</li>
                    <li>Goiania</li>
                </ul>

                <ul className="list-footer">
                    <li>Guarulhos</li>
                    <li>João Pessoa</li>
                    <li>Natal</li>
                    <li>Niteroi</li>
                    <li>Porto Alegre</li>
                </ul>

                <ul className="list-footer">
                    <li>Ribeirão Preto</li>
                    <li>Rio de Janeiro</li>
                    <li>Salvador</li>
                    <li>Santo Andre</li>
                    <li>Santos</li>
                </ul>

                <ul className="list-footer">
                    <li>São Bernardo do Campo</li>
                    <li>São Caetano do Sul</li>
                    <li>São Paulo</li>
                </ul>
            </div>

        </div>


    );

}



export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('loja', {
        
      params: {
        _limit: 6,
        _order: 'desc'
      }
      
    })
    
    const lojas = data.map(loja => {
      return {
        id: loja.id,
        title: loja.title,
        seguimento: loja.seguimento,
        localizacao: loja.localizacao,
        imagem: loja.imagem,
        status: loja.status,

      };
    })
    
    return {
        
      props: {
        lojas,
  
      },
      
      revalidate: 60 * 60 * 8,
    }
  }

  