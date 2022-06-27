export default function Navbar() {
  return (
    <>
      <div className="w-full h-16 fixed z-10 left-0 top-0">
        <div className="container mx-auto h-full xl:px-16 px-8">
          <div className="flex justify-between items-center h-full">
            <h1 className="text-gray-100 text-2xl font-semibold tracking-wide">
              P & S
            </h1>

            <ul className="hidden justify-end items-center space-x-2 md:flex">
              <li>
                <a
                  href="#galeri"
                  className="block text-gray-100 tracking-widest text-sm px-3 py-2 outline-none"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#galeri"
                  className="block text-gray-100 tracking-widest text-sm px-3 py-2 outline-none"
                >
                  Registry
                </a>
              </li>
            </ul>

            <div className="block md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
