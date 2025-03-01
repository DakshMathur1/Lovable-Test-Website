
import React, { useState } from "react";
import { Animate, NeomorphicCard } from "./ui/motion";

const products = [
  {
    id: 1,
    name: "Minimal Product One",
    description: "A beautifully designed product with attention to every detail.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Minimal Product Two",
    description: "Clean lines and pure functionality define this elegant product.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Minimal Product Three",
    description: "Simplicity at its finest, delivering an unparalleled experience.",
    image: "/placeholder.svg",
  },
];

const ProductShowcase: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState(1);

  return (
    <section id="products" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Animate animation="fade-up">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-gray-100 rounded-full mb-6">
              OUR PRODUCTS
            </span>
          </Animate>
          <Animate animation="fade-up" delay={200}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Elegance Through Simplicity
            </h2>
          </Animate>
          <Animate animation="fade-up" delay={400}>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our collection of meticulously designed products that bring together form and function 
              in perfect harmony.
            </p>
          </Animate>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <Animate animation="fade-up" delay={100}>
              <div className="flex gap-4 mb-8">
                {products.map((product) => (
                  <button
                    key={product.id}
                    className={`py-2 px-4 text-sm font-medium rounded-full transition-all duration-300 ${
                      activeProduct === product.id
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveProduct(product.id)}
                  >
                    {product.name.split(" ").pop()}
                  </button>
                ))}
              </div>
            </Animate>

            {products.map((product) => (
              <div
                key={product.id}
                className={`transition-opacity duration-500 ${
                  activeProduct === product.id ? "block" : "hidden"
                }`}
              >
                <Animate animation="fade-up" delay={200}>
                  <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                </Animate>
                <Animate animation="fade-up" delay={300}>
                  <p className="text-gray-600 mb-8">
                    {product.description} Our design philosophy focuses on removing the unnecessary,
                    resulting in a product that serves its purpose perfectly while maintaining
                    a timeless aesthetic appeal.
                  </p>
                </Animate>
                <Animate animation="fade-up" delay={400}>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#learn-more"
                      className="px-6 py-3 bg-gray-900 text-white font-medium rounded-full transition-all duration-300 hover:bg-black hover:shadow-lg"
                    >
                      Learn More
                    </a>
                    <a
                      href="#pricing"
                      className="px-6 py-3 bg-transparent border border-gray-200 text-gray-900 font-medium rounded-full transition-all duration-300 hover:border-gray-400"
                    >
                      Pricing
                    </a>
                  </div>
                </Animate>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            {products.map((product) => (
              <div
                key={product.id}
                className={`transition-all duration-700 transform ${
                  activeProduct === product.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 absolute"
                }`}
              >
                {activeProduct === product.id && (
                  <Animate animation="fade-in" delay={100}>
                    <NeomorphicCard className="aspect-square max-w-md mx-auto overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="relative w-2/3 h-2/3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </NeomorphicCard>
                  </Animate>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
