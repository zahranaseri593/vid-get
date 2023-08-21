import Link from "next/link"

const navlinks = [{name: 'About us', link: '/about-us'}
,{name: 'streams', link: '/streams'}
,{name: 'license', link: '/license'}]

const NavLinks = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 text-sm uppercase">
        {navlinks.map((item) => (
        <Link href={item.link} key={item.name}>
            <p>{item.name}</p>
        </Link>
    ))}</div>
  )
}

export default NavLinks