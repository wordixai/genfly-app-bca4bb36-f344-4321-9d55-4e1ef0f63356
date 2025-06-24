import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "123 Coffee Street, Downtown District, City 12345"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-BREW"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 6am-8pm\nSat-Sun: 7am-9pm"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@brewstercafe.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Come experience the perfect cup of coffee in our cozy, welcoming atmosphere
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center">
              <info.icon className="h-8 w-8 text-amber-400 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">{info.title}</h3>
              <p className="text-gray-300 whitespace-pre-line">{info.details}</p>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="bg-gray-800 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Find Us on the Map</h3>
          <div className="bg-gray-700 rounded-xl h-64 flex items-center justify-center">
            <p className="text-gray-400">Interactive map would be integrated here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;