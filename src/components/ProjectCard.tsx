import React from 'react';

interface ProjectPageProps {
  title: string;
  children: React.ReactNode;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <main className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-sky-400">{title}</h1>
          {children}
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;