import WaitlistForm from '@/components/WaitlistForm';
import Link from 'next/link';

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <Link href="/" className="text-indigo-400 hover:text-indigo-300 font-medium">
            &larr; Back to Home
          </Link>
          <h1 className="mt-4 text-3xl font-extrabold text-white">Join the QuantSignal Waitlist</h1>
          <p className="mt-2 text-lg text-gray-300">
            We are building the future of stock recommendations. Sign up to get early access.
          </p>
        </div>
        <WaitlistForm />
      </div>
    </div>
  );
}


