import NavLink from "./NavLink";

interface Props {}

const Nav = ({}: Props) => {
  return (
    <div className="flex gap-2 py-2 mt-8 mb-4 overflow-x-auto scrollbar xl:mt-0">
      <NavLink href="/" title="Projects" />
      <NavLink href="/aboutme" title="About me" />
      <NavLink href="/reviews" title="reviews" />
      <NavLink href="/education" title="education" />
      <NavLink href="/gallery" title="Gallery" />
      <NavLink href="/manga" title="Manga" />
      <NavLink href="/playlists" title="Playlist's" />
    </div>
  );
};

export default Nav;
