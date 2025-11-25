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
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Simple, Data-Driven Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three easy steps to smarter trading decisions
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector line (hidden on mobile) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20" style={{ width: 'calc(100% - 8rem)', left: '4rem' }}></div>

          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="relative group"
            >
              {/* Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 transform hover:-translate-y-2">
                {/* Icon with gradient background */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-gray-800">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative bottom gradient line */}
                <div className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>

              {/* Arrow connector (hidden on mobile, last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-6 text-gray-600 group-hover:text-indigo-400 transition-colors duration-300 z-10">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-gray-900"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-gray-900"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-2 border-gray-900"></div>
            </div>
            <span className="text-sm">Join <span className="font-semibold text-white">500+</span> traders on the waitlist</span>
          </div>
        </div>
      </div>
    </section>
  );
}