# Creative Gallery — Frontend Web Development Internship Assignment

## 📌 Project Overview
This repository contains a dynamic, feature-rich **Creative Gallery** web application built as part of the **CodeAlfa Frontend Web Development Internship**. The project delivers an interactive, highly responsive image platform allowing users to browse, filter, search, and catalog media items seamlessly[cite: 5, 6]. 

By mixing clean CSS columns masonry with structural vanilla JavaScript events, it achieves a production-ready interface that balances creative visuals with robust internal state filtering[cite: 6, 7].

---

## ✨ Features
* **Masonry Grid System:** Uses modern `column-count` CSS mechanics to group assets with a fluid, multi-column stagger effect across varying media heights[cite: 7].
* **Real-Time Interactive Search:** Listens instantly to keystroke changes, filtering dataset items live to match image titles immediately[cite: 5, 6].
* **Category Filtering System:** Dedicated layout control toggles to isolate graphics instantly by tags like `Nature`, `City`, `Animals`, `Food`, or `Travel`[cite: 5, 6].
* **Immersive Interactive Lightbox:** Full-screen modal display complete with next/prev cycling selectors, metadata tracking, exit controls, and keypress navigation mappings (`Escape`, `ArrowRight`, `ArrowLeft`)[cite: 5, 6, 7].
* **Interactive Favorites Overlay:** Hover-triggered sliding description blocks featuring a responsive heart tracker toggle system to save elements locally on screen[cite: 6, 7].
* **Dual-Theme Environment Switcher:** Accessible header mode controls utilizing smooth standard variables to transition seamlessly from dark slate into bright modes[cite: 5, 6, 7].

---

## 🛠️ Technologies & Tools Used
* **HTML5:** Handles semantic markup configurations, button element configurations, and core structural tags for the overlay modal.
* **CSS3:** Incorporates complex layout engines, fluid responsive media queries, frosted blur properties (`backdrop-filter`), transitions, and hover zoom scaling effects[cite: 7].
* **FontAwesome (v6.5.0):** Imports modern, scalable icons for the interactive theme toggle switches and liking system workflows.
* **JavaScript (ES6+):** Pure functional DOM engine utilizing analytical array methodologies (`.filter()`, `.forEach()`) and dataset injections to map rendering models dynamically without complex frameworks.

---

## 📂 File Structure
```text
├── index.html     # Semantic skeletal structure, action elements, and layout targets
├── style.css      # Core grid logic, responsive media queries, and layout definitions
├── script.js      # Computational engine, array dataset models, and interactive events
└── README.md      # Project summary and documentation handbook
🚀 How to Run the Project LocallyFollow these simple steps to run the application instantly on your hardware:
Clone the Repository:Bashgit clone [https://github.com/venkateshmalla1/codealpha_tasks.git](https://github.com/venkateshmalla1/codealpha_tasks.git)
Navigate into the Task Directory:Bashcd codealpha_tasks/ImageGallary
Launch the Application:Double-click the index.html file to launch it within any modern web browser[cite: 5].
Alternatively, right-click index.html in VS Code and choose "Open with Live Server" to establish a hot-reloading development pipeline[cite: 5].
💻 Logic Mechanics & Event MappingsThe gallery runs entirely on a data-driven layer defined inside script.js:  renderGallery(data): Dynamically builds custom HTML item cards complete with inline index data descriptors, then launches targeted event listeners.  attachEvents(): Binds interactive actions safely across standard media card elements to minimize structural overhead.  
updateLightbox(): Dynamically updates the full-screen modal viewport with the selected image URL, title tags, and tracker index markers.  
Keyboard Triggers: Uses a central event router to process window commands, allowing fluid desktop surfing using standard directional keyboard arrows[cite: 6].
🎓 Internship Acknowledgments Organization: CodeAlfa
Role: Frontend Web Development 
InternTask: Creative Image Gallery Assignment
