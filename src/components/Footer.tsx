
export function Footer() {
    return (
        <div className="container mx-auto px-12 mb-12 ">
           

            <div className="grid grid-cols-4 mt-8 mb-12 border-t-2">
                <ul className="list-footer">
                    <h3 className="text-xl text-gray-800">iFood</h3>
                    <li>Site institucional</li>
                    <li>Fale conosco</li>
                    <li>Carreiras</li>
                    <li>iFood Colombia</li>
                </ul>

                <ul className="list-footer">
                    <h3 className="text-xl text-gray-800">Descubra</h3>
                    <li>Cadastre seu Restaurante </li>
                    <li>iFood Shop</li>
                    <li>iFood Empresas</li>
                    <li>Blog iFood Empresas</li>
                </ul>

                <ul className="list-footer">
                    <h3 className="text-xl text-gray-800">Social</h3>
                    <div className="flex gap-4 justify-start">
                        <img className="h-6 w-6" src="./icon/facebook.svg" />
                        <img className="h-6 w-6" src="./icon/twitter.svg" />
                        <img className="h-6 w-6" src="./icon/youtube.svg" />
                        <img className="h-6 w-6" src="./icon/instagram.svg" />
                    </div>
                </ul>

            </div>

            <div className="border-t-2 grid grid-cols-2">
                <div className="text-gray-500 text-sm mt-6 ">
                    <div className="float-left">
                        <img className="mt-4 h-20 w-20" src="/logo.png" />
                    </div>
                    <div className="mt-6">
                        <p>© Copyright 2021 - iFood - Todos os direitos reservados iFood com Agência de Restaurantes Online S.A.</p>
                        <p>CNPJ 14.380.200/0001-21 / Avenida dos Autonomistas, nº 1496, Vila Yara, Osasco/SP - CEP 06.020-902</p>
                    </div>

                </div>

                <div className="flex gap-6 justify-start text-gray-500">
                    <button>Termos e condições de uso</button>
                    <button>Código de conduta</button>
                    <button>Privacidade</button>
                    <button>Dicas de segurança</button>
                </div>


            </div>




        </div>
    );
}

