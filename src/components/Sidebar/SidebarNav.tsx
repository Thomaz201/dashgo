import { Stack } from '@chakra-ui/react';
import { RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

import { NavSection } from './NavSection';
import { NavLink } from './NavLink';


export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">

      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiGitMergeLine}>Usuários</NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
        <NavLink icon={RiGitMergeLine}>Automação</NavLink>
      </NavSection>

    </Stack>
  )
}