const faqs = [
  {
    question: "How do I reset my password?",
    answer: "Click the 'Forgot Password' link on the login page and follow the instructions."
  },
  {
    question: "Where can I view my purchase history?",
    answer: "You can view your purchase history from the Orders section in your account dashboard."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach our customer support via email or live chat available on our website."
  },
  {
    question: "Can I change my registered email address?",
    answer: "Yes, go to account settings and update your email information."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use industry-standard encryption to keep your data safe."
  }
];
const container = document.getElementById("faqContainer");

function renderFAQs() {
  faqs.forEach((faq, index) => {
    const item = document.createElement("div");
    item.classList.add("faq-item");

    item.innerHTML = `
      <div class="faq-question" role="button" tabindex="0" aria-expanded="false" aria-controls="faq${index}">
        ${faq.question}
        <span class="indicator">+</span>
      </div>

      <div class="faq-answer" id="faq${index}">
        <p>${faq.answer}</p>
      </div>
    `;

    container.appendChild(item);
  });

  attachEvents();
}

function attachEvents() {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question, index) => {
    question.addEventListener("click", () => toggleFAQ(index));

    question.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        toggleFAQ(index);
      }
    });
  });
}

function closeAllFAQs() {
  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    item.classList.remove("active");
    item.querySelector(".faq-question").setAttribute("aria-expanded", "false");
    item.querySelector(".indicator").textContent = "+";
  });
}

function toggleFAQ(index) {
  const items = document.querySelectorAll(".faq-item");
  const current = items[index];

  if (current.classList.contains("active")) {
    closeAllFAQs();
  } else {
    closeAllFAQs();

    current.classList.add("active");
    current.querySelector(".faq-question").setAttribute("aria-expanded", "true");
    current.querySelector(".indicator").textContent = "-";
  }
}

document.addEventListener("DOMContentLoaded", renderFAQs);
