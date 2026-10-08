// Decorative backdrop for the start screen and world map: twinkling stars and
// a moon in the dark theme, drifting clouds and a sun in the light theme.
export default function Scenery() {
  return (
    <div className="scenery" aria-hidden="true">
      <span className="scenery__stars" />
      <span className="scenery__stars scenery__stars--b" />
      <span className="scenery__orb" />
      <span className="scenery__cloud" />
      <span className="scenery__cloud scenery__cloud--b" />
      <span className="scenery__cloud scenery__cloud--c" />
    </div>
  );
}
