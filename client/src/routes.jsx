import {
  HomeIcon,
  InboxIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Home,Inbox,Chat, Profile, Tables, Document, Notifications, Calender, Members } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Home",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <InboxIcon {...icon} />,
        name: "inbox",
        path: "/inbox",
        element: <Inbox />,
      },
      {
        icon: <ChatBubbleLeftRightIcon {...icon} />,
        name: "Chat",
        path: "/chat",
        element: <Chat />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <ClipboardDocumentIcon {...icon} />,
        name: "Document",
        path: "/document",
        element: <Document />,
      },
      {
        icon: <CalendarDaysIcon {...icon} />,
        name: "Calender",
        path: "/calender",
        element: <Calender />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "Members",
        path: "/members",
        element: <Members/>,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
