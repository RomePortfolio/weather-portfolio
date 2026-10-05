// src/pages/LectureVideoPage.tsx
import type { ReactNode } from 'react';
import ProjectPage from './ProjectPage';

// Every figure here is measured or logged. Source: the job's PROJECT_METRICS.md and PRODUCTION_LOG.md.
const stats = [
  { value: '11 hrs', label: 'hands-on time, start to finish' },
  { value: '2 days', label: 'from the instructor’s script to a delivered master' },
  { value: '5:42', label: 'finished runtime, 1080p' },
  { value: '< 2 hrs', label: 'of my time per finished minute' },
  { value: '28', label: 'shots in three visual styles' },
  { value: 'Same day', label: 'turnaround on every round of client notes' },
];

const steps = [
  ['Source', 'The instructor’s lecture draft and a sample student paper.'],
  ['Script', 'Split into 15 sections, every claim traced back to the source.'],
  ['Accuracy check', 'Each fact checked before a word was recorded, including the etymology of rage.'],
  ['Narration', 'A designed AI voice, 30 takes, the best of each section chosen by ear.'],
  ['Visuals', '28 shots across flat 2D, live action and painterly styles, still frames first, then motion.'],
  ['Edit', 'Shots timed to the narration in Premiere, built shots and titles added, mixed to \u221214\u00a0LUFS.'],
  ['Accessibility', 'Closed captions corrected word for word against the script, plus a descriptive transcript.'],
];

const fixes = [
  { name: 'pen', title: 'A pen Seneca could have used',
    note: 'The instructor caught a forked metal nib, centuries too modern. I replaced it with a carved reed pen and composited it into the existing shot, so the animated ink did not have to be regenerated.' },
  { name: 'flame', title: 'Flame behind the pot, not in front of it',
    note: 'The burner flame was drawn over the pot. I rebuilt the pot’s base on every frame so the flame sits underneath it, still flickering.' },
  { name: 'brows', title: 'Anger, drawn the way the instructor reads it',
    note: 'Her note: anger brows are straight, not bent. A hand edit to the frame, no new generation.' },
  { name: 'red', title: 'One colour change for the whole scene',
    note: 'The pressure cooker went from teal to red to sit inside the rage section. Recoloured frame by frame; the motion is untouched.' },
  { name: 'domino', title: 'Fixing the cause, not the symptom',
    note: 'Two image edits in a row made the chain fall backward. The real fault was the start frame: dominoes already tipping at both ends. Fix the frame and the motion fixed itself.' },
  { name: 'text', title: 'Words nobody asked for',
    note: 'Image engines print headlines that were never in the brief. Every one was removed before the frame was animated.' },
];

const styles = [
  { src: '/portfolio/lv-style-flat.jpg', alt: 'Flat 2D animation: a cartoon character skipping past a shop window', label: 'Flat 2D explainer' },
  { src: '/portfolio/lv-style-live.jpg', alt: 'Live-action style: a frustrated driver at the wheel in rainy traffic', label: 'Live action' },
  { src: '/portfolio/lv-style-painterly.jpg', alt: 'Painterly style: an elderly philosopher writing by an oil lamp', label: 'Painterly' },
];

const H = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl font-semibold mb-6 text-sky-400">{children}</h2>
);
const Card = ({ children }: { children: ReactNode }) => (
  <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10">{children}</div>
);

