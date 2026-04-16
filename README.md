# ⛏️ Start-Small (Task Miner)

> Don't overthink the whole mountain. Break it down, get a pickaxe, and dig the first shovel of dirt.

**Start-Small** is a gamified productivity web application designed to help people overcome task paralysis and anxiety. By leveraging the power of **DeepSeek AI**, it breaks down daunting tasks into 5 extremely small, physical, and actionable micro-steps. 

Take action, earn pickaxes, and play a relaxing mining mini-game to find hidden treasures!

## ✨ Features
- **🧠 AI Task Breakdown:** Powered by DeepSeek V3 to generate reliable, perfectly formatted JSON micro-steps.
- **🎮 Gamified Reward System:** Built with `p5.js`. Every completed micro-step grants a pickaxe to mine tiles for Gold and Diamonds.
- **⏱️ Focus Timer:** Built-in timer to track how long it takes to overcome the initial friction of starting a task.
- **🔒 Secure API Handling:** Uses Vercel Serverless Functions (`/api/chat`) to safely hide the DeepSeek API Key from the frontend.
- **📱 Fully Responsive:** Works flawlessly on desktop and mobile browsers.

## 🛠️ Tech Stack
- **Frontend:** Vanilla HTML, CSS, JavaScript, p5.js
- **Backend (Proxy):** Vercel Serverless Functions (Node.js)
- **AI Engine:** DeepSeek Chat API
- **Deployment:** Vercel

## 🚀 How to Play
1. Enter a task you are avoiding (e.g., "Clean Room", "Write Code").
2. Wait for the AI to break it down into 5 tiny physical steps.
3. Complete a step and check it off to earn a **Pickaxe**.
4. Click on the dirt field on the right to mine. Find hidden Gold (🪙) and Diamonds (💎)!
5. Once all steps are completed and all pickaxes are used, view your final mining report!
