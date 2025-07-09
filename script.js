// ==== All Ideas (10 per category) ====
const ideas = [
  // Meme Ideas
{
  id: 1,
  category: 'meme',
  name: 'When You Say "I’ll Just Rest My Eyes"',
  keyword: 'sleep, procrastination',
  short: 'That nap turns into tomorrow.',
  long: 'A super relatable meme where you lie down for “5 minutes” after studying or working and wake up 4 hours later wondering what year it is. Perfect for showing a before-and-after format: first panel is “I’ll just rest my eyes,” second panel is darkness with “2:37 AM.” It highlights how small breaks can become sleep marathons. Great for student or freelancer humor.'
},
{
  id: 2,
  category: 'meme',
  name: 'WiFi Signal: Strong, Internet: Dead',
  keyword: 'wifi, rage, tech',
  short: 'WiFi is there but still nothing loads.',
  long: 'The classic frustration — WiFi shows full bars, but nothing opens. A perfect meme moment for showing rage and helplessness. You can use the “Distracted Boyfriend” format where the guy is ignoring "Strong WiFi" and running after "No Internet". Or a "Drake format" meme with: "WiFi connected ✅" = 😐 and "Internet not working ❌" = 😡. Everyone in Pakistan or hostel life can relate hard.'
},
{
  id: 3,
  category: 'meme',
  name: 'Online Class Be Like: Can You Hear Me?',
  keyword: 'zoom, online class',
  short: 'Mic off. Camera off. Soul off.',
  long: 'A meme about Zoom/online classes — the teacher asking “Can you hear me?” repeatedly while students pretend their mic is broken. Include the famous “connection lost” excuse or "I was kicked out" lie. The meme shows the struggle of online learning — buffering faces, frozen screens, and those awkward silences. Use real screenshots or comic illustration style.'
},
{
  id: 4,
  category: 'meme',
  name: 'Browser With 30 Tabs Open: Still Need One More',
  keyword: 'multitasking, dev life',
  short: 'We all open tabs we’ll never read.',
  long: 'This meme mocks how we open 20+ tabs while researching or coding but only use 2. Perfect for developer/student life. You can show a computer crying under tab pressure or someone trying to find “that one tab” with panic. Add a caption like: "Chrome using 89% RAM just to hold my anxiety." Highly relatable for productivity memes.'
},
{
  id: 5,
  category: 'meme',
  name: 'Coding: 1% Writing Code, 99% Fixing Bugs',
  keyword: 'coding, bugs, struggle',
  short: 'Debugging is a full-time job.',
  long: 'A hilarious developer meme showing how most time is not spent writing code — it’s spent *begging the code to work*. Example: Picture of a developer confidently typing vs the next slide, Googling "why array is undefined in JS." Add a facepalm meme or the “This is fine” dog sitting in fire. Everyone who’s touched code will feel this.'
},
{
  id: 6,
  category: 'meme',
  name: 'Low Battery = Maximum Productivity',
  keyword: 'phone, battery, motivation',
  short: 'Only 1% battery and suddenly you’re Elon Musk.',
  long: 'A fun meme where your phone is dying, and suddenly you remember every task you’ve ignored. Youre copying notes, replying to DMs, uploading files, and making plans — all in 45 seconds before it shuts down. Format idea: “1% battery left: Becomes most efficient version of self.” It’s dramatic and relatable!'
},
{
  id: 7,
  category: 'meme',
  name: 'When Mom Says "Pause Your Online Game"',
  keyword: 'gaming, desi mom',
  short: 'You can’t pause online 😭',
  long: 'Gamers know this pain: You’re playing an intense online match, and mom shouts “Pause it and come eat!” This meme captures the frustration when non-gamers don’t get that online games can’t pause. Use that screaming cat meme or “angry Pikachu” style. A perfect desi twist is adding subtitles like: “Mujhe kya matlab online hai ya offline. Khana thanda ho raha hai.”'
},
{
  id: 8,
  category: 'meme',
  name: 'When Your Code Works But You Don’t Know Why',
  keyword: 'code, lucky bug fix',
  short: 'Don’t touch it. Just run.',
  long: 'This is for every developer who fixed a bug by accident. One moment the code gives 100 errors, the next it works magically — and you’re too scared to change anything. Use the “confused Mr. Bean” or “cat staring at screen” meme. Caption: "It works… and I’m not touching anything ever again."'
},
{
  id: 9,
  category: 'meme',
  name: 'Group Projects: One Person Doing Everything',
  keyword: 'group work, uni life',
  short: 'Group project? More like solo mission.',
  long: 'Every student has experienced this — the group project where only one person does all the work while others disappear. Make a meme with "Team photo:" and show one person crying with laptop while others party. Add text like: “Contribution: Me - 99%, Others - Emotional support.” Super relatable for college/university life.'
},
{
  id: 10,
  category: 'meme',
  name: 'Trying to Eat Quietly in Online Class',
  keyword: 'online class, eating',
  short: 'Mic off. Crunch level: earthquake.',
  long: 'This meme shows the awkward moment when you try to eat something during a Zoom class and your mic turns on. Suddenly the entire class hears chips crunching louder than the teacher. Use a “zoom mic sensitivity 1000%” joke or “me chewing in online class: CRUNCH CRUNCH.” Perfect for relatable student humor.'
},

  // Tech Ideas
 {
  id: 11,
  category: 'tech',
  name: 'AI in Daily Life',
  keyword: 'AI, automation',
  short: 'How AI tools simplify our daily work.',
  long: 'Artificial Intelligence has already become part of our daily routines — even if we don’t realize it. From virtual assistants like Alexa and Google Assistant reminding us of meetings, to Netflix recommending what to watch, AI is automating everything. This idea can explore how AI is used in online shopping suggestions, personalized ads, food delivery route optimization, auto-correct in messaging apps, and even spam filters in Gmail. The focus is to show real, simple examples of how AI surrounds us and improves our efficiency.'
},
{
  id: 12,
  category: 'tech',
  name: 'Future of Web 3.0',
  keyword: 'blockchain, decentralization',
  short: 'Web 3.0 explained in a simple way.',
  long: 'Web 3.0 is the next generation of the internet that focuses on decentralization and user control. Unlike Web 2.0 where big companies own your data (like Google or Facebook), Web 3.0 allows users to control their identity, money, and content using blockchain technology. This idea is perfect for explaining terms like DAOs, dApps, crypto wallets, and smart contracts in an easy-to-understand way. You can also show examples like IPFS, Ethereum, and how NFTs and DeFi work in this new web model.'
},
{
  id: 13,
  category: 'tech',
  name: 'Top 5 Programming Languages in 2025',
  keyword: 'coding, dev career',
  short: 'Trending programming tools to learn.',
  long: 'This idea explores the most in-demand programming languages in 2025 with reasons. Python — for data science, AI, and backend. JavaScript — for web development and frontend. Rust — for system-level performance and memory safety. Go (Golang) — for cloud-native apps and speed. TypeScript — because companies prefer strong typing in JavaScript projects. You can include salary trends, job roles, and developer community support for each. This helps learners know where to invest their time.'
},
{
  id: 14,
  category: 'tech',
  name: 'Build Your Own Chatbot',
  keyword: 'chatbot, automation',
  short: 'Simple way to make a chatbot.',
  long: 'Teach how to build a simple chatbot using tools like Dialogflow, JavaScript, or OpenAI API. Start with the basic concept: what is a chatbot and where it’s used (like customer support, WhatsApp bots, or websites). Then explain intents, training phrases, and responses. Show how to connect the chatbot to a front-end website or mobile app. This is a great beginner project idea that introduces both logic and real-world application in automation.'
},
{
  id: 15,
  category: 'tech',
  name: 'Why Everyone’s Learning UI/UX',
  keyword: 'design, user experience',
  short: 'Importance of user-centered design.',
  long: 'More companies now focus on design because users expect smooth, beautiful, and responsive websites/apps. This idea explains the importance of good UI (User Interface) and UX (User Experience). It can also introduce tools like Figma, Adobe XD, and Framer for design and prototyping. Share how even developers should learn UI/UX basics to collaborate better and how UI/UX influences customer satisfaction, conversion rate, and brand image.'
},
{
  id: 16,
  category: 'tech',
  name: 'IoT and Smart Homes',
  keyword: 'iot, smart home',
  short: 'Smart home tech revolution.',
  long: 'Internet of Things (IoT) is the network of smart devices connected through the internet — like smart bulbs, home security systems, voice assistants (Alexa, Siri), and even fridges. This idea can explore how these devices collect data, automate routines (like turning off lights when you leave), and even save energy. You can explain sensors, cloud control, and real-life use cases. It’s also great for showing the future of home automation.'
},
{
  id: 17,
  category: 'tech',
  name: 'Cloud vs Edge Computing',
  keyword: 'cloud, edge',
  short: 'What’s the difference?',
  long: 'Cloud computing means data is processed on remote servers (like AWS, Google Cloud), while Edge computing means the data is processed near the device itself. This idea helps explain why edge computing is useful in real-time applications like self-driving cars, surveillance cameras, and industrial robots. You can compare both methods, show where each is better, and use visuals like a cloud vs a small device chip for better understanding.'
},
{
  id: 18,
  category: 'tech',
  name: 'Cybersecurity for Students',
  keyword: 'online safety, security',
  short: 'Stay safe online in simple ways.',
  long: 'A practical guide to help students and general users stay safe on the internet. Explain common cyber threats like phishing, fake emails, weak passwords, and malware. Recommend using password managers, 2-Factor Authentication (2FA), updating software, avoiding suspicious links, and using trusted antivirus tools. You can also add real examples of online scams targeting youth. Make it simple, visual, and action-oriented.'
},
{
  id: 19,
  category: 'tech',
  name: 'AR in Education',
  keyword: 'augmented reality, edtech',
  short: 'How AR can improve learning.',
  long: 'Augmented Reality (AR) is transforming the way students learn. Instead of reading boring textbooks, students can see 3D models, animations, and interactive content through mobile apps or AR glasses. For example, medical students can see organs in 3D, and history students can visit virtual museums. This idea explores how AR makes learning more engaging and helps students understand difficult concepts better.'
},
{
  id: 20,
  category: 'tech',
  name: 'How Websites Work',
  keyword: 'frontend, backend',
  short: 'From browser to server.',
  long: 'Most beginners use websites daily but don’t know how they load. This idea explains how a browser converts a URL into a website by sending a request to a server, using DNS, receiving HTML, CSS, and JavaScript files, and finally rendering them on the screen. It also explains the difference between frontend and backend, what databases do, and how developers build and deploy websites. This gives a great overview for complete beginners.'
},


// youtube
{
  id: 21,
  category: 'youtube',
  name: 'Day in the Life of a Programming Student',
  keyword: 'student vlog, coding life',
  short: 'A realistic day of a programming student.',
  long: 'Record your full day as a computer science student or self-taught learner. Start with waking up, classes or coding practice, projects, debugging struggles, coffee breaks, and how you stay motivated. Add voiceover to make it engaging and relatable. It’s great for students and aspiring coders who want to see what real learning looks like.'
},
{
  id: 22,
  category: 'youtube',
  name: '5 Tools Every Developer Should Use',
  keyword: 'developer tools, productivity',
  short: 'Boost productivity with essential dev tools.',
  long: 'Create a YouTube video showing your top 5 favorite tools for coding. For example, VS Code extensions, GitHub Copilot, ChatGPT, Figma for UI, and Notion or Trello for organizing tasks. Give short demos of each and explain why they help you code smarter and faster.'
},
{
  id: 23,
  category: 'youtube',
  name: 'Learning JavaScript from Scratch',
  keyword: 'javascript, beginner tutorial',
  short: 'Teach JS basics step-by-step.',
  long: 'Create a beginner-friendly tutorial series where you teach JavaScript from zero. Start with variables, data types, conditions, loops, and functions. Explain each concept slowly with examples and real code, so even non-coders can follow along.'
},
{
  id: 24,
  category: 'youtube',
  name: 'How to Make a Personal Portfolio Website',
  keyword: 'portfolio, web dev',
  short: 'Guide to build your personal website.',
  long: 'Show step-by-step how to build a responsive personal portfolio using HTML, Tailwind CSS, and JavaScript. Include sections like About, Projects, Skills, and Contact. Explain how to host it on GitHub Pages or Netlify. Perfect for beginners who want to showcase their work online.'
},
{
  id: 25,
  category: 'youtube',
  name: 'React vs Vanilla JavaScript',
  keyword: 'frontend, comparison',
  short: 'Compare React with basic JS.',
  long: 'In this video, compare building the same mini project (like a to-do app) using both Vanilla JavaScript and React. Show how React makes things easier (like state handling, components) but also the learning curve. This helps new developers decide where to start.'
},
{
  id: 26,
  category: 'youtube',
  name: 'My GitHub Projects Explained',
  keyword: 'open source, github',
  short: 'Walkthrough of your GitHub projects.',
  long: 'Show 2–3 of your GitHub repositories and explain what each project does, what tech you used, and what you learned. It gives you credibility, helps viewers understand the code, and inspires others to build and share their projects too.'
},
{
  id: 27,
  category: 'youtube',
  name: 'How I Organize My Coding Routine',
  keyword: 'coding habits, study tips',
  short: 'Organize your coding time effectively.',
  long: 'A motivational and educational video where you explain how you schedule coding practice, projects, rest, and learning new topics. Share productivity tips, Pomodoro technique, note-taking methods, and how to avoid burnout. Add a digital planner or Notion demo too!'
},
{
  id: 28,
  category: 'youtube',
  name: 'Top 3 Mistakes Beginners Make in Web Development',
  keyword: 'web dev tips, advice',
  short: 'Save time by avoiding beginner mistakes.',
  long: 'Talk about the most common mistakes you or others made while learning web development — like ignoring responsiveness, skipping version control, or copy-pasting without understanding. Use real examples and offer practical solutions to avoid those problems.'
},
{
  id: 29,
  category: 'youtube',
  name: 'How I Use ChatGPT for Coding Projects',
  keyword: 'ai tools, productivity',
  short: 'Boost your workflow using ChatGPT.',
  long: 'Explain how you use ChatGPT to debug code, generate starter templates, write documentation, or get ideas for new projects. Record your screen and give examples to make it a powerful tutorial on how AI can support developers instead of replacing them.'
},
{
  id: 30,
  category: 'youtube',
  name: 'Build and Host a Project in 30 Minutes',
  keyword: 'mini project, deploy fast',
  short: 'Fast project from scratch to live.',
  long: 'Create a challenge-style video where you build a mini web app (like a weather app or calculator) in under 30 minutes and host it live on GitHub Pages or Netlify. Add timers, steps, and fun narration to keep it entertaining and helpful.'
},

// funny
{
  id: 31,
  category: 'funny',
  name: 'Types of Friends During Exams',
  keyword: 'exam, friends, college life',
  short: 'A comedy sketch showing exam week friends.',
  long: 'Create a funny skit showing different types of friends during exams: the “I didn’t study at all but gets 90%”, the one who starts cramming last minute, the panic master, the one who studies everything except what’s asked, and the one who just gives up. Exaggerate the reactions and add dramatic background music for comic effect.'
},
{
  id: 32,
  category: 'funny',
  name: 'When WiFi Stops Working for 10 Seconds',
  keyword: 'wifi, internet, frustration',
  short: 'Drama over WiFi losing connection.',
  long: 'Create a short video that over-dramatizes what people do when WiFi stops for just 10 seconds. Show them crying, screaming at the router, restarting it 5 times, checking the speed test, blaming PTCL, and suddenly becoming an IT expert. Add slow motion and Bollywood music for full comedy.'
},
{
  id: 33,
  category: 'funny',
  name: 'Expectation vs Reality of Waking Up Early',
  keyword: 'morning routine, laziness',
  short: 'Waking up at 5 AM… in your dreams.',
  long: 'Create a video that shows the "motivation" at night to wake up early, set alarms, prepare clothes, but in reality — snoozing 7 times, checking phone for 1 hour, and getting up at 12 PM. Use voiceovers and funny text captions for humor.'
},
{
  id: 34,
  category: 'funny',
  name: 'Tech Support from Desi Parents',
  keyword: 'parents, technology, relatable',
  short: 'Parents asking tech questions be like...',
  long: 'A hilarious skit showing desi parents asking for tech help — like “beta WhatsApp download hogaya?”, “where is Facebook?”, or typing "Google" into Google. Show how they press every button, exit apps mid-call, and blame you if it breaks. Use real dialogue style to make it super relatable.'
},
{
  id: 35,
  category: 'funny',
  name: 'Types of People on Group Chats',
  keyword: 'group chat, friendship',
  short: 'The silent one, the spammer, and more.',
  long: 'Make a video/skit showing funny group chat behaviors — the ghost member, the meme spammer, the over-serious one, the one who only appears during fights, and the admin who doesn’t even know they’re admin. Add exaggerated reactions and message pop-up sounds for comedy.'
},
{
  id: 36,
  category: 'funny',
  name: 'Online Class Struggles',
  keyword: 'zoom, online classes',
  short: 'When your mic is on and you don’t know.',
  long: 'A funny dramatization of online class problems: mic on during gossip, forgetting to mute, sleeping with camera on, pretending there’s a network issue, or answering questions with laggy audio. Show the teacher’s confused face and classmates trying not to laugh.'
},
{
  id: 37,
  category: 'funny',
  name: 'When You Forget Your Password',
  keyword: 'password, rage, accounts',
  short: 'Resetting password spiral begins.',
  long: 'Act out the hilarious process of forgetting your password: trying all your common ones, answering security questions like “What’s your best friend’s middle name?” and finally resetting it to the same old password. Add internal monologue to show frustration.'
},
{
  id: 38,
  category: 'funny',
  name: 'Trying to Take the Perfect Picture',
  keyword: 'photography, friends',
  short: '100 pictures. Still not good enough.',
  long: 'A funny skit showing someone trying to get a good picture: changing angles, lighting, hair, outfit, pose — but still saying “ew” to every photo. Then finally posting the first one with the caption “random click.” Add photo filters and edits to exaggerate the drama.'
},
{
  id: 39,
  category: 'funny',
  name: 'Food Delivery Expectations vs Reality',
  keyword: 'food, delivery, hunger',
  short: 'That moment when it’s not what you ordered.',
  long: 'Show someone super excited waiting for food — tracking every second, setting the table, opening the box dramatically — only to find the wrong order, cold fries, or missing sauce. Add a flashback of what was shown in the app vs what was delivered. Add sad music for comedy.'
},
{
  id: 40,
  category: 'funny',
  name: 'Every Pakistani Cousins’ Wedding Scene',
  keyword: 'wedding, family',
  short: 'The rishtay wali aunties are ready.',
  long: 'A comedy idea where you show different types of people at a cousin’s wedding: the food hunter, the photo obsessed, the rishta hunter aunty, the dance squad, and the bored kids on phones. Add some over-the-top wedding music and desi dialogues to make it funny and real.'
}
  
];

