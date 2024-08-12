export default function Home() {

 

  return (

   
      

    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-[11px]bg-gray-200 lg:aspect-none group-hover:opacity-75">
        <img alt="Bay Valley Tech Light Bulb." src="/images/bvt_logo_bg.jpg" class=" h-10 w-10 object-cover object-center lg:h-20 lg:w-20"></img>


    <div className="bg-[#392F5A]">

      

    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 gap-x-20 ">

      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[#FFF8F0] sm:text-6xl ">
          Welcome to UI Shop Tool Kit!
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#FFF8F0] ">
          With this you can make your own Website! There are many templates that you can use! Click the blue button below to head to the product lists page.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 p-10" style={{gap:'10rem'}}  >
          <a
            href="productlists#"
            className=" rounded-full bg-indigo-500 px-2.5 pt-py-10 text-sm font-semibold text-white shadow-sm  hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 gap-y-50 visited:text-gray-100">
          
            Get started
          </a>
          <a href="about#" 
          className=" rounded-full bg-indigo-500 px-2.5 pt-py-10 text-sm font-semibold text-white shadow-sm  hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 gap-y-50 visited:text-gray-100" >
            Learn more <span aria-hidden="true"></span>
          </a>

        </div>
      </div>

      

      <a href="about#" className="flex justify-center rounded-lg   bg-indigo-500  pt-5  text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 visited:text-gray-100" >
      
            Learn Our Story <span aria-hidden="true"></span>
            
           
          </a>


  </div>

 {/* < img alt="Bay Valley Tech Light Bulb." src="/images/bvt_logo_bg.jpg" class=" h-10 w-10 object-cover object-right lg:h-5 lg:w-5">
 </img> */}

  </div>

  

  </div>

  
  )

}
