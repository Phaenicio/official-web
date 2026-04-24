# Phaenicio - Official Website

![Phaenicio Logo](src/assets/phaenicio.svg)

Phaenicio is an organization dedicated to building precision-driven digital infrastructure. We create specialized platforms that empower researchers, students, and professionals to push the boundaries of human understanding.

## Vision

Engineering the **Future of Knowledge**. At Phaenicio, we believe that the tools of discovery should be as advanced as the research they support. By leveraging AI-powered orchestration and modern digital architecture, we bridge the gap between complex academic challenges and elegant, scalable solutions.

## Flagship Product: Zosterix

**Zosterix** is our global research networking platform designed for the next generation of discovery.

- **Global Research Networking**: Connect with students, researchers, and supervisors worldwide, breaking down institutional silos.
- **AI-Powered Validation**: Ensure research integrity with advanced AI tools for data validation and bias detection.
- **Knowledge Ecosystem**: Share insights through professional blogs and discover curated research content.
- **Advanced Analytics**: Gain deep insights into research impact and network growth.

### Core Zosterix Features
- **Identity Verification**: Secure connection with institutional emails or ORCID iDs.
- **Expertise Matching**: AI-driven engine to match researchers with relevant mentorship and collaboration opportunities.
- **Academic Blogs**: Integrated platform for publishing long-form research updates and methodologies.
- **Validation Engine**: Automated dataset and methodology sanity checks.

## Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) (managed via Wrangler)

## Project Structure

```text
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, SVGs, and illustrations
│   ├── components/      # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/           # Page-level components
│   │   ├── Home.tsx     # Landing page
│   │   ├── About.tsx    # Organization mission and vision
│   │   ├── Services.tsx # Ecosystem and platforms overview
│   │   ├── Contact.tsx  # Partnership and contact information
│   │   └── UserGuide.tsx# Resources and documentation
│   ├── App.tsx          # Main application component & routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles and Tailwind directives
├── package.json         # Dependencies and scripts
├── wrangler.toml        # Cloudflare configuration
└── vite.config.js       # Vite configuration
```

## Development

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or pnpm

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Phaenicio/phaenicio-official-web.git
   cd phaenicio-official-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

### Building for Production

```bash
npm run build
```

## Founders

- **Nandun Samarasekara**: Co-founder & Tech Lead
- **Hasitha Erandika**: Co-founder & Systems Architect

## License

This project is private and proprietary. All rights reserved.

---

© 2026 Phaenicio. Advancing Global Research Infrastructure.


