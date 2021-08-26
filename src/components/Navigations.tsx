// Import Swiper React components
import React from 'react'
import Carousel from 'react-grid-carousel'

export function Navigations() {
    return (
        <div className="container mx-auto px-12 flex justify-center space-x-6 pt-10">
            <Carousel cols={9} rows={1} gap={25}>
                <Carousel.Item >
                    <img src="./img/Vale_refeicao-out_20.jpg" />
                    <p className="text-center pt-4 font-light text-gray-500 ">Vale-refeição</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./img/Lanches-out_20.jpg" />
                    <p className="text-center pt-4 font-light text-gray-500 ">Lanches</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./img/Brasileira-nov_20.jpg" />
                    <p className="text-center pt-4 font-light text-gray-500 ">Brasileira</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./img/Acai-out_20.jpg" />
                    <p className="text-center pt-4 font-light text-gray-500 ">Açai</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./img/Padaria-out_20.jpg" />
                    <p className="text-center pt-4 font-light text-gray-500 ">Padarias</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./img/Pizza-out_20.jpg" />
                    <p className="text-center pt-4 font-light text-gray-500 ">Pizza</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./img/Doces_e_bolos-out_20.jpg" />
                    <p className="text-center pt-4 font-light text-gray-500 ">Doces & Bolos</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./img/Cafeteria-out_20.jpg" />
                    <p className="text-center pt-4 font-light text-gray-500 ">Cafeterial</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./img/Saudavel-out_20.jpg" />
                    <p className="text-center pt-4 font-light text-gray-500 ">Saudavel</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./img/Japonesa-out_20.jpg" />
                    <p className="text-center pt-4 font-light text-gray-500 ">Japonesa</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./img/Marmita-nov_20.jpg" />
                    <p className="text-center pt-4 font-light text-gray-500 ">Marmita</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./img/Salgados-out_20.jpg" />
                    <p className="text-center pt-4 font-light text-gray-500 ">Salgados</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./img/Pastel-out_20.jpg" />
                    <p className="text-center pt-4 font-light text-gray-500 ">Pastel</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./img/Sorvetes-out_20.jpg" />
                    <p className="text-center pt-4 font-light text-gray-500 ">Sorvetes</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./img/Italiana-out_20.jpg" />
                    <p className="text-center pt-4 font-light text-gray-500 ">Italiana</p>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./img/Carnes-out_20.jpg" />
                    <p className="text-center pt-4 font-light text-gray-500 ">Carnes</p>
                </Carousel.Item>
            </Carousel>
        </div>



    );
};