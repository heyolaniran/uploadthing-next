import ImageUpload from "@/components/ImageeUpload";

export default function Home() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl h-screen px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Upload File to Server Easely 

            <span className="sm:block"> Increase Conversion. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
            numquam ea!
          </p>

          <div className="mt-4">
           <ImageUpload />
          </div>

          
        </div>
      </div>
    </section>
  );
}