const LectureVideoPage = () => {
  return (
    <ProjectPage title="AI-Produced Lecture Video">
      <div className="max-w-4xl mx-auto space-y-20">

        <div>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            A college English instructor needed a short lecture for her ENGL 1301 students on the
            extended definition essay. I produced it start to finish for Birdseed Studios: script,
            voice, every visual, the edit, and the accessibility files the course requires.
          </p>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/UhHKx-R_Bv4"
              title="The Extended Definition Essay, ENGL 1301 lecture video"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p className="text-sm text-white/50 mt-3">Closed captions available (CC). A descriptive transcript accompanies the video in the course.</p>
        </div>

        {/* The numbers: kept big and early, on purpose */}
        <div>
          <H>The production, in numbers</H>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-black/40 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-white/10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white whitespace-nowrap">{s.value}</p>
                <p className="text-white/70 mt-2 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-white/80 leading-relaxed mt-8">
            One person, from the instructor&rsquo;s script to a captioned, Section 508&ndash;ready
            master. No studio, no stock footage, no voice session, no captioning service. The
            hours above are the whole job, including three rounds of revision notes.
          </p>
        </div>

        {/* Pipeline */}
        <div>
          <H>How it was made</H>
          <Card>
            <ol className="space-y-5">
              {steps.map(([t, d], i) => (
                <li key={t} className="flex gap-5">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-sky-400/20 text-sky-300 flex items-center justify-center font-semibold">{i + 1}</span>
                  <p className="text-white/80 leading-relaxed"><span className="text-white font-medium">{t}.</span> {d}</p>
                </li>
              ))}
            </ol>
          </Card>
        </div>

        {/* Styles */}
        <div>
          <H>Three visual styles, one lecture</H>
          <p className="text-white/80 leading-relaxed mb-8">
            The style follows the idea. Concepts get clean flat animation, everyday examples get
            live action, history gets a painted look. Each style is written down as a reusable sheet
            so every shot in it agrees.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {styles.map((s) => (
              <figure key={s.src} className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                <img src={s.src} alt={s.alt} loading="lazy" className="w-full h-auto" />
                <figcaption className="px-5 py-4 text-xs uppercase tracking-wider text-white/60">{s.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Before / after */}
        <div>
          <H>The finishing work</H>
          <p className="text-white/80 leading-relaxed mb-10">
            Generating a frame is the quick part. The job is noticing what is wrong with it and
            fixing that without starting over. Most of these were fixed in the edit with no new
            generation at all.
          </p>
          <div className="space-y-14">
            {fixes.map((f) => (
              <div key={f.name}>
                <h3 className="text-xl font-semibold text-white mb-4">{f.title}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {(['before', 'after'] as const).map((k) => (
                    <figure key={k} className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                      <img src={`/portfolio/lv-${f.name}-${k}.jpg`} alt={`${f.title}, ${k}`} loading="lazy" className="w-full h-auto" />
                      <figcaption className="px-5 py-3 text-xs uppercase tracking-wider text-white/60">{k === 'before' ? 'Before' : 'After'}</figcaption>
                    </figure>
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mt-4">{f.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility */}
        <div>
          <H>Accessibility is part of the deliverable</H>
          <Card>
            <p className="text-white/80 leading-relaxed">
              A course video is not finished until every student can use it. Automatic captions got
              the timing right and the words wrong, &ldquo;a work cited page&rdquo; instead of
              &ldquo;a Works Cited page&rdquo; among them, so I checked all 106 captions against the
              script and corrected the 65 that were off. The video ships with closed captions and a descriptive transcript that also
              notes what is on screen.
            </p>
          </Card>
        </div>

        {/* AI note, same voice as the Design page */}
        <div>
          <H>How this work is made</H>
          <Card>
            <p className="text-white/80 leading-relaxed">
              The imagery, motion and narration are <span className="text-white font-medium">AI-generated
              and human-directed</span>, and the video is labelled that way on YouTube. I wrote the
              prompts, chose the takes, made the fixes, cut it and finished it. An AI assistant built
              the production tooling with me and checked the files at every step.
            </p>
            <p className="text-white/80 leading-relaxed mt-5">
              Tools: OpenArt image models, Kling 3.0 video, an ElevenLabs designed voice, Adobe
              Premiere Pro, and Claude as production assistant.
            </p>
          </Card>
        </div>

      </div>
    </ProjectPage>
  );
};

export default LectureVideoPage;
