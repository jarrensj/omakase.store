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
        <h1 className="text-2xl font-bold mb-4">omakase.store</h1>
        <p>no more online store, we&apos;re just going to be available at our friends&apos; events</p>
      </main>
    </div>
  );
}