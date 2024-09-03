import PriceCard from "./components/PriceCard";
import DateTime from "./components/DateTime";
import ScrollableImages from "./components/ScrollableImages";
import Banner from "./components/Banner";
import NewsBlog from "./components/NewsBlog";

export default function Home() {
  return (
    <main className="min-h-screen bg-golden-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4 text-golden-700">
            Welcome to Our Jewelry Store
          </h1>
          <DateTime />
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PriceCard metal="Gold" />
            <PriceCard metal="Silver" />
          </div>
        </section>

        <section className="mb-16">
          <ScrollableImages />
        </section>

        <section className="mb-16">
          <Banner />
        </section>

        <section className="mb-16">
          <NewsBlog />
        </section>
      </div>
    </main>
  );
}
