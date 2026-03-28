// src/pages/ProjectPage.tsx
import React from 'react';

interface ProjectPageProps {
  title: string;
  children: React.ReactNode;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-indigo-900 to-purple-950 text-white pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-10 text-sky-400">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default ProjectPage;