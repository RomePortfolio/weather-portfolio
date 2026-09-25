// src/pages/DesignPage.tsx
import type { ReactNode } from 'react';
import ProjectPage from './ProjectPage';

const shots = [
  { src: '/portfolio/env-ice-crossing.jpg', alt: 'A lone figure crossing a frozen lake beneath snow-covered peaks',
    caption: 'Establishing shot. The figure is small on purpose — the scene is about the distance, not the man.' },
  { src: '/portfolio/env-crag.jpg', alt: 'A single silhouette atop a black crag above a frozen sea',
    caption: 'Scale by contrast. One silhouette held near the top of the frame so the drop underneath it reads.' },
  { src: '/portfolio/env-queens-hall.jpg', alt: 'A vaulted hall of pale ice with a throne at its centre',
    caption: 'Interior plate. Same palette as the exteriors, so the cut between them does not jar.' },
  { src: '/portfolio/env-confrontation.jpg', alt: 'A warrior braces against ice magic cast by a pale queen',
    caption: 'Two characters, both bound to their reference sheets, lit by the magic rather than by the room.' },
  { src: '/portfolio/env-beast-cliff.jpg', alt: 'A horned beast scaling a sea cliff above dark water',
    caption: 'Action staged on a diagonal, with the value structure kept simple so the figure reads against the rock.' },
  { src: '/portfolio/env-acting.jpg', alt: 'Close portrait of a grey-bearded warrior looking at his own hands',
    caption: 'Character acting. The hands are doing as much work here as the face.' },
];

const turnarounds = [
  { src: '/portfolio/char-queen-turnaround.jpg', alt: 'Character turnaround of the Frost Queen: front, three-quarter, profile and back', label: 'The Frost Queen' },
  { src: '/portfolio/char-champion-turnaround.jpg', alt: 'Character turnaround of the Champion', label: 'The Champion' },
  { src: '/portfolio/char-beast-turnaround.jpg', alt: 'Character turnaround of the Beast', label: 'The Beast' },
];

const H = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl font-semibold mb-6 text-sky-400">{children}</h2>
);
const Card = ({ children }: { children: ReactNode }) => (
  <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10">{children}</div>
);

