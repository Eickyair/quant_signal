import Link from "next/link";

export default function Pricing() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 sm:mb-4">
            Simple Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">
            Choose the plan that fits your trading style.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-6 lg:items-center">
          {/* Free Tier */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700/50 p-6 sm:p-8 hover:border-gray-600 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Free</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-5 sm:mb-6">For casual observers.</p>
            <div className="mb-6 sm:mb-8">
              <span className="text-4xl sm:text-5xl font-extrabold text-white">$0</span>
              <span className="text-sm sm:text-base text-gray-400 ml-2">/month</span>
            </div>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base text-gray-300">Limited actions</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base text-gray-300">Basic market overview</span>
              </li>
            </ul>
          </div>

          {/* Premium Tier - POPULAR */}
          <div className="relative lg:transform lg:scale-110 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full uppercase tracking-wider shadow-lg animate-pulse">
                Most Popular
              </span>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-[2px] shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300">
              <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Premium</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-5 sm:mb-6">For serious traders.</p>
                <div className="mb-6 sm:mb-8">
                  <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    200 MXN
                  </span>
                  <span className="text-sm sm:text-base text-gray-400 ml-2">/month</span>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-300">Unlimited actions</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-300">Full rankings</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-300">Priority support</span>
                  </li>
                </ul>
                <Link 
                  href="/waitlist" 
                  className="block w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center font-semibold py-3 px-6 rounded-xl hover:from-indigo-600 hover:to-purple-700 transform hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-lg hover:shadow-indigo-500/50"
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </div>

          {/* On-demand Tier */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700/50 p-6 sm:p-8 hover:border-gray-600 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">On-demand</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-5 sm:mb-6">For custom needs.</p>
            <div className="mb-6 sm:mb-8">
              <span className="text-4xl sm:text-5xl font-extrabold text-white">50 MXN</span>
              <span className="text-sm sm:text-base text-gray-400 ml-2">/analysis</span>
            </div>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base text-gray-300">Custom stock analysis</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base text-gray-300">Group licenses</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}