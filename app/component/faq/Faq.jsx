"use client";

import { useState } from 'react';
import './Faq.css';

const faqData = [
  {
    question: "Who is Cybervol best suited for?",
    answer: "We work with organizations that treat security as a strategic capability—from growing teams that need structure, to mature programs looking to validate or extend what they already have."
  },
  {
    question: "Do you only offer long-term engagements?",
    answer: "We offer flexible engagements tailored to your needs, ranging from focused assessments to long-term strategic partnerships."
  },
  {
    question: "Can you integrate with our existing tools and vendors?",
    answer: "Yes, we pride ourselves on our ability to integrate seamlessly with a wide variety of security tools and existing vendor ecosystems."
  },
  {
    question: "Where can we contact you?",
    answer: "You can contact us through our contact form, email, or by scheduling a direct consultation with our expert team."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-layout">
          {/* Left Column: Content */}
          <div className="faq-header-column">
            <span className="faq-badge">FAQ'S</span>
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">
              Quick answers to common questions about how we work with clients.
            </p>
            <button className="view-all-faqs-btn">View all FAQs</button>
          </div>

          {/* Right Column: Accordion */}
          <div className="faq-accordion-column">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
              >
                <div 
                  className="faq-question-row" 
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="faq-question">{item.question}</h3>
                  <span className="faq-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
                <div className="faq-answer-row">
                  <div className="faq-answer-content">
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