const DesignPage = () => {
  return (
    <ProjectPage title="Design & Visual Development">
      <div className="max-w-4xl mx-auto space-y-20">

        <div>
          <p className="text-lg text-white/80 leading-relaxed">
            I design the things I build and build the things I design. In practice that has meant a
            brand and a website for a boarding facility, a training program for the staff who worked
            there, and the visual development for an animated series &mdash; style, characters,
            environments, grading and the cut. This page is the visual half of that work.
          </p>
        </div>

        {/* AI disclosure */}
        <div>
          <H>How this work is made</H>
          <Card>
            <p className="text-white/80 leading-relaxed">
              The imagery in the series section is <span className="text-white font-medium">AI-generated
              and human-directed</span>, and I would rather say so plainly than let you wonder.
            </p>
            <p className="text-white/80 leading-relaxed mt-5">
              I define the visual style and hold it across an entire episode. I build the character
              reference sets that keep a face the same face from shot to shot. I choose which frames
              survive, sequence them, grade them, and cut the result. The tools generate. The
              direction, the continuity and the finishing are the job, and those are mine.
            </p>
            <p className="text-white/80 leading-relaxed mt-5">
              Generative fill, smart upscaling and layout exploration are ordinary parts of the
              pipeline here rather than novelties. They save hours on the work that was never the
              interesting part.
            </p>
          </Card>
        </div>

        {/* Kingwood */}
        <div>
          <H>Kingwood Pet Resort</H>
          <Card>
            <p className="text-sm uppercase tracking-wider text-sky-400/80 mb-5">
              Brand, website and training program &middot; Marketing &amp; Facility Manager
            </p>
            <img src="/portfolio/kpr.jpg" alt="The Kingwood Pet Resort homepage" loading="lazy"
                 className="w-full h-auto rounded-xl border border-white/10 mb-7" />
            <p className="text-white/80 leading-relaxed">
              I came in as marketing and facility manager and left three things behind: the brand and
              the website, a staff training program, and the learning platform it ran on. The site is
              the piece still standing, and I still maintain it.
            </p>
            <p className="text-white/80 leading-relaxed mt-5">
              The brief was a boarding facility that had been operating since 1979 and looked it. The
              answer was not more photographs of dogs. It was to take seriously what the owners
              already believed the place was &mdash; a resort &mdash; and let the typography make
              that claim before a single line of copy did. Everything else followed from the voice: a
              restrained palette, generous space, and a headline that says a sanctuary where your
              pets truly belong rather than listing kennel dimensions.
            </p>
            <p className="text-white/80 leading-relaxed mt-5">
              I wrote the copy, designed the pages and built the site. I also designed the staff
              training program and deployed and administered the LMS it was delivered on, which is a
              different kind of design problem with the same shape: work out what someone has to be
              able to do, then build the shortest honest path to it.
            </p>
            <div className="mt-8">
              <a href="https://kingwoodpetresort.com" target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-sky-600 hover:bg-sky-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Visit kingwoodpetresort.com
              </a>
            </div>
          </Card>
        </div>

        {/* Visual development */}
        <div>
          <H>Visual development &mdash; In Nomine Mortis</H>
          <p className="text-white/80 leading-relaxed mb-8">
            An episodic animated series. My job on it is art direction: decide what the world looks
            like, then make every frame agree. The register is watercolour and ink on paper, chosen
            because it works with the softness of generated imagery instead of fighting it, and
            because a cold story earns a cold palette.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {shots.map((s) => (
              <figure key={s.src} className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                <img src={s.src} alt={s.alt} loading="lazy" className="w-full h-auto" />
                <figcaption className="p-5 text-sm text-white/70 leading-relaxed">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Character continuity */}
        <div>
          <H>Character design &amp; continuity</H>
          <p className="text-white/80 leading-relaxed mb-8">
            The hardest problem in generated imagery is that a face does not stay the same face. The
            fix is not a better prompt, it is a reference set: front, three-quarter, profile and back,
            built once and bound to every shot afterwards. This is the unglamorous part of the work,
            and it is the part that decides whether an audience believes the character is a person.
          </p>
          <div className="space-y-8">
            {turnarounds.map((c) => (
              <figure key={c.src} className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                <img src={c.src} alt={c.alt} loading="lazy" className="w-full h-auto" />
                <figcaption className="px-5 py-4 text-xs uppercase tracking-wider text-white/60">{c.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Grading */}
        <div>
          <H>Grading &amp; finishing</H>
          <p className="text-white/80 leading-relaxed mb-8">
            A generated frame arrives close and wrong. Grading is where it joins the sequence around
            it. These are the same shot either side of a pass: lifted roughly a stop, with the blues
            carried further than the reds, so it reads as cold light rather than as merely brighter.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <figure className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
              <img src="/portfolio/grade-before.jpg" alt="The shot as generated, before grading" loading="lazy" className="w-full h-auto" />
              <figcaption className="px-5 py-4 text-xs uppercase tracking-wider text-white/60">Before &mdash; as generated</figcaption>
            </figure>
            <figure className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
              <img src="/portfolio/grade-after.jpg" alt="The same shot after the grading pass" loading="lazy" className="w-full h-auto" />
              <figcaption className="px-5 py-4 text-xs uppercase tracking-wider text-white/60">After &mdash; graded into the sequence</figcaption>
            </figure>
          </div>
        </div>

        {/* Close */}
        <div>
          <H>What I bring to a design team</H>
          <Card>
            <p className="text-white/80 leading-relaxed">
              I am a hands-on designer who can also run the project &mdash; schedules, approvals,
              drafts and artwork all tracked &mdash; because for twenty years before this I ran an
              operation where the deadline was a departure time and missing it was not an option. I
              am comfortable being the person who advises rather than only the person who executes,
              and I write down what I decide so the next person does not have to guess.
            </p>
            <p className="text-white/80 leading-relaxed mt-5">
              And I build. The site you are reading is mine, front end and back, which means a design
              I hand you is one I can also ship.
            </p>
          </Card>
        </div>

      </div>
    </ProjectPage>
  );
};

export default DesignPage;
