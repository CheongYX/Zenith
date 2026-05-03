# 🚀 Zenith

> A modern, immersive, and highly customizable personal digital garden & portfolio template built with React, Vite, and Tailwind CSS.

Zenith is more than just a static resume—it's a knowledge management platform equipped with an advanced Markdown rendering engine. It helps developers, researchers, and creators build an elegant digital garden to showcase projects, write blogs, and share ideas.

## ✨ Core Features

- **📝 Advanced Markdown Engine**
  - **Smart Tabs:** Automatically slice long Markdown files into seamless tabbed navigation using simple `<!-- tab: Title -->` comments.
  - **Dynamic TOC:** The engine automatically scans your `#` headings and generates an interactive, highlighted Table of Contents on the left panel.
  - **Mac-style Code Blocks:** Built-in syntax highlighting with a sleek, macOS-inspired dark theme.
  - **Academic Ready:** Native support for `LaTeX` math rendering and `Mermaid` diagrams.
- **🎨 Immersive Interactive UI**
  - **Smart Layout:** Your profile card elegantly fades out and transitions into the Table of Contents when a user dives into an article.
  - **Eye-Care Mode:** One-click sepia filter that provides a warm, e-ink-like reading experience for long articles.
  - **Micro-Interactions:** Subtle mouse tracking and click particle effects that make your site feel alive.
- **🌐 Built-in i18n Support**
  - Seamless one-click switching between English and other languages (default config includes English & Chinese) without page reloads.

## 🛠️ Quick Start

### 1. Use this template

Click the green **"Use this template"** button at the top of this repository to create your own copy, or clone it locally:

```text
git clone [https://github.com/yourusername/Zenith.git](https://github.com/yourusername/Zenith.git)
cd Zenith
```

### 2. Install dependencies & Run

```text
npm install
npm run dev
```

Visit `http://localhost:5173` to view your site.

## ✍️ How to Add Content

You **do not need to write any React code** to update your content! Just follow these two steps:

### Step 1: Add your Markdown file

Place your written `.md` files into the `public/posts/` directory. Organizing them by language is highly recommended:

```text
public/
└── posts/
    ├── en/ 
    │   └── my-awesome-project.md
    └── zh/ 
        └── my-awesome-project.md
```

### Step 2: Configure the Timeline

Open `src/data/timelineData.js` and add a new object. Zenith supports **3 distinct layouts**:

#### Mode A: Single Article (Default)

Best for standard blog posts or reading notes.

```text
{
  id: 1, 
  date: '2026.05', 
  title: 'A Standard Blog Post',
  category: 'life', // Options: learning, project, reading, life
  description: 'A brief intro to the article...',
  tags: ['Vlog', 'Life'],
  content: `/posts/${lang}/my-awesome-project.md` // Path to your md file
}
```

#### Mode B: Project Tabs (Geek Zone)

Best for complex projects requiring sections like "Architecture", "Code", and "Summary".

Set `layout: 'tabs'` and use HTML comments in your Markdown to split the pages.

```text
// In timelineData.js
{
  id: 2, 
  title: 'Hardware Project',
  layout: 'tabs',
  content: `/posts/${lang}/hardware-project.md`
}
```

*Inside your `hardware-project.md`:*

```text
<!-- tab: Architecture -->
Details about architecture...

<!-- tab: Core Code -->
\```cpp
int a = 1;
\```
```

#### Mode C: Collections / Series

Best for multi-part tutorials or a series of articles.

```js
{
  id: 3, 
  title: 'Operating System Series',
  layout: 'collection',
  articles: [
    { 
      id: 'os-1', 
      title: 'Chapter 1: CPU', 
      chapters: [
        { id: 'ch1', title: 'Processes', content: `/posts/${lang}/os-ch1.md` },
      ] 
    }
  ]
}
```

## ☁️ Deployment (CI/CD)

This project comes with a pre-configured **GitHub Actions** workflow for GitHub Pages.

Whenever you push to the `main` branch:

```text
git add .
git commit -m "📝 Add a new post"
git push origin main
```

GitHub will automatically build and deploy your site within a minute.

> **Note:** Make sure to go to your repository **Settings -> Pages** and change the **Source** to **GitHub Actions**. Also, ensure `base` in `vite.config.js` is set properly (`'/'` for User Pages, `'./'` for Project Pages).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/Zenith/issues).

## 📄 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

> Built with ❤️ using Zenith | Start your digital garden today.