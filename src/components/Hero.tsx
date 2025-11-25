import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 overflow-hidden transition-all duration-500 min-h-screen">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-indigo-900/30 border border-indigo-800">
                <span className="text-sm font-semibold text-indigo-400">
                  🚀 Powered by Advanced ML
                </span>
              </div>

              <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl leading-tight">
                <span className="block">Turn market noise</span>
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
                  into clarity
                </span>
              </h1>
              
              <p className="mt-6 text-lg text-gray-300 sm:mt-8 sm:text-xl sm:max-w-xl sm:mx-auto lg:mx-0 leading-relaxed">
                QuantSignal uses advanced machine learning to analyze historical data and predict tomorrow&apos;s opportunities. 
                <span className="font-semibold text-white"> Build your wish list and get daily buy signals.</span>
              </p>

              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                <Link
                  href="/waitlist"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 md:text-lg md:px-10"
                >
                  <span className="relative z-10">Join the Waitlist</span>
                  <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-indigo-300 bg-gray-800 border-2 border-indigo-800 hover:border-indigo-700 hover:bg-gray-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 md:text-lg md:px-10"
                >
                  Learn how it works
                </a>
              </div>

              <p className="mt-6 text-sm text-gray-400 italic">
                Not financial advice. Past performance is not indicative of future results.
              </p>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center transition-all duration-500">
         <div className="relative w-full h-full flex items-center justify-center p-8">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              <Image
                src="/logo.png"
                alt="QuantSignal Logo"
                width={600}
                height={600}
                className="object-contain max-h-[80vh] relative z-10 drop-shadow-2xl"
                priority
              />
            </div>
         </div>
      </div>
    </section>
  );
}

