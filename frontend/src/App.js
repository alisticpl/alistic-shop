import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";

// Sample product data - łatwo do podmiany później
const sampleProducts = [
  {
    id: 1,
    name: "Koszulka z nadrukiem | TOXIC",
    price: "39,99 zł",
    description:
      "Klasyczna koszulka z wysokiej jakości bawełny. Idealna na co dzień i na specjalne okazje. Miękka w dotyku i trwała.",
    size: "S",
    image: "/img/toxicfrontmark.png",
    vintedUrl: "",
    instagramProfile: "alistic_polska",
  },
];

// Logo jako base64 - możesz podmienić na właściwy plik
const logoUrl =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMTIwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZWxsaXBzZSBjeD0iNjAiIGN5PSI0MCIgcng9IjU4IiByeT0iMzgiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxyZWN0IHg9IjE1IiB5PSIyNSIgd2lkdGg9IjkwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMDAwIi8+Cjx0ZXh0IHg9IjYwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QUxJU1RJQzwvdGV4dD4KPC9zdmc+";

// Komponent Header
const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logoUrl} alt="ALISTIC" className="h-10 w-auto mr-3" />
            <span className="text-2xl font-bold text-black tracking-tight">
              ALISTIC
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#products"
              className="text-black hover:text-green-500 font-medium transition-colors"
            >
              Produkty
            </a>
            <a
              href="#about"
              className="text-black hover:text-green-500 font-medium transition-colors"
            >
              O nas
            </a>
            <a
              href="#contact"
              className="text-black hover:text-green-500 font-medium transition-colors"
            >
              Kontakt
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-black hover:text-green-500">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Komponent Hero Section
const HeroSection = () => {
  return (
    <div className="relative bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            ALISTIC
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Odkryj unikatowe koszulki stworzone specjalnie dla Ciebie.
            Nowoczesny styl, najwyższa jakość.
          </p>
          <a
            href="#products"
            className="inline-flex items-center px-8 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors text-lg"
          >
            Zobacz Kolekcję
          </a>
        </div>
      </div>
    </div>
  );
};

// Komponent Product Card
const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-black group-hover:text-green-500 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 mt-1">Rozmiar: {product.size}</p>
        <p className="text-xl font-bold text-black mt-2">{product.price}</p>
      </div>
    </div>
  );
};

// Komponent Products Grid
const ProductsGrid = () => {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Nasza Kolekcja
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Każda koszulka to unikalne połączenie stylu, komfortu i jakości.
            Znajdź swoją idealną koszulkę już dziś.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Modal zakupu
const PurchaseModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  const handleVintedClick = () => {
    if (product.vintedUrl) {
      window.open(product.vintedUrl, "_blank");
    } else {
      alert("Oferta na Vinted będzie dostępna wkrótce!");
    }
  };

  const handleInstagramClick = () => {
    const message = encodeURIComponent(
      `Cześć! Interesuje mnie koszulka "${product.name}" za ${product.price}. Czy jest dostępna?`
    );
    window.open(`https://instagram.com/direct/new/?text=${message}`, "_blank");
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-lg max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-black">Jak chcesz kupić?</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black transition-colors p-1 hover:bg-gray-100 rounded"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleVintedClick}
            className="w-full flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0z" />
            </svg>
            Kup na Vinted
          </button>

          <button
            onClick={handleInstagramClick}
            className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z" />
            </svg>
            Napisz na Instagram
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          Wybierz preferowany sposób zakupu koszulki "{product.name}"
        </p>

        <div className="text-center mt-4">
          <button
            onClick={onClose}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
};

// Strona produktu
const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  
  // In image component:
  <img
    const { id } = useParams();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const product = sampleProducts.find((p) => p.id === parseInt(id));
  
    if (!product) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black mb-4">
              Produkt nie znaleziony
            </h2>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Wróć do głównej
            </button>
          </div>
        </div>
      );
    }
  
    return (
      <div className="min-h-screen bg-white">
        <Header />
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-gray-600 hover:text-black mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Wróć do sklepu
          </button>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Zdjęcie produktu */}
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Szczegóły produktu */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                {product.name}
              </h1>
  
              <p className="text-2xl font-bold text-black mb-6">
                {product.price}
              </p>
  
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-black mb-2">Rozmiar</h3>
                <span className="inline-block px-4 py-2 bg-green-500 text-white font-medium rounded-lg">
                  {product.size}
                </span>
              </div>
  
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-3">Opis</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
  
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-green-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-600 transition-colors text-lg"
              >
                KUP TERAZ
              </button>
  
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-black mb-2">
                  Informacje o dostawie:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bezpieczna wysyłka</li>
                  <li>• Możliwość odbioru osobistego</li>
                  <li>• Kontakt przez Instagram lub Vinted</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        <PurchaseModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={product}
        />
      </div>
    );
  };

// Sekcja About (mała)
const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-black mb-4">O ALISTIC</h3>
        <p className="text-gray-600 leading-relaxed">
          ALISTIC to marka stworzona z pasji do mody i jakości. Oferujemy
          unikalne koszulki, które łączą nowoczesny design z najwyższą jakością
          materiałów.
        </p>
      </div>
    </section>
  );
};

// Sekcja Contact
const ContactSection = () => {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-black mb-6">Kontakt</h3>
        <div className="space-y-4">
          <p className="text-gray-600">
            <span className="font-semibold">Instagram:</span> @alistic_store
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span> kontakt@alistic.pl
          </p>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <img
            src={logoUrl}
            alt="ALISTIC"
            className="h-8 w-auto mr-3 filter invert"
          />
          <span className="text-xl font-bold">ALISTIC</span>
        </div>
        <p className="text-gray-400">
          © 2025 ALISTIC. Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

// Główna strona
const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductsGrid />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

// Główny komponent App
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
