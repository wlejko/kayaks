import { NavLink } from 'react-router';

type NavigationLinkProps = {
  name: string;
  link: string;
};

export const NavigationLink = ({ name, link }: NavigationLinkProps) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive
          ? 'active capitalize text-white text-sm font-bold'
          : 'capitalize text-gray-700  hover:text-white text-sm font-bold'
      }
    >
      {name}
    </NavLink>
  );
};
