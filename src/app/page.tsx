import ImageUpload from "@/components/ImageeUpload";
import { SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <section className="bg-gray-900  text-white">
      <div className="mx-auto max-w-screen-xl h-screen px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className=" mb-4 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Upload File to Server Easely 

           
          </h1>

          

          <div className="mt-4 flex justify-center">
           <SignIn />
          </div>

          
        </div>
      </div>
    </section>
  );
}
