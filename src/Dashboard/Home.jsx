import React, { useState, useContext } from "react";
import Navbar from "./roleNavbar";
import { AuthContext } from "../contexts/AuthContext";

const roleNavItems = {
  student: ["Home", "Explore", "My Learnings", "Profile"],
  speaker: ["Home", "Host Session", "Requests", "Profile"],
  institute: ["Dashboard", "Manage", "Invite Speakers", "Profile"],
};

export default function Home() {
  const { user, logout } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState(roleNavItems[user.role][0]);

  const contentMap = {
    Home: (
      <div>
        <h2 className="text-2xl font-bold mb-2">Welcome, {user.name}!</h2>
        <p className="text-gray-700">Here’s a quick overview of your dashboard.</p>
      </div>
    ),
    Explore: (
      <div>
        <h2 className="text-2xl font-semibold mb-2">Explore Sessions</h2>
        <p className="text-gray-600">Discover new learning opportunities tailored for you.</p>
      </div>
    ),
    "My Learnings": (
      <div>
        <h2 className="text-2xl font-semibold mb-2">My Learnings</h2>
        <p className="text-gray-600">Track your learning progress and revisit past sessions.</p>
      </div>
    ),
    Profile: (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
        <div className="space-y-2 text-gray-700">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
        <button
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
          className="mt-6 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    ),
    "Host Session": (
      <div>
        <h2 className="text-2xl font-semibold mb-2">Host a Session</h2>
        <p className="text-gray-600">Create and manage sessions for learners.</p>
      </div>
    ),
    Requests: (
      <div>
        <h2 className="text-2xl font-semibold mb-2">Session Requests</h2>
        <p className="text-gray-600">Review and respond to session requests.</p>
      </div>
    ),
    Dashboard: (
      <div>
        <h2 className="text-2xl font-semibold mb-2">Institute Dashboard</h2>
        <p className="text-gray-600">Monitor and manage institutional activities.</p>
      </div>
    ),
    Manage: (
      <div>
        <h2 className="text-2xl font-semibold mb-2">Manage Resources</h2>
        <p className="text-gray-600">Oversee and organize all institute-related assets.</p>
      </div>
    ),
    "Invite Speakers": (
      <div>
        <h2 className="text-2xl font-semibold mb-2">Invite Speakers</h2>
        <p className="text-gray-600">Search and invite expert speakers to collaborate.</p>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-5 text-center font-bold text-2xl text-blue-800">
        Welcome, {user.name}! <span className="text-sm font-normal text-gray-500">({user.role})</span>
      </header>

      <Navbar
        role={user.role}
        navItems={roleNavItems[user.role]}
        active={activeTab}
        onSelect={setActiveTab}
      />

      <main className="p-6 max-w-4xl mx-auto bg-white mt-6 rounded-xl shadow-lg min-h-[300px]">
        {contentMap[activeTab] || <p className="text-gray-600">Content not available.</p>}
      </main>
    </div>
  );
}
