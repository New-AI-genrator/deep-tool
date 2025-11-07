import { SectionHeader } from '../../components/SectionHeader';
import { FAQSchema } from '../../components/StructuredData';

export default function FAQPage() {
  const faqs = [
    {
      question: "What is DeepTool?",
      answer: "DeepTool is the world's largest directory of AI tools and software services, featuring over 10,000 premium tools across 264 categories. We help businesses and individuals discover, compare, and select the perfect tools for their needs."
    },
    {
      question: "How do you curate the tools in your directory?",
      answer: "Our team of AI experts manually reviews and categorizes each tool based on functionality, user reviews, pricing, and market position. We regularly update our database to ensure accuracy and relevance."
    },
    {
      question: "Is there a cost to use DeepTool?",
      answer: "DeepTool is completely free to use for discovering and comparing tools. We may offer premium features in the future, but basic tool discovery and comparison will always remain free."
    },
    {
      question: "How often is the tool database updated?",
      answer: "We update our tool database daily with new tools, updated information, and user reviews. Our team continuously monitors the AI landscape to ensure our directory remains current and comprehensive."
    },
    {
      question: "Can I submit my tool to be listed?",
      answer: "Yes! We welcome tool submissions from developers and companies. You can submit your tool through our contact page, and our team will review it for inclusion in our directory."
    },
    {
      question: "How do you ensure the accuracy of tool information?",
      answer: "We verify tool information through multiple sources including official websites, user reviews, and direct communication with tool providers. We also encourage user feedback to help maintain accuracy."
    },
    {
      question: "Do you offer affiliate links to tools?",
      answer: "Some links to tools may be affiliate links, which help support our platform at no additional cost to you. We clearly mark affiliate relationships and maintain editorial independence in our tool evaluations."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team through our Contact page or by emailing support@deep-tool.vercel.app. We typically respond to inquiries within 24 hours."
    }
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="min-h-screen bg-aether-obsidian">
        <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about DeepTool and our AI tools directory."
          />

          <div className="mt-12 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                <h2 className="text-xl font-bold text-white mb-4">{faq.question}</h2>
                <p className="text-aether-mist">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-aether-mist mb-6">
              If you can't find the answer you're looking for, please don't hesitate to contact our support team.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </>
  );
}