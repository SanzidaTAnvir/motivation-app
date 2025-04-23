const quotes = [
  "জীবনে বড় হতে হলে বড় স্বপ্ন দেখতে হয়।",
  "আজকে কষ্ট করো, আগামীকাল সেই কষ্ট ফল দেবে।",
  "ভুল করতে ভয় পেও না, ভুল থেকেই শেখা হয়।",
  "অন্যদের মতো হবার চেয়ে নিজেকে চেনা বেশি জরুরি।",
  "প্রতিদিন একটু একটু করে এগিয়ে গেলেই বড় কিছু সম্ভব।",
  "তোমার সীমা শুধু তোমার মনেই আছে।",
  "হার মানা নয়, উঠে দাঁড়ানোই বীরের কাজ।"
];

function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
}
