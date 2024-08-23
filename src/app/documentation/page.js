import React from "react";

export default function DocumentationLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Documentation</h1>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-[#3D3860] shadow-md p-6">
          <nav>
            <ul className="space-y-4">
              <li>
                <a
                  href="#introduction"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#getting-started"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  Getting Started
                </a>
              </li>
              <li>
                <a
                  href="#components"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  Components
                </a>
              </li>
              <li>
                <a
                  href="#api-reference"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Introduction Section */}
          <section id="introduction">
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              Welcome to the documentation for our project. This section
              provides an overview of what you can find in the documentation.
            </p>
          </section>

          {/* Getting Started Section */}
          <section id="getting-started">
            <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
            <p className="text-gray-700 mb-6">
              This section will help you get started with the project. You’ll
              find installation instructions and basic usage examples.
            </p>
          </section>

          {/* Components Section */}
          <section id="components">
            <h2 className="text-3xl font-bold mb-4">Components</h2>
            <p className="text-gray-700 mb-6">
              Here you can find detailed information about the components used
              in the project.
            </p>
          </section>

          {/* API Reference Section */}
          <section id="api-reference">
            <h2 className="text-3xl font-bold mb-4">API Reference</h2>
            <p className="text-gray-700 mb-6">
              Detailed API reference and examples can be found in this section.
            </p>
          </section>

          {/* FAQ Section */}
          <section id="faq">
            <h2 className="text-3xl font-bold mb-4">FAQ</h2>
            <p className="text-gray-700 mb-6">
              Answers to frequently asked questions are provided here.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
