import { Navbar } from "@/components/navbar/Navbar"; 

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24 bg-black">
      <Navbar />
     <span className="text-5xl p-4 text-gray-300">Balón Liga de Campeones</span>
     <div className="flex flex-row">
     <img className="p-2" src="https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhbXBpb25zJTIwbGVhZ3VlfGVufDB8fDB8fHww" alt="" />
     <img className="p-2" src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNvY2NlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
     </div>
     <div className="flex flex-row">
     <img className="p-2" src="https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhbXBpb25zJTIwbGVhZ3VlfGVufDB8fDB8fHww" alt="" />
     <img className="p-2" src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNvY2NlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
     </div>
     <a className="bg-blue-500 text-white py-2 px-4 rounded inline-block mt-5" href="https://www.youtube.com/shorts/WeXFDha1QBg" target="_blank">Haz Click para ver la magia 😉</a>
    </main>
  );
}
