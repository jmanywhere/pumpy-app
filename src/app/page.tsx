import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <section className="flex flex-row gap-x-8">
        <div>
          <Image src="/star_outline.png" width={45} height={45} alt="star1" />
        </div>
        <Image
          src="/square_logo.png"
          width={200}
          height={200}
          alt="squareLogo"
        />
        <div className="self-end">
          <Image src="/Group 2.svg" width={77} height={74} alt="stars2" />
        </div>
      </section>
    </main>
  );
}
