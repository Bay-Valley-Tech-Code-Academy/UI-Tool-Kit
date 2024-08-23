export default function Blog(){
    return(
        // background
        <div class="flex items-center justify-center bg-gradient-to-b from-blue-950  to-blue-800 h-screen">
            {/* white text area */}
            <div class=" w-[80vw] h-[85vh] bg-white rounded-xl">
                <h2 class ="text-center pt-3 font-serif text-4xl font-extrabold text-[#392f5a]">
                    Blog Posts
                </h2>
                <p class="text-center flex my-4 text-lg font-mono">
                    Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  
                    text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book.
                </p>

                {/* blog posts */}
                <div class="grid grid-cols-1 gap-4 justify-center bg-gray-400 rounded-xl">
                    <div>
                    <h2 class ="font-serif text-xl font-extrabold text-[#392f5a]">
                        Blog Posts
                    </h2>
                    <p class = "my-4 text-md font-mono">
                        Lorem Ipsum is simply dummy text of the printing and  typesetting industry. 
                    </p>
                    <p class="flex justify-end mr-3 my-4 text-right font-mono">
                        User Name
                        <br></br>
                        Posted on 09/09/1999
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}