export default function Footer() {
  return (
    <footer className="bg-golden-100 text-golden-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">We are passionate about creating beautiful, high-quality jewelry for every occasion.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">123 Jewelry Lane, Gem City</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@jewelrystore.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-golden-600 hover:text-golden-800">Facebook</a>
              <a href="#" className="text-golden-600 hover:text-golden-800">Instagram</a>
              <a href="#" className="text-golden-600 hover:text-golden-800">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-golden-200 pt-8 text-center">
          <p className="text-sm">&copy; 2024 Jewelry Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}