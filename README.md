# Sort Lines Alphabetically (VS Code Extension)

## 👨‍💻 Authorship

* **Author:** Max Okhonko
* **Group:** 14

---

## 📌 Extension Overview

**Sort Lines Alphabetically** is a lightweight Visual Studio Code extension designed for quickly sorting selected lines alphabetically directly inside the editor.

### 🚀 Key Features

* **Alphabetical Sorting:** Correctly handles Cyrillic, Latin characters, and case-insensitive comparison.
* **Natural Numeric Sorting (`natural sort`):** The line `2. Item` will be placed before `10. Item`.
* **Cross-platform Compatibility:** Automatically detects LF (macOS/Linux) and CRLF (Windows) line ending formats.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed (recommended up-to-date versions):

* **[Node.js](https://nodejs.org/)**
* **[npm](https://www.npmjs.com/)**
* **[Visual Studio Code](https://code.visualstudio.com/)**
* **[Git](https://git-scm.com/)**

## 🛠 Installation & Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/maxokhonko/sort-lines-plugin.git
   cd sort-lines-plugin
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Open the project in VS Code and press `F5` to launch the **[Extension Development Host]** test window.

---

## 📖 How to Use

1. Select the block of lines you want to sort.
2. Press `Cmd+Shift+P` on macOS (or `Ctrl+Shift+P` on Windows/Linux) to open the Command Palette.
3. Type `Sort Lines: Alphabetically` and press `Enter`.
