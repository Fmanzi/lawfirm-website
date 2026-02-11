import { Briefcase, Shield, Users, FileText, Lock, TrendingUp, CheckCircle } from "lucide-react";

export default function PracticeAreas() {
  const practiceAreas = [
    {
      icon: TrendingUp,
      title: "Corporate Law",
      description: "Comprehensive legal guidance for businesses at every stage of growth.",
      services: [
        "Business formation and structuring",
        "Corporate governance",
        "Mergers and acquisitions",
        "Securities and capital markets",
        "Commercial transactions",
        "Shareholder agreements",
      ],
      image: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGFncmVlbWVudHxlbnwxfHx8fDE3NzA4MDcyODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      description: "Protect your innovations, brands, and creative works from infringement.",
      services: [
        "Patent prosecution and litigation",
        "Trademark registration and enforcement",
        "Copyright protection",
        "Trade secret protection",
        "IP licensing agreements",
        "IP portfolio management",
      ],
      image: "https://images.unsplash.com/photo-1760089449852-e8cade7feb53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXN0aWNlJTIwc2NhbGVzJTIwbGVnYWx8ZW58MXx8fHwxNzcwNzUxNTEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Users,
      title: "Employment Law",
      description: "Navigate complex employment regulations and workplace relationships.",
      services: [
        "Employment contracts and handbooks",
        "Workplace investigations",
        "Discrimination and harassment defense",
        "Wage and hour compliance",
        "Executive compensation",
        "Severance negotiations",
      ],
      image: "https://images.unsplash.com/photo-1729346878607-0dfc1295ee5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXclMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzA4MDcyODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: FileText,
      title: "Contract Law",
      description: "Draft, review, and negotiate contracts that protect your interests.",
      services: [
        "Contract drafting and review",
        "Contract negotiation",
        "Breach of contract litigation",
        "Vendor and supplier agreements",
        "Service level agreements",
        "Terms and conditions",
      ],
      image: "https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMGNvbnRyYWN0fGVufDF8fHx8MTc3MDc0MTA3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Lock,
      title: "Data Privacy & Cybersecurity",
      description: "Ensure compliance with data protection regulations and secure your systems.",
      services: [
        "GDPR and CCPA compliance",
        "Privacy policy development",
        "Data breach response",
        "Cybersecurity assessments",
        "Data processing agreements",
        "Privacy impact assessments",
      ],
      image: "https://images.unsplash.com/photo-1619806677949-cbae91e82cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDgyNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Briefcase,
      title: "Business Litigation",
      description: "Strategic representation in complex commercial disputes.",
      services: [
        "Commercial litigation",
        "Partnership disputes",
        "Breach of fiduciary duty",
        "Fraud and misrepresentation",
        "Alternative dispute resolution",
        "Appellate practice",
      ],
      image: "https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA3NDM0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Practice Areas</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive legal services across multiple practice areas to meet all your business needs.
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {practiceAreas.map((area, index) => (
              <div
                key={area.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <area.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {area.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {area.description}
                  </p>
                  <div className="space-y-3">
                    {area.services.map((service) => (
                      <div key={service} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <img
                    src={area.image}
                    alt={area.title}
                    className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experienced attorneys are ready to help you navigate complex legal challenges.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
