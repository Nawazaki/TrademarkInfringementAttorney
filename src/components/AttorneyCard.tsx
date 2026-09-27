export type AttorneyCardProps = { name: string; location: string; focus: string; href?: string };

/** Reusable directory UI for future verified listings; no fictional profiles are rendered. */
export function AttorneyCard({ name, location, focus, href }: AttorneyCardProps) {
  return <article className="attorney-card"><div className="attorney-card-icon" aria-hidden="true">§</div><div><h3>{name}</h3><p>{location}</p><span className="tag">{focus}</span></div>{href ? <a className="text-link" href={href}>View details <span aria-hidden="true">↗</span></a> : null}</article>;
}
