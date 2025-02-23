import Link from "next/link"
import { MapPin, Clock, DollarSign } from "lucide-react"

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src="/images/logo.png" alt="Paw Pals Logo" className="h-8 w-8" />
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
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Services</h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                We offer professional dog walking and sitting services tailored to your pet's needs. Choose the service
                that best fits your schedule and your furry friend's requirements.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-blue-600 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <img
                    src="/images/dog-walking.jpg"
                    alt="Dog walking service"
                    className="w-full h-48 object-cover mb-6 rounded"
                  />
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Dog Walking</h2>
                  </div>
                  <p className="leading-relaxed mb-5">
                    Our professional dog walkers ensure your furry friend gets the exercise and attention they need. We
                    offer walks of various durations to suit your dog's energy level and your schedule.
                  </p>
                  <ul className="list-disc list-inside mb-5">
                    <li>15-minute quick relief walks</li>
                    <li>30-minute standard walks</li>
                    <li>60-minute extended walks for high-energy dogs</li>
                    <li>Group walks available upon request</li>
                  </ul>
                  <div className="flex items-center">
                    <DollarSign size={20} className="text-blue-600" />
                    <span className="text-gray-900 text-lg title-font font-medium ml-2">Starting at $15 per walk</span>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <img
                    src="/images/dog-sitting.jpg"
                    alt="Dog sitting service"
                    className="w-full h-48 object-cover mb-6 rounded"
                  />
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Dog Sitting</h2>
                  </div>
                  <p className="leading-relaxed mb-5">
                    When you can't be there, our dog sitting services provide your pet with companionship, care, and
                    attention in the comfort of their own home. We offer flexible scheduling to meet your needs.
                  </p>
                  <ul className="list-disc list-inside mb-5">
                    <li>Daytime sitting (up to 8 hours)</li>
                    <li>Overnight sitting (12+ hours)</li>
                    <li>Weekend and holiday care</li>
                    <li>Medication administration if needed</li>
                  </ul>
                  <div className="flex items-center">
                    <DollarSign size={20} className="text-blue-600" />
                    <span className="text-gray-900 text-lg title-font font-medium ml-2">Starting at $50 per day</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-16">
              <Link
                href="/contact"
                className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
              >
                Book a Service
              </Link>
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
            <img src="/images/logo.png" alt="Paw Pals Logo" className="h-8 w-8" />
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

