import type { ResumeData } from "./resume-data";

export function NormalResume({ data }: { data: ResumeData }) {
  return (
    <div className="mx-auto max-w-[210mm] bg-white p-8 text-sm text-zinc-900 print:p-0">
      <header className="border-b border-zinc-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">{data.name}</h1>
        <p className="mt-1 text-base font-medium text-zinc-700">{data.role}</p>
        <p className="mt-1 text-zinc-600">{data.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-zinc-600">
          <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
          <a
            href={`https://${data.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.contact.linkedin}
          </a>
          <a
            href={`https://${data.contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.contact.github}
          </a>
          <a
            href={`https://${data.contact.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.contact.website}
          </a>
        </div>
      </header>

      <section className="mt-6">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500">
          Experience
        </h2>
        <div className="space-y-4">
          {data.experience.map((item) => (
            <div key={item.name}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">{item.name}</h3>
                <span className="font-mono text-xs text-zinc-500">
                  {item.period}
                </span>
              </div>
              <p className="text-zinc-700">{item.role}</p>
              <p className="mt-1 text-zinc-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500">
          Projects
        </h2>
        <div className="space-y-3">
          {data.projects.map((item) => (
            <div key={item.name}>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-zinc-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500">
          Skills
        </h2>
        <p className="text-zinc-700">{data.skills.join(" · ")}</p>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500">
          Education
        </h2>
        {data.education.map((item) => (
          <div key={item.school}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">{item.school}</h3>
              <span className="font-mono text-xs text-zinc-500">
                {item.period}
              </span>
            </div>
            <p className="text-zinc-700">{item.degree}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
