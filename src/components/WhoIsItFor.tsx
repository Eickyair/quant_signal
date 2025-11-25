export default function WhoIsItFor() {
  const audiences = [
    {
      title: 'Amateur Investors',
      description: 'Perfect for those starting their trading journey',
      features: ['Focus on a curated list', 'Simple daily insights', 'No complex charts needed'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
      bgAccent: 'bg-blue-500/5',
    },
    {
      title: 'Short-term Traders',
      description: 'Built for active market participants',
      features: ['High-volume screening', 'Probability-based ranking', 'Save time on research'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
      bgAccent: 'bg-purple-500/5',
    },
    {
      title: 'Investment Groups',
      description: 'Enterprise solutions for teams',
      features: ['Consensus data', 'Back-tested models', 'API access available'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-teal-500',
      bgAccent: 'bg-emerald-500/5',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20">
            Who Is It For
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Built for Every Type of Trader
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Whether you're just starting or managing a portfolio, we've got you covered
          </p>
        </div>

        {/* Audiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative">
                  {/* Icon with gradient */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {audience.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {audience.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6">
                    {audience.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3">
                    {audience.features.map((feature, featureIndex) => (
                      <li key={feature} className="flex items-start gap-3 group/item">
                        {/* Animated checkmark */}
                        <div className={`flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br ${audience.gradient} flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-200`}>
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors duration-200">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative gradient line */}
                  <div className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${audience.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>

                {/* Number badge */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-lg bg-gray-700/50 flex items-center justify-center text-sm font-bold text-gray-400 group-hover:bg-gradient-to-br group-hover:from-indigo-500/20 group-hover:to-purple-500/20 group-hover:text-white transition-all duration-300">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-indigo-500/20">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold">
                A
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold">
                T
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold">
                G
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Join traders like you</h3>
              <p className="text-gray-400">Get started with QuantSignal today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}