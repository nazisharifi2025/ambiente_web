import { useState } from "react";

export default function AskedQu() {
  const [openIndex, setOpenIndex] = useState(null); // مشخص می‌کند کدام سوال باز است

  const toggleAnswer = (index) => {
    // اگر همون سوال کلیک شده باشه، ببندش. وگرنه بازش کن
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqList = [
    {
      question: "How does the design process begin?",
      answer:
        "Our design process begins with an initial consultation where we understand your vision, needs, and budget. From there, we move into planning, conceptual design, and refinement until the final proposal is approved.",
    },
    {
      question: "How long will it take to complete my design project?",
      answer:
        "We offer a comprehensive range of services designed to meet your specific needs. Our expertise includes architectural design, interior design, project management, and consultation. Whether you're starting a new project or enhancing an existing one, our team is here to guide you through every step, ensuring innovative solutions and exceptional results.",
    },
    {
      question: "Do you carry out remote projects?",
      answer:
        "We offer a comprehensive range of services designed to meet your specific needs. Our expertise includes architectural design, interior design, project management, and consultation. Whether you're starting a new project or enhancing an existing one, our team is here to guide you through every step, ensuring innovative solutions and exceptional results.",
    },
    {
      question: "What is the payment process?",
      answer:
        "We typically work on a milestone-based payment system. A deposit is required upfront, followed by payments at key stages of the project.",
    },
    {
      question: "Do I need to hire an architect for my project?",
      answer:
        "Hiring an architect is recommended for complex projects. Our team includes experienced architects who can ensure compliance, functionality, and aesthetic appeal.",
    },
  ];

  return (
    <div>
      <div className="w-[90%] mx-auto flex lg:flex-row flex-col justify-between h-fit my-12 items-center">
        <h1 className="font-medium lg:text-5xl md:text-3xl text-2xl lg:text-left text-center font-ply w-[80%]">
          Answers to Your Frequently Asked Questions
        </h1>
        <div className="flex flex-col gap-6 items-center">
          <p className="text-gray-500 font-medium w-[90%] lg:text-left text-center ">
            Discover our featured works showcasing our expertise and passion in
            every project. Let these stories inspire your next venture!
          </p>
        </div>
      </div>

      <div className="w-[80%] h-fit mx-auto flex flex-col gap-5">
        {faqList.map((item, index) => (
          <div key={index}>
            <div className="w-full flex justify-between items-center border-b py-2">
              <h1 className="text-xl font-ply">{item.question}</h1>
              <span
                className="material-symbols-outlined cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                {openIndex === index ? "keyboard_arrow_up" : "keyboard_arrow_down"}
              </span>
            </div>
            <p
              className={`text-gray-600 transition-all duration-500 font-medium ${
                openIndex === index ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