// ==== Render Function ====
function renderIdeas(filtered) {
  const container = document.getElementById('ideasContainer');
  container.innerHTML = '';
  filtered.forEach(idea => {
    const card = document.createElement('div');
    card.className = 'bg-white border-gray-200 relative group hover:border-gray-500 p-4 border-2 rounded-2xl shadow hover:shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer overflow-hidden';
    card.onclick = () => openIdeaDetails(idea);
    card.innerHTML = `
  <div class="relative overflow-hidden h-full">
    <div class="transition duration-300 group-hover:blur-sm">
      <h2 class="text-lg font-semibold">${idea.name}</h2>
      <p class="text-sm text-gray-500 bg-gray-100 italic">${idea.keyword}</p>
      <p class="mt-2 text-gray-700 text-sm">${idea.short}</p>
    </div>
    <div class="absolute inset-0 z-100  flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ">
      <span class="text-gray-500 text-sm font-medium">See more →</span>
    </div>
  </div>
`;
    container.appendChild(card);
  });
}

// ==== Filter Function ====
function filterIdeas(category) {
  if (category === 'all') {
    renderIdeas(ideas);
  } else {
    const filtered = ideas.filter(idea => idea.category === category);
    renderIdeas(filtered);
  }
}

// ==== Search Function ====
function searchIdeas() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = ideas.filter(idea =>
    idea.name.toLowerCase().includes(query) ||
    idea.keyword.toLowerCase().includes(query) ||
    idea.short.toLowerCase().includes(query)
  );
  renderIdeas(filtered);
}

// ==== Click to View Details ====
function openIdeaDetails(idea) {
  localStorage.setItem('selectedIdea', JSON.stringify(idea));
  window.location.href = 'ideadetail.html';
}

// ==== Initial Render ====
renderIdeas(ideas);