import Link from "next/link"
import { PawPrintIcon as Paw, MapPin, Clock, Phone } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Paw size={32} />
            <span className="ml-3 text-xl">Paw Pals</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-200">
              Home
            </Link>
            <Link href="/services" className="mr-5 hover:text-gray-200">
              Services
            </Link>
            <Link href="/contact" className="mr-5 hover:text-gray-200">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Professional Dog Walking & Sitting Services
              </h1>
              <p className="mb-8 leading-relaxed">
                Give your furry friend the care and attention they deserve with our professional dog walking and sitting
                services. We're here to ensure your pet stays happy, healthy, and active when you can't be there.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
                >
                  Book Now
                </Link>
                <Link
                  href="/services"
                  className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-suM03pWicQ6qdNXBeM56z94qLc1lBp.png"
                alt="Happy dog owner with their husky in a park"
                width={600}
                height={600}
                className="object-cover object-center rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-blue-600 tracking-widest font-medium title-font mb-1">OUR SERVICES</h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">What We Offer</h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Dog Walking</h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Regular walks to keep your dog healthy and happy. We offer flexible scheduling to fit your needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Dog Sitting</h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      In-home pet sitting services to keep your dog comfortable in their familiar environment while
                      you're away.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">24/7 Support</h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Round-the-clock support for emergencies and peace of mind. We're always here for you and your pet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    Paw Pals has been a lifesaver! Their dog walking service keeps my energetic pup happy and
                    well-exercised even on my busiest days.
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="/images/testimonial-1.jpg"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">Sarah Johnson</span>
                      <span className="text-gray-500 text-sm">Dog Owner</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    I travel often for work, and Paw Pals' dog sitting service gives me peace of mind knowing my furry
                    friend is in good hands at home.
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="/images/testimonial-2.jpg"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">Michael Lee</span>
                      <span className="text-gray-500 text-sm">Business Traveler</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <Paw size={32} className="text-blue-600" />
            <span className="ml-3 text-xl">Paw Pals</span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} Paw Pals —
            <a
              href="https://twitter.com/pawpals"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @pawpals
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

