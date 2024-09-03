export default function Banner() {
  return (
    <div className="h-64 mb-12 relative overflow-hidden rounded-lg shadow-md">
      <img
        src="/images/banner.jpg"
        alt="Jewelry Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-white text-center px-4">
          Discover Our Exclusive Collection
        </h2>
      </div>
    </div>
  );
}
