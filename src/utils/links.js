import { AiOutlineBarChart } from "react-icons/ai";
import { FiBriefcase } from "react-icons/fi";
import { CiCirclePlus, CiUser } from "react-icons/ci";

export const sidebarTabs = [
  {
    id: "stats",
    label: "Stats",
    href: "/",
    icon: AiOutlineBarChart,
  },
  {
    id: "all-jobs",
    label: "All Jobs",
    href: "/all-jobs",
    icon: FiBriefcase,
  },
  {
    id: "add-job",
    label: "Add Job",
    href: "/add-job",
    icon: CiCirclePlus,
  },
  {
    id: "profile",
    label: "Profile",
    href: "/profile",
    icon: CiUser,
  },
];
