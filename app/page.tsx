import Header from "@/component/Header";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <div className="h-screen">
       <Header />
      <div className="flex h-[90%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-12">
           <h1 className="text-[40px] font-serif">IMPECCABLE <br /> CRAFTSMANSHIP AND <br /> FINESSE</h1>
             <p className="text-[20px] text-[#9a874a] font-normal">
                An example of intricate workmanship and detail, elegant <br />
                necklaces and long and short chains form a part of our <br />
                 desirable collection.
             </p>
          
           <button className=" text-[20px] mt-4 bg-[#A29054] p-1 w-1/3 font-serif text-white">Explore Now</button>
        </div>
        
            <div className="w-1/2 flex justify-center items-center">
              <Image src={"/images/rs-group-wrap ⏵ rs-group.svg"} alt="model" width={300} height={445} />
             </div>
         </div>
    </div>
  
  );
}
export default Home;
