import type { Metadata } from "next";
import { Container } from "postcss";

export const metadata: Metadata = {
 title: 'Contacto',
 description: 'Contacto',
 keywords: ['About Page', 'Informacion', 'Contacto', 'Pricing'],
};

export default function ContactPage(){
    return (
        <>
        <nav className="p-5 font-bold">
            <ul className="flex flex-row text-gray-400">
                <li className="p-2 hover:text-blue-400">Artículos más recientes</li>
                <li className="p-2 hover:text-blue-400">Print on demand</li>
                <li className="p-2 hover:text-blue-400">Catálogo digital gratis</li>
                <li className="p-2 hover:text-blue-400">Emprender un negocio</li>
                <li className="p-2 hover:text-blue-400">Proveedores</li>
                <li className="p-2 hover:text-blue-400">Tutorial</li>
                <li className="p-2 hover:text-blue-400">Ejemplos de tiendas</li>
            </ul>
        </nav>
        <img src="https://www.latercera.com/resizer/6hc18ivc5bt9ubcb_mQv_NVBY_U=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/RDF2ON3PTBDUFJHR2MZSXS4HD4.jpeg" alt="" />
        <span className="text-5xl hover:text-blue-400 p-10">Contact Page</span>
        <div className="flex flex-row">
        <img className="p-4 w-80" src="https://www.betsson.com/wp-content/uploads/2023/05/Copa-Sudamericana-Previsiones-1170x781.jpg.optimal.jpg" alt="" />
        <img className="p-4 w-80" src="https://phantom-marca.unidadeditorial.es/56b3e28346305ad9116295779706a3dd/crop/0x0/827x551/resize/828/f/jpg/assets/multimedia/imagenes/2023/11/04/16991136201913.jpg" alt="" />
        <img className="p-4 w-80" src="https://depor.com/resizer/RwCCVhjGWhOaB6Wmi9tjBPMbZDg=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GJXZHQGND5COTGPKDDQSTP6HZY.jpg" alt="" />
        
        </div>
        <div className="flex flex-row">
        <img className="p-4 w-80" src="https://www.betsson.com/wp-content/uploads/2023/05/Copa-Sudamericana-Previsiones-1170x781.jpg.optimal.jpg" alt="" />
        <img className="p-4 w-80" src="https://phantom-marca.unidadeditorial.es/56b3e28346305ad9116295779706a3dd/crop/0x0/827x551/resize/828/f/jpg/assets/multimedia/imagenes/2023/11/04/16991136201913.jpg" alt="" />
        </div>
        <img className="p-4 w-80" src="https://www.betsson.com/wp-content/uploads/2023/05/Copa-Sudamericana-Previsiones-1170x781.jpg.optimal.jpg" alt="" />
        </>
    );
}