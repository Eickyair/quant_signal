export default function Footer() {
  return (
    <footer className="bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">QuantSignal</div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300">Terms</a>
            <a href="#" className="text-gray-400 hover:text-gray-300">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-gray-300">Contact</a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} QuantSignal. All rights reserved.
          </p>
          <p className="mt-4 text-xs text-gray-500 text-center max-w-2xl mx-auto">
            Risk Disclaimer: Trading stocks and cryptocurrencies involves a high degree of risk and is not suitable for all investors. You could lose some or all of your initial investment. The content provided by QuantSignal is for informational purposes only and does not constitute financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

