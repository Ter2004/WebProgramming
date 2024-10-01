export default function Home() {
  
    return (<>
      <header className="flex justify-between items-center p-5 bg-white">
          <div className="flex items-center space-x-4">
              <span className="material-symbols-outlined text-3xl">home</span>
              <h1 className="text-2xl font-bold">Nike</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
          <div className="md:hidden flex flex-col space-y-1 cursor-pointer">
            <div className="w-8 h-1 bg-gray-600"></div>
            <div className="w-8 h-1 bg-gray-600"></div>
            <div className="w-8 h-1 bg-gray-600"></div>x
          </div>
        </header>
  
      <hr className="border-t border-gray-400 my-4"></hr>
  
      <section className="flex items-center justify-content: space-between h-screen bg-cover bg-center" style={{backgroundImage: "url(https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F05%2Ftravis-scott-fragment-design-air-jordan-1-low-cactus-jack-on-foot-look-dm7866-140-000.jpg?w=960&cbr=1&q=90&fit=max)",}}>
          <div className=" bg-opacity-70 p-10 text-center max-w-lg">
              <h2 className="flex items-center text-2xl text-white">Lorem ipsum dolor</h2>
              <h1 className="flex text-5xl font-bold text-white mt-4 mb-6">WE ARE THE BEST</h1>
              <p className=" text-white mb-8">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quis labore odio magni minima suscipit cum nostrum laudantium maiores aperiam fugit illum culpa.</p>
              <button  className="flex bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-gray-800 ">Buy it now</button>
          </div>
      </section>
  
      <section className="py-8">
          <hr className="border-t border-gray-400 mb-6"></hr>
          <div className="flex justify-around mb-6">
              <span className="text-lg font-semibold">SERVICE 1</span>
              <span className="text-lg font-semibold">SERVICE 2</span>
              <span className="text-lg font-semibold">SERVICE 3</span>
          </div>
          <hr className="border-t border-gray-400"></hr>
      </section>
  
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 mb-12">
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://madkicks.sa/cdn/shop/products/Air-Jordan-1-Low-x-Travis-Scott-x-Fragment_720x.jpg?v=1677490712')", }} ></div>
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://madkicks.sa/cdn/shop/products/Air-Jordan-1-Low-x-Travis-Scott-x-Fragment-4.jpg?v=1677490712')",}} ></div>
          <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url(https://mckickz.co.uk/cdn/shop/files/travis-scott-x-fragment-x-jordan-1-retro-low-dm7866-140-McKickz-01-1_2048x.png?v=1683307039)",}}></div>
          <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url(https://mckickz.co.uk/cdn/shop/files/travis-scott-x-jordan-1-retro-low-dm7866-140-McKickz-14-1_600x.png?v=1683307039)",}}></div>
      </section>
  
      <footer className="bg-white-50 py-8 text-center"> 
          <hr className="border-t border-gray-400 mb-6"></hr>
          <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem atque veritatis voluptatibus ex dolore.</p>
          <p className="mt-4 text-gray-600">Copyright © All Right Reserved</p>
      </footer>
  
      
      </>)

  }
