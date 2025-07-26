import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center relative">
      <Image
        src="/hq.png"
        alt="Background"
        fill
        className="object-cover -z-10"
      />
      <main className="container mx-auto text-center relative z-10">
        <div className="bg-sky-100/80 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">omakase.store</h1>
          <p className="text-gray-700">no more online store, we&apos;re just going to be available at our friends&apos; events</p>
        </div>
      </main>
    </div>
  );
}