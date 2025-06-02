import React from "react";

const icons = {
  Home: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 inline-block mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M3 12l9-9 9 9v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H9v4a2 2 0 0 1-2 2H3v-8z" />
    </svg>
  ),
  Explore: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 inline-block mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 8v4l3 3" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  "My Learnings": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 inline-block mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422M12 14v7" />
      <path d="M12 14L5.84 10.578M12 21l6-3.5" />
    </svg>
  ),
  Profile: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 inline-block mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a6 6 0 0 1 13 0" />
    </svg>
  ),
  Dashboard: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 inline-block mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  ),
  "Host Session": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 inline-block mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 3" />
    </svg>
  ),
  Requests: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 inline-block mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 8v4l3 3M9 12h3m0 0v4" />
    </svg>
  ),
  Manage: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 inline-block mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 12l9-5-9-5-9 5 9 5z" />
    </svg>
  ),
  "Invite Speakers": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 inline-block mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M15 12h6m-3-3v6m-4 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
    </svg>
  ),
};

export default function Navbar({ role, navItems, active, onSelect }) {
  return (
    <nav className="bg-white shadow-md flex justify-center space-x-6 py-4">
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className={`flex items-center px-4 py-2 rounded-lg font-semibold transition ${
            active === item
              ? "bg-blue-600 text-white shadow-lg"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          {icons[item] || null}
          {item}
        </button>
      ))}
    </nav>
  );
}
