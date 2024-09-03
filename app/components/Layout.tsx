import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-golden-50">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <footer className="bg-white border-t-2 border-golden-200 py-4 text-center">
        <p className="text-golden-700">
          &copy; 2024 Jewelry Store. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
