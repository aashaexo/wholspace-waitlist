const faqs = [
  {
    question: 'Is this free?',
    answer: 'Yes, free for creators. Brands pay.',
  },
  {
    question: "What's the catch?",
    answer: "We take 10% when you get paid. That's it.",
  },
  {
    question: 'When do you launch?',
    answer: 'Q1 2026. Waitlist gets first access.',
  },
  {
    question: 'What if I have a manager?',
    answer: 'You can still join. Keep your relationships.',
  },
]

export default function FAQ() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="accent-underline">Questions</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-dark-card border border-dark-border"
            >
              <h3 className="text-lg font-bold text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-text-secondary">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
