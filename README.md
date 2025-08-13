📝 JavaScript Quiz Game
A simple, beginner-friendly quiz game built with JavaScript, HTML, and CSS.
This game challenges users with 20 easy coding questions covering basic programming concepts, HTML, and JavaScript fundamentals.

🎯 Features
20 Beginner Coding Questions – Covers programming basics, HTML tags, and JavaScript syntax.

Multiple Choice Format – Each question has 4 possible answers.

Score Tracking – Keep track of correct answers.

Instant Feedback – Shows whether your choice was correct or not.

Easy to Customize – Add, remove, or edit questions by modifying the quizQuestions array.

🛠️ How It Works
Questions are stored in a JavaScript array (quizQuestions).

Each question has a text property for the answer and a correct boolean to mark the right answer.

The game loops through each question, displays the possible answers, and waits for the player’s selection.

The score is updated based on correct answers.

📂 Project Structure
bash
Copy
Edit
/quiz-game
│── index.html      # Main game page  
│── style.css       # Styling for the quiz  
│── script.js       # Game logic & quiz questions array  
│── README.md       # Project documentation  
🚀 Getting Started
1️⃣ Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/quiz-game.git
cd quiz-game
2️⃣ Open the game
Simply open index.html in your web browser to start playing.

🎨 Customization
You can easily change the quiz content:

Open script.js

Find the quizQuestions array

Add new questions or update existing ones:

javascript
Copy
Edit
{
  question: "What does CSS stand for?",
  answers: [
    { text: "Cascading Style Sheets", correct: true },
    { text: "Creative Style System", correct: false },
    { text: "Computer Style Syntax", correct: false },
    { text: "Colorful Style Sheets", correct: false }
  ]
}
📌 Technologies Used
HTML5 – Structure of the quiz

CSS3 – Styling and layout

JavaScript (ES6) – Game logic and question handling

📜 License
This project is licensed under the MIT License – you’re free to use, modify, and share it.
