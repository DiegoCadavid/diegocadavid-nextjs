import NavLink from "./NavLink"

interface Props {}

const Nav = ({}: Props) => {
  return (
    <div className="flex gap-2 py-2 mt-8 overflow-x-auto xl:mt-0 scrollbar">
      <NavLink title="Projects" isActive={true} />
      <NavLink title="About me" />
      <NavLink title="Gallery" />
      <NavLink title="Friends" />
      <NavLink title="Certificates" />
      <NavLink title="Manga" />
    </div>
  )
}

export default Nav