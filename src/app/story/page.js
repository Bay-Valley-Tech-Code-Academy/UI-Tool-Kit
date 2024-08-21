export default function Example() {
    return (
      <div className="justify-center relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
  

  <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://texturelabs.org/wp-content/uploads/Texturelabs_Metal_124S.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />


        <div aria-hidden="true" className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        {/* for entire project */}
        <div className="  mx-auto max-w-7xl px-6 lg:px-8">

          <div className=" sm:columns-1 mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Achievements!</h2>

            <p className="mt-6 sm:text-md leading-8 text-gray-300">
                Bay Valley Tech works with a variety of charities such as  The Raymus Foundation   and The Salvation Army         
            </p>

            <div className=" flex-row  "  >
              <a
                href="https://www.raymusfoundation.org/focuses/"
                className="  rounded-full   size-12   shadow-sm    ">
              
                <div className ="">
                        <img alt="" className="min-h-50 min-w-40 -mr-40 gap-y-10 "  src="https://www.gicancersalliance.org/wp-content/uploads/2017/10/RaymondFoundation_Logo_320x320.png">
                        </img>
                </div> 
              </a>

                

              <a
                href="https://www.salvationarmyusa.org/usn/"
                className="  rounded-full  ">
              
                <div className="" style={{width: '15rem'}}>
                        <img  alt="" className=" ml-20  "  src="https://salvationarmyowensound.ca/wp-content/uploads/2022/03/salvation-army-logo-crest-270px.png">
                        </img>
                </div> 
              </a>

        </div>

            <div className="  h-50 w-50 ">

                        <p className="text-white  sm:text-lg">
                            Bay Valley Tech also works closely with CSU Stanislaus and Stanislaus County WorkForce Development
                        </p>

                    <div className =" columns-2 ">

                  <a
                      href="https://www.csustan.edu/"
                      className=" rounded-full w-10 h-10 px-5 pt-py-20 text-sm font-semibold text-white shadow-sm   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100 gap-y-50 visited:text-gray-100">
                    
                      <div >
                              <img alt="" src="https://universitypolicelivescan.com/img/logo.png">
                              </img>
                      </div> 
                    </a>

                    <a
                      href="https://www.stanworkforce.com"
                      className=" rounded-full w-10 h-10 px-5 pt-py-5 text-sm font-semibold text-white shadow-sm   focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100 gap-y-50 visited:text-gray-100">
                    
                      <div>
                              <img alt="" className="" src="https://www.stanworkforce.com/media/4r2hvtgx/logo_light.png">
                              </img>
                      </div> 
                    </a>

                   

                    </div>

                    
                    
              </div>


          </div>        
  
        </div>
      </div>
    )
  }
  