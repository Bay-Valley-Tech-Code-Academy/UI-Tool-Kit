"use client";
import React, { useState } from "react";
import ComponentsGrid from "../components/ComponentsGrid";

export default function DocumentationLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">Documentation</h1>
        <button className="md:hidden text-white" onClick={toggleSidebar}>
          {isSidebarOpen ? "Close" : "Menu"}
        </button>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <aside
          className={`
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0 transition-transform duration-300 ease-in-out
            absolute md:relative z-10 w-64 bg-[#3D3860] shadow-md h-full
            overflow-y-auto
          `}
        >
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="#introduction"
                  className="text-white block py-2 px-4 hover:bg-blue-600 rounded"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#overview"
                  className="text-white block py-2 px-4 hover:bg-blue-600 rounded"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#prerequisites"
                  className="text-white block py-2 px-4 hover:bg-blue-600 rounded"
                >
                  Prerequisites
                </a>
              </li>
              <li>
                <a
                  href="#getting-started"
                  className="text-white block py-2 px-4 hover:bg-blue-600 rounded"
                >
                  Getting Started
                </a>
              </li>
              <li>
                <a
                  href="#setup"
                  className="text-white block py-2 px-4 hover:bg-blue-600 rounded"
                >
                  Setup Instructions
                </a>
              </li>
              <li>
                <a
                  href="#components"
                  className="text-white block py-2 px-4 hover:bg-blue-600 rounded"
                >
                  Components
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-white block py-2 px-4 hover:bg-blue-600 rounded"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#learn-more"
                  className="text-white block py-2 px-4 hover:bg-blue-600 rounded"
                >
                  Learn More
                </a>
              </li>
              <li>
                <a
                  href="#deployment"
                  className="text-white block py-2 px-4 hover:bg-blue-600 rounded"
                >
                  Deployment
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {/* Introduction Section */}
          <section id="introduction" className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 mb-6">
              Welcome to the documentation for our project. This section
              provides an overview of what you can find in the documentation.
            </p>
          </section>

          {/* Overview Section */}
          <section id="overview" className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 mb-6">
              This is a Next.js project bootstrapped with{" "}
              <code className="bg-gray-200 rounded p-1">create-next-app</code>.
            </p>
          </section>

          {/* Prerequisites Section */}
          <section id="prerequisites" className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Prerequisites
            </h2>
            <p className="text-gray-700 mb-6">
              Before you begin, make sure you have the following tools
              installed:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li className="mb-2">
                <strong>Git</strong> - Version control system. Download from{" "}
                <a
                  href="https://git-scm.com/"
                  className="text-blue-600 hover:underline"
                >
                  git-scm.com
                </a>
                .
              </li>
              <li className="mb-2">
                <strong>Node.js</strong> - Latest stable version recommended.
                Download from{" "}
                <a
                  href="https://nodejs.org/"
                  className="text-blue-600 hover:underline"
                >
                  nodejs.org
                </a>
                .
              </li>
              <li className="mb-2">
                <strong>Visual Studio Code</strong> - A powerful code editor.
                Download from{" "}
                <a
                  href="https://code.visualstudio.com/"
                  className="text-blue-600 hover:underline"
                >
                  code.visualstudio.com
                </a>
                .
              </li>
            </ul>
            <p className="text-gray-700 mb-6">
              Ensure that you have these tools installed and configured before
              proceeding with the setup instructions.
            </p>
          </section>

          {/* Getting Started Section */}
          <section id="getting-started">
            <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
            <p className="text-gray-700 mb-6">
              This section will help you get started with the project. You’ll
              find installation instructions and basic usage examples. To get
              started with the project, follow the steps below to set up and run
              the development server.
            </p>

            <h3 className="text-2xl font-semibold mb-2">
              Step 1: Clone the Repository
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded mb-6">
              git clone
              https://github.com/Bay-Valley-Tech-Code-Academy/UI-Tool-Kit.git
              {"\n"}
              cd UI-Tool-Kit
            </pre>

            <h3 className="text-2xl font-semibold mb-2">
              Step 2: Install Dependencies
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded mb-6">
              npm install{"\n"}# or{"\n"}
              yarn install{"\n"}# or{"\n"}
              pnpm install{"\n"}# or{"\n"}
              bun install
            </pre>

            <h3 className="text-2xl font-semibold mb-2">
              Step 3: Run the Development Server
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded mb-6">
              npm run dev{"\n"}# or{"\n"}
              yarn dev{"\n"}# or{"\n"}
              pnpm dev{"\n"}# or{"\n"}
              bun dev
            </pre>
            <p className="text-gray-700 mb-6">
              Open{" "}
              <a href="http://localhost:3000" className="text-indigo-600">
                <code>http://localhost:3000</code>
              </a>{" "}
              in your browser to see the application running.
            </p>
          </section>

          {/* Setup Instructions Section */}
          <section id="setup">
            <h2 className="text-3xl font-bold mb-4">
              Setup Instructions (Windows, Linux, and macOS)
            </h2>
            <p className="text-gray-700 mb-6">
              After cloning the repository, follow these steps to set up the
              project on your local machine:
            </p>

            <h3 className="text-2xl font-semibold mb-2">
              Navigate to the Project Directory
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded mb-6">
              cd UI-Tool-Kit
            </pre>

            <h3 className="text-2xl font-semibold mb-2">Install Packages</h3>
            <pre className="bg-gray-800 text-white p-4 rounded mb-6">
              npm install
            </pre>

            <h3 className="text-2xl font-semibold mb-2">Run the Program</h3>
            <pre className="bg-gray-800 text-white p-4 rounded mb-6">
              npm run dev
            </pre>
            <p className="text-gray-700 mb-6">
              Open{" "}
              <a href="http://localhost:3000" className="text-indigo-600">
                http://localhost:3000
              </a>{" "}
              in your browser to view the website.
            </p>

            <h3 className="text-2xl font-semibold mb-2">Stop the Program</h3>
            <p className="text-gray-700 mb-6">
              You can stop the development server by pressing{" "}
              <code>CTRL+C</code> in the terminal.
            </p>
          </section>

          {/* Components Section */}
          <section id="components" className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Components</h2>
            <p className="text-gray-700 mb-6">
              Here you can find detailed information about the components used
              in the project. Click on a card to see the component's code.
            </p>
            <div className="mt-8">
              <ComponentsGrid />
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq">
            <h2 className="text-3xl font-bold mb-4">FAQ</h2>
            <p className="text-gray-700 mb-6">
              Answers to frequently asked questions are provided here.
            </p>
          </section>

          {/* Learn More Section */}
          <section id="learn-more">
            <h2 className="text-3xl font-bold mb-4">Learn More</h2>
            <p className="text-gray-700 mb-6">
              To learn more about Next.js, consider exploring the following
              resources:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <a
                  href="https://nextjs.org/docs"
                  className="text-indigo-600 hover:underline"
                >
                  Next.js Documentation
                </a>{" "}
                - Learn about Next.js features and API.
              </li>
              <li>
                <a
                  href="https://nextjs.org/learn"
                  className="text-indigo-600 hover:underline"
                >
                  Learn Next.js
                </a>{" "}
                - An interactive Next.js tutorial.
              </li>
              <li>
                <a
                  href="https://github.com/vercel/next.js"
                  className="text-indigo-600 hover:underline"
                >
                  Next.js GitHub Repository
                </a>{" "}
                - Your feedback and contributions are welcome!
              </li>
            </ul>
            <br></br>
          </section>

          {/* Deployment Section */}
          <section id="deployment">
            <h2 className="text-3xl font-bold mb-4">Deployment</h2>
            <p className="text-gray-700 mb-6">
              The easiest way to deploy your Next.js app is to use the Vercel
              Platform from the creators of Next.js.
            </p>
            <p className="text-gray-700">
              Check out the{" "}
              <a
                href="https://nextjs.org/docs/deployment"
                className="text-indigo-600 hover:underline"
              >
                Next.js deployment documentation
              </a>{" "}
              for more details.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
