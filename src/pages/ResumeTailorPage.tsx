// src/pages/ResumeTailorPage.tsx
import { useState } from 'react';
import ProjectPage from './ProjectPage';

const ResumeTailorPage = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [tailoredResume, setTailoredResume] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Sample Data
  const loadSampleJob = () => {
    setJobDescription(`We are looking for a Senior React Developer to join our growing team in Houston.

You will be responsible for building modern, responsive web applications using React, TypeScript, and Tailwind CSS. Experience with AWS Amplify, REST APIs, and automation tools is highly preferred.

The ideal candidate has strong problem-solving skills, attention to detail, and the ability to write clean, maintainable code. You will work closely with designers and backend developers to deliver exceptional user experiences.

Key Requirements:
- 4+ years of experience with React and TypeScript
- Proficiency with Tailwind CSS
- Experience deploying applications on AWS
- Strong understanding of responsive design and performance optimization
- Familiarity with automation tools and AI integrations is a plus`);
  };

  const loadSampleResume = () => {
    setResumeText(`Rome Colmenares
Houston, TX | (555) 123-4567 | romanaegis@gmail.com

React Developer

Professional Summary
Results-driven React Developer with experience building modern web applications. Skilled in TypeScript, Tailwind CSS, and deploying applications on AWS.

Experience
Freelance React Developer
2023 – Present
- Built responsive web applications using React and TypeScript
- Designed user interfaces with Tailwind CSS
- Deployed applications to AWS

Web Developer
ABC Company, Houston
2021 – 2023
- Developed and maintained multiple web projects
- Collaborated with team members on UI/UX improvements

Skills
- React, TypeScript, JavaScript
- Tailwind CSS
- AWS (Amplify, basic deployment)
- HTML, CSS
- Git

Education
Bachelor of Science in Computer Science
University of Houston`);
  };

  const handleTailor = async () => {
    if (!jobDescription.trim() || !resumeText.trim()) {
      setError('Please fill in both fields');
      return;
    }

    setIsLoading(true);
    setError('');
    setTailoredResume('');

    try {
      const response = await fetch('https://primary-production-01234.up.railway.app/webhook/resume-tailor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobDescription: jobDescription.trim(),
          resumeText: resumeText.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      let cleanOutput = '';
      if (typeof data === 'string') {
        cleanOutput = data.replace(/\\n/g, '\n');
      } else if (data.output) {
        cleanOutput = data.output.replace(/\\n/g, '\n');
      } else if (data.tailoredResume) {
        cleanOutput = data.tailoredResume.replace(/\\n/g, '\n');
      } else {
        cleanOutput = JSON.stringify(data, null, 2);
      }

      setTailoredResume(cleanOutput);
    } catch (err: any) {
      setError('Error connecting to n8n. Please make sure the workflow is active.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProjectPage title="Resume Tailoring Automator">
      <div className="max-w-4xl mx-auto px-6 space-y-20">
        
        {/* Overview */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-sky-400">Project Overview</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            An n8n-powered automation that takes a job description and a candidate's resume, 
            then uses AI (Groq + Llama 3.3) to intelligently tailor the resume to better match the role.
          </p>
        </div>

        {/* Try It Live */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-sky-400">Try It Live</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white">Input Details</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-white/70 text-sm font-medium">Job Description</label>
                    <button
                      onClick={loadSampleJob}
                      className="text-xs bg-sky-900 hover:bg-sky-800 px-3 py-1 rounded-lg transition-colors"
                    >
                      Load Sample
                    </button>
                  </div>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the full job description here..."
                    className="w-full h-48 bg-gray-900 border border-white/20 rounded-xl p-5 text-white placeholder:text-white/50 focus:border-sky-400 outline-none resize-y"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-white/70 text-sm font-medium">Original Resume</label>
                    <button
                      onClick={loadSampleResume}
                      className="text-xs bg-sky-900 hover:bg-sky-800 px-3 py-1 rounded-lg transition-colors"
                    >
                      Load Sample
                    </button>
                  </div>
                  <textarea
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    placeholder="Paste the candidate's resume here..."
                    className="w-full h-48 bg-gray-900 border border-white/20 rounded-xl p-5 text-white placeholder:text-white/50 focus:border-sky-400 outline-none resize-y"
                  />
                </div>

                <button
                  onClick={handleTailor}
                  disabled={isLoading || !jobDescription.trim() || !resumeText.trim()}
                  className="w-full bg-sky-600 hover:bg-sky-500 disabled:bg-gray-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                >
                  {isLoading ? 'Sending to n8n...' : 'Tailor Resume Now'}
                </button>

                {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
              </div>
            </div>

            {/* Output Area */}
            <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-white">Tailored Resume</h3>
              
              {tailoredResume ? (
                <div className="prose prose-invert max-w-none text-white/90 whitespace-pre-wrap leading-relaxed bg-gray-950 p-6 rounded-xl border border-white/10">
                  {tailoredResume}
                </div>
              ) : (
                <div className="h-80 flex items-center justify-center text-center text-white/50">
                  Enter details above or load samples and click "Tailor Resume Now"
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Workflow */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-sky-400">n8n Workflow</h2>
          <div className="bg-black/40 backdrop-blur-md p-10 rounded-2xl border border-white/10 text-center">
            <a 
              href="/resume-tailor-workflow.json" 
              download="resume-tailor-workflow.json"
              className="inline-block bg-sky-600 hover:bg-sky-500 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Download Workflow JSON
            </a>
          </div>
        </div>

        <p className="text-center text-white/60 pt-8 text-sm">
          Live demo powered by n8n on Railway + Groq AI
        </p>
      </div>
    </ProjectPage>
  );
};

export default ResumeTailorPage;