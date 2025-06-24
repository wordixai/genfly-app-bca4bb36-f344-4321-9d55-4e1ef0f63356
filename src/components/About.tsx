import { Heart, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Passion for Quality",
      description: "We source our beans directly from farmers and roast them with care to bring out the best flavors."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "More than just a café, we're a gathering place where connections are made and stories are shared."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in coffee quality and customer service by local and national organizations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded in 2015, Brewster began as a small neighborhood coffee shop with a big dream: 
              to create the perfect cup of coffee while building a community of coffee lovers.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Today, we continue that mission by sourcing the finest beans from sustainable farms 
              around the world, roasting them with precision, and serving them in an atmosphere 
              that feels like home.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Coffee roasting process"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;