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
          ? 'active capitalize text-emerald-500 font-medium text-sm'
          : 'capitalize text-gray-700 font-medium hover:text-emerald-500 text-sm'
      }
    >
      {name}
    </NavLink>
  );
};
