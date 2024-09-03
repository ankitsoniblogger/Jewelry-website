import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    title: "New Collection Launch",
    description: "Discover our latest summer collection featuring exquisite pieces for every occasion.",
    image: "/images/news1.jpg",
    link: "/blog/new-collection-launch"
  },
  {
    id: 2,
    title: "The Art of Jewelry Making",
    description: "Explore the intricate process behind creating our handcrafted jewelry pieces.",
    image: "/images/news2.jpg",
    link: "/blog/art-of-jewelry-making"
  },
  {
    id: 3,
    title: "Caring for Your Jewelry",
    description: "Learn expert tips on how to maintain and care for your precious jewelry items.",
    image: "/images/news3.jpg",
    link: "/blog/caring-for-jewelry"
  }
];

export default function NewsBlog() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-golden-700">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <Link href={item.link} key={item.id} className="block group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-105">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-golden-600">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}