import Link from 'next/link';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-[70vh] flex items-center justify-center">
        <section className="py-20 md:py-32 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-center items-center mb-4">
              <h1 className="text-8xl md:text-9xl font-bold text-[#DAA520]">
                404
              </h1>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Page Not Found
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
            <div className="mt-8">
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-[#62b514] text-white hover:bg-[#529b11]"
                >
                  <Home className="mr-2 h-5 w-5" />
                  Go Back Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
