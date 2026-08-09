export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-paint-1 via-paint-6 to-paint-5">
                <span className="h-2.5 w-2.5 rounded-full bg-background" />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
                Chroma<span className="text-accent">Coat</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Precision powder coating for automotive, architectural, and
              industrial metal. Coated to last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol
              title="Services"
              links={["Automotive", "Architectural", "Industrial", "Restoration"]}
            />
            <FooterCol
              title="Shop"
              links={["Finishes", "Process", "Turnaround", "Warranty"]}
            />
            <FooterCol
              title="Visit"
              links={["1420 Foundry Rd", "Mon–Fri, 8–5", "(555) 019-4420", "hello@chromacoat.co"]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Chroma Coat Finishing Co.</p>
          <p>Blast · Coat · Cure</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
