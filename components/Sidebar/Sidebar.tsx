import { Navbar, Group, Code, ScrollArea, createStyles, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconLock,
  IconUsers,
  IconReportAnalytics,
  IconUsersGroup,
  IconUser
} from '@tabler/icons-react';
import { UserButton } from './UserButton';
import { LinksGroup } from './NavbarLinksGroup';
import { Logo } from './Logo';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../Header/Header';
import { useRouter } from 'next/router';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Customer',
    icon: IconUser,
    initiallyOpened: true,
    links: [
      { label: 'Customer List', link: '/customer' },
      { label: 'Create Customer', link: '/createCustomer' },
    ],
  },
  {
    label: 'Customer Accounts',
    icon: IconUsersGroup,
    links: [
      { label: 'Account List', link: '/' },
    ],
  },
  // { label: 'Invoices', icon: IconPresentationAnalytics },
  // { label: 'Card Center', icon: IconFileAnalytics },
  // { label: 'Contacts', icon: IconAdjustments },
  {
    label: 'Transaction Reports',
    icon:IconReportAnalytics,
    links: [
      { label: 'All Reports', link: '/' },
      { label: 'Transfer Report', link: '/' },
      { label: 'Customer Inqury', link: '/' },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : "#FBFBFB",
    paddingBottom: 0,
    [`@media (max-width: ${rem(125)})`]: {
      width:"300px"
    },
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    marginTop:'',
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export default function Sidebar({children}:any) {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const { classes } = useStyles();
  const links = mockdata.map((item) =>  <LinksGroup {...item} key={item.label}/>);

  useEffect(()=>{
    const token = localStorage.getItem("token");

    if(!token){
      setAuthenticated(false)
    }else{
      setAuthenticated(true)
    }

  },[router])

  return (
    <section className='flex h-screen'>
     {authenticated && (
       <div className='hidden sm:block'>
       <Navbar  width={{ sm: 175 ,md:215,lg:230,xl:300}} p="md" className={classes.navbar}>
       <Navbar.Section className={classes.header}>
         <Group position="apart">
           <Logo width={rem(120)} />
           <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
         </Group>
       </Navbar.Section>
 
       <Navbar.Section grow className={classes.links} component={ScrollArea}>
         <div className={classes.linksInner}>{links}</div>
       </Navbar.Section>
 
       <Navbar.Section className={classes.footer}>
         <UserButton
           image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
           name="Ann Nullpointer"
           email="anullpointer@yahoo.com"
         />
       </Navbar.Section>
     </Navbar>
       </div>
     )}
      <main className='w-screen '>
        
        {children}
        </main>
    </section>
  );
}