import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 h-[100dvh]" style={{ float: "left" }}>
      <div className="flex flex-col bg-gray-800 h-full">
        {/* Top section with logo */}
        <div className="flex flex-shrink-0 items-center px-4 py-4">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white"
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 px-2 space-y-1">
          <ul role="list" className="space-y-1">
            {/* Main Navigation Links */}
            <li>
              <ul role="list" className="space-y-1">
                {/* Dashboard Link */}
                <li>
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-gray-700"
                  >
                    {/* Icon */}
                    <svg
                      className="h-6 w-6 mr-3 text-gray-300 group-hover:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    Dashboard
                    <span className="ml-auto inline-block py-0.5 px-3 text-xs font-medium bg-gray-600 rounded-full">
                      5
                    </span>
                  </a>
                </li>

                {/* Team Link */}
                <li>
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-gray-700"
                  >
                    <svg
                      className="h-6 w-6 mr-3 text-gray-300 group-hover:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                      />
                    </svg>
                    Team
                  </a>
                </li>

                {/* Projects Link */}
                <li>
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-gray-700"
                  >
                    <svg
                      className="h-6 w-6 mr-3 text-gray-300 group-hover:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h14.25c.621 0 1.125-.504 1.125-1.125V9.75"
                      />
                    </svg>
                    Projects
                    <span className="ml-auto inline-block py-0.5 px-3 text-xs font-medium bg-gray-600 rounded-full">
                      12
                    </span>
                  </a>
                </li>

                {/* Calendar Link */}
                <li>
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-gray-700"
                  >
                    <svg
                      className="h-6 w-6 mr-3 text-gray-300 group-hover:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25m10.5-2.25V5.25M3 18.75V7.5A2.25 2.25 0 0 1 5.25 5.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25"
                      />
                    </svg>
                    Calendar
                    <span className="ml-auto inline-block py-0.5 px-3 text-xs font-medium bg-gray-600 rounded-full">
                      20+
                    </span>
                  </a>
                </li>

                {/* Documents Link */}
                <li>
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-gray-700"
                  >
                    <svg
                      className="h-6 w-6 mr-3 text-gray-300 group-hover:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25v3.375a1.125 1.125 0 0 1-1.125 1.125H6.75A1.125 1.125 0 0 1 5.625 20.625V7.875A1.125 1.125 0 0 1 6.75 6.75h.75a9.06 9.06 0 0 1 1.5.124"
                      />
                    </svg>
                    Documents
                  </a>
                </li>

                {/* Reports Link */}
                <li>
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-gray-700"
                  >
                    <svg
                      className="h-6 w-6 mr-3 text-gray-300 group-hover:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                      />
                    </svg>
                    Reports
                  </a>
                </li>
              </ul>
            </li>

            {/* Section for Teams */}
            <li>
              <div className="px-2 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Your teams
              </div>
              <ul role="list" className="space-y-1">
                {/* Team Links */}
                <li>
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-gray-700"
                  >
                    <span className="inline-block h-6 w-6 rounded-full bg-gray-500 text-center text-white mr-3">
                      H
                    </span>
                    Heroicons
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-gray-700"
                  >
                    <span className="inline-block h-6 w-6 rounded-full bg-gray-500 text-center text-white mr-3">
                      T
                    </span>
                    Tailwind Labs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-gray-700"
                  >
                    <span className="inline-block h-6 w-6 rounded-full bg-gray-500 text-center text-white mr-3">
                      W
                    </span>
                    Workcation
                  </a>
                </li>
              </ul>
            </li>

            {/* Profile Section */}
            <li className="mt-6 pt-6 border-t border-gray-700">
              <a href="#" className="flex items-center space-x-4 px-2">
                <img
                  alt="Profile"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="h-8 w-8 rounded-full"
                />
                <div className="text-sm font-medium text-white">
                  <div>Your profile</div>
                  <div className="text-gray-400">Tom Cook</div>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
