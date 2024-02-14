import type { Metadata } from "next";
export const metadata: Metadata = {
 title: 'Pricing',
 description: 'Pagina de precios',
 keywords: ['About Page', 'Informacion', 'Contacto', 'Pricing'],
};
export default function PricingPage(){
    return (
        <>
        <img className="p-4 mb-10" src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnV0Ym9sfGVufDB8fDB8fHww" alt="" />
        <span className="text-gray-400 text-5xl">Final Champions League</span>
        <div className="flex flex-row">
            <div className="text-center">
            <img className="w-80 p-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Barcelona_vs_Arsenal_2006-05-17.svg/1482px-Barcelona_vs_Arsenal_2006-05-17.svg.png" alt="" />
            <span className="text-3xl font-bold text-gray-300">Final 2006</span>
            </div>
            <div className="text-center">
            <img className="w-80 p-5" src="https://www.tribuna.com.mx/u/fotografias/m/2023/6/10/f768x1-334718_334845_5050.jpg" alt="" />
            <span className="text-3xl font-bold text-gray-300">Final 2023</span>
            </div>
        </div>
        <img src="https://img.vavel.com/b/Alineaciones%20Real%20Madrid%20-%20Liverpool.jpg" alt="" />
        <span className="text-3xl font-bold text-gray-300 p-4">Real Madrid VS Liverpool 2022</span>
        </>
    );
}