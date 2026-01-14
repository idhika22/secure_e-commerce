

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900" >
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center ">
        <p className="text-sm text-black font-semibold">&copy; {new Date().getFullYear()}ShopEase. All rights reserved</p>
        <div>
          <a href="#" className="hover:text-blue-600 font-semibold">About |</a>
          <a href="#" className="hover:text-blue-600 font-semibold">Contact |</a>
          <a href="#" className="hover:text-blue-600 font-semibold">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer