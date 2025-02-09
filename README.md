# Chromatar

<div align="center">
  <img src="src/public/logo.png" alt="Chromatar Logo" width="120" />
  <h1>Chromatar - Beautiful Avatar Generator</h1>
  <p>Generate stunning, minimal gradient avatars for your projects</p>

  <p align="center">
    <a href="https://chromatar.pages.dev">View Demo</a>
    ·
    <a href="https://github.com/saikothasan/Chromatar/issues">Report Bug</a>
    ·
    <a href="https://github.com/saikothasan/Chromatar/issues">Request Feature</a>
  </p>
</div>

## ✨ Features

- 🎨 Beautiful gradient styles
- 📏 Multiple size options (64px to 400px)
- 🔤 Custom text support (1-2 characters)
- 📋 Easy URL copying
- ⬇️ Direct PNG download
- 🚀 Fast and responsive
- 🌓 Light/Dark mode support

## 🚀 Demo

Visit [https://chromatar.pages.dev](https://chromatar.pages.dev) to try it out!

## 💻 Tech Stack

- [Next.js 13](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/saikothasan/Chromatar.git
```

2. Install dependencies:
```bash
cd Chromatar
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Usage

1. Enter 1-2 characters in the text field
2. Select a gradient style from the available options
3. Choose your desired size
4. Copy the URL or download the avatar

### API Usage

Generate avatars programmatically using the API:

```
https://chromatar.pages.dev/api/avatar?text=V0&gradient=1&size=400
```

Parameters:
- `text`: 1-2 characters (required)
- `gradient`: 1-6 (default: 1)
- `size`: 64, 128, 256, or 400 (default: 400)

## 🚀 Deployment

Deploy your own instance of Chromatar:

1. Fork this repository
2. Sign up for [Cloudflare Pages](https://pages.cloudflare.com)
3. Create a new project and connect your forked repository
4. Deploy with the following settings:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Vercel's avatar system](https://avatar.vercel.sh)
- Built with [shadcn/ui](https://ui.shadcn.com/)

## 📧 Contact

Saiko Thasan - [@saikothasan](https://twitter.com/saikothasan)

Project Link: [https://github.com/saikothasan/Chromatar](https://github.com/saikothasan/Chromatar)
