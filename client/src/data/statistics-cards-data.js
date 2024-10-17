import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Project Overview",
    value: "Task Management",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "Completed than last week",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Team Overview",
    value: "8 Members",
    footer: {
      color: "text-green-500",
      value: "6",
      label: "Online members",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "New Clients",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Sales",
    value: "$103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
