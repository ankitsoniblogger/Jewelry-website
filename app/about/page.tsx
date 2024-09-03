import Image from "next/image";

const AboutUs = () => {
  return (
    <main className="bg-golden-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4 text-golden-700">
            About Our Jewelry Store
          </h1>
          <p className="text-xl text-golden-600 max-w-3xl mx-auto">
            Crafting elegance and luxury since 1995, we bring timeless beauty to
            life through our exquisite jewelry pieces.
          </p>
        </section>

        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/store-front.jpg"
              alt="Our Store Front"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-golden-700">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4">
              Founded in 1995 by master jeweler Elizabeth Goldsmith, our store
              has been a beacon of exquisite craftsmanship and timeless design
              for nearly three decades. What started as a small workshop has
              blossomed into a renowned jewelry destination, serving clients
              from all over the world.
            </p>
            <p className="text-gray-700">
              Our passion for creating beautiful, high-quality pieces that
              capture life's most precious moments drives everything we do. From
              engagement rings that symbolize eternal love to statement pieces
              that express individual style, each item in our collection tells a
              unique story.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-golden-700">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description:
                  "We use only the finest materials and adhere to the highest standards of craftsmanship.",
              },
              {
                title: "Integrity",
                description:
                  "Honesty and transparency are at the core of our business practices.",
              },
              {
                title: "Innovation",
                description:
                  "We constantly seek new designs and techniques to stay at the forefront of jewelry making.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-golden-600">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-golden-700">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Elizabeth Goldsmith", role: "Founder & Master Jeweler" },
              { name: "Michael Chen", role: "Lead Designer" },
              { name: "Sophia Patel", role: "Gemologist" },
              { name: "David Kim", role: "Customer Experience Manager" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={`/images/team-member-${index + 1}.jpg`}
                    alt={member.name}
                    width={160}
                    height={160}
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-golden-600">
                  {member.name}
                </h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-golden-700">
            Visit Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-golden-600">
                Address
              </h3>
              <p className="text-gray-700">123 Elegance Avenue</p>
              <p className="text-gray-700">Luxury District</p>
              <p className="text-gray-700">Gem City, GC 12345</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-golden-600">
                Support
              </h3>
              <p className="text-gray-700">Customer Service: (555) 123-4567</p>
              <p className="text-gray-700">Support Hours: Mon-Fri, 9am-6pm</p>
              <p className="text-gray-700">Email: support@luxuryjewels.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-golden-600">
                Contact
              </h3>
              <p className="text-gray-700">General Inquiries: (555) 987-6543</p>
              <p className="text-gray-700">Email: info@luxuryjewels.com</p>
              <p className="text-gray-700">Fax: (555) 246-8910</p>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-golden-700">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you offer custom jewelry design?",
                a: "Yes, we offer custom design services. Our expert designers will work closely with you to create a unique piece tailored to your preferences.",
              },
              {
                q: "What is your return policy?",
                a: "We offer a 30-day return policy for most items. Custom pieces are non-returnable. Please see our full policy for details.",
              },
              {
                q: "Do you provide jewelry appraisals?",
                a: "Yes, we offer professional appraisal services for insurance and estate purposes.",
              },
              {
                q: "How do I care for my jewelry?",
                a: "We recommend regular cleaning and professional check-ups. Visit our care guide for specific instructions based on your jewelry type.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-golden-600">
                  {faq.q}
                </h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
