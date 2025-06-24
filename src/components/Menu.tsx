const Menu = () => {
  const menuItems = [
    {
      category: "Signature Coffees",
      items: [
        { name: "Brewster Blend", description: "Our signature house blend with notes of chocolate and caramel", price: "$4.50" },
        { name: "Morning Glory", description: "Light roast with bright citrus notes and floral undertones", price: "$4.25" },
        { name: "Dark Forest", description: "Bold dark roast with smoky and earthy flavors", price: "$4.75" },
      ]
    },
    {
      category: "Specialty Drinks",
      items: [
        { name: "Vanilla Bean Latte", description: "Espresso with steamed milk and Madagascar vanilla", price: "$5.25" },
        { name: "Caramel Macchiato", description: "Espresso with vanilla syrup, steamed milk, and caramel drizzle", price: "$5.50" },
        { name: "Matcha Latte", description: "Premium Japanese matcha with steamed milk", price: "$5.75" },
      ]
    },
    {
      category: "Fresh Pastries",
      items: [
        { name: "Croissant", description: "Buttery, flaky French pastry baked fresh daily", price: "$3.25" },
        { name: "Blueberry Muffin", description: "Moist muffin packed with fresh blueberries", price: "$2.95" },
        { name: "Avocado Toast", description: "Multigrain bread with smashed avocado and sea salt", price: "$8.50" },
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffees, artisanal beverages, and fresh pastries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuItems.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900 text-lg">{item.name}</h4>
                      <span className="text-amber-600 font-bold text-lg">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;