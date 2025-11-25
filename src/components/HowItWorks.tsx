export default function HowItWorks() {
  const steps = [
    {
      title: 'Data Collection',
      description: 'We collect historical prices for 120+ liquid stocks and ETFs every single day.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI Analysis',
      description: 'Our Random Forest + Neural Network ensemble estimates tomorrow\'s probability of an uptick.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Get Early Access',
      description: 'Join our waitlist to be the first to access our daily ranked lists and buy signals.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(99, 102, 241) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="inline-block px-3 sm:px-4 py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4">
            Simple, Data-Driven Insights
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Three easy steps to smarter trading decisions
          </p>
        </div>

        {/* Timeline Steps - Vertical on mobile, Horizontal on desktop */}
        <div className="relative">
          {/* Vertical line for mobile */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500"></div>

          {/* Steps Container */}
          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 lg:gap-12">
            {steps.map((step, index) => (
              <div 
                key={step.title} 
                className="relative md:flex md:flex-col md:items-center"
              >
                {/* Mobile Layout */}
                <div className="flex md:flex-col md:items-center gap-6 md:gap-0">
                  {/* Icon */}
                  <div className="flex-shrink-0 md:mb-6 z-10 relative">
                    <div className={`relative w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                      {/* Pulse ring */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} animate-ping opacity-20`}></div>
                    </div>
                    {/* Step number badge - Desktop only */}
                    <div className="hidden md:inline-flex absolute -bottom-3 left-1/2 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-lg bg-gray-800 border-2 border-gray-700 text-lg font-bold text-white shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 md:text-center pt-2 md:pt-8">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed md:max-w-sm md:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow connector - Desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 lg:top-14 -right-3 lg:-right-6 z-20">
                    <svg className="w-10 h-10 lg:w-14 lg:h-14 text-indigo-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl sm:rounded-3xl border border-indigo-500/20 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex -space-x-2 sm:-space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 sm:border-3 border-gray-900"></div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 sm:border-3 border-gray-900"></div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-2 sm:border-3 border-gray-900"></div>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm sm:text-base text-gray-300">
                    Join <span className="font-bold text-white text-lg sm:text-xl">500+</span> traders
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">Already on the waitlist</p>
                </div>
              </div>
              
              <a
                href="/waitlist"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm sm:text-base font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Get Started
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}