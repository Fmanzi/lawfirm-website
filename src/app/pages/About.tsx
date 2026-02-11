import { Users, Target, Heart, Award } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "Managing Partner",
      expertise: "Corporate Law",
      image: "https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA3NDM0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Michael Chen",
      role: "Senior Partner",
      expertise: "Intellectual Property",
      image: "https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA3NDM0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Emily Rodriguez",
      role: "Partner",
      expertise: "Employment Law",
      image: "https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA3NDM0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "David Thompson",
      role: "Partner",
      expertise: "Contract & M&A Law",
      image: "https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA3NDM0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build lasting relationships based on trust, transparency, and mutual respect.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from legal research to client service.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We uphold the highest ethical standards and always act in our clients' best interests.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace new technologies and creative strategies to deliver superior results.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About LegalEdge</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A modern law firm committed to delivering exceptional legal services through innovation, expertise, and unwavering dedication to our clients.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2024, LegalEdge was born from a vision to create a different kind of law firm—one that combines traditional legal excellence with modern business thinking and cutting-edge technology.
                </p>
                <p>
                  Our founders recognized that today's businesses need more than just legal advice; they need strategic partners who understand the complexities of the modern business landscape and can provide innovative solutions that drive success.
                </p>
                <p>
                  Since our inception, we've grown from a small startup to a respected firm serving clients across multiple industries. Our success is built on a foundation of exceptional legal work, client-focused service, and a commitment to staying ahead of the curve in an ever-evolving legal landscape.
                </p>
                <p>
                  Today, LegalEdge stands as a testament to what's possible when legal expertise meets innovative thinking. We continue to push boundaries, challenge conventions, and deliver results that exceed our clients' expectations.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1619806677949-cbae91e82cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDgyNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Courthouse"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-lg shadow-sm text-center"
              >
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced attorneys dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-blue-100">
              Recognition for excellence in legal services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Top Law Firm 2025</h3>
              <p className="text-blue-100">Recognized by Legal Excellence Awards</p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Client Choice Award</h3>
              <p className="text-blue-100">Outstanding Client Satisfaction Rating</p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Innovation Leader</h3>
              <p className="text-blue-100">Best Use of Legal Technology</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
