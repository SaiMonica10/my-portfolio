export default function LinkList({ links }) {
  if (links.length === 0) return null;

  return (
    <ul className="link-list">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
