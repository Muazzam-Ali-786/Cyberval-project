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
        <div className="faq-left">
          <div className="faq-badge-wrapper">
            <span className="faq-badge">FAQ'S</span>
          </div>
          <h2 className="faq-title">
            Frequently Asked <br />
            <span className="blue-text-faq">Questions</span>
          </h2>
          <p className="faq-description">
            Quick answers to common questions about how we work with clients.
          </p>
          <button className="faq-view-all">View all FAQ's</button>
        </div>

        <div className="faq-right">
          <div className="faq-accordion">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
              >
                <div 
                  className="faq-question" 
                  onClick={() => toggleAccordion(index)}
                >
                  <h4>{item.question}</h4>
                  <span className="faq-icon">
                    <img src="/Arrow 6.svg" alt="Toggle FAQ" />
                  </span>
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
