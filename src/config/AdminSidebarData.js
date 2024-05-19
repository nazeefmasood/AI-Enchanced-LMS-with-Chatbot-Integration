import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  House,
  Plus,
  X,
  PlusCircle,
  Circle,
  Truck,
  User,
  Users,
  SignOut,
  UserPlus,
} from "phosphor-react";

import React from "react";

const SidebarData = [
  {
    path: "/admin/dashboard",
    name: "Home",
    icon: <House size={18} color="#000" />,
  },
  {
    path: "/admin/teachers",
    name: "Teachers",
    icon: <Users size={18} color="#000" />,
    subItems: [
      {
        path: "teachers",
        name: "All Teachers",
        icon: <Users size={18} color="#000" />,
      },
      {
        path: "add-teacher",
        name: "Add Teacher",
        icon: <UserPlus size={18} color="#000" />,
      },
    ],
  },
  {
    path: "/admin/students",
    name: "Students",
    icon: <Users size={18} color="#000" />,
    subItems: [
      {
        path: "students",
        name: "All Students",
        icon: <Users size={18} color="#000" />,
      },
      {
        path: "add-student",
        name: "Add Student",
        icon: <UserPlus size={18} color="#000" />,
      },
    ],
  },
  {
    path: "/admin/courses",
    name: "Courses",
    icon: <Users size={18} color="#000" />,
    subItems: [
      {
        path: "courses",
        name: "All Courses",
        icon: <Users size={18} color="#000" />,
      },
      {
        path: "add-course",
        name: "Add Course",
        icon: <UserPlus size={18} color="#000" />,
      },
    ],
  },
  {
    path: "/admin/degree-schemas",
    name: "Degree Scheme",
    icon: <Users size={18} color="#000" />,
    subItems: [
      {
        path: "degree-schemas",
        name: "View Schemas",
        icon: <Users size={18} color="#000" />,
      },
      {
        path: "add-schema",
        name: "Add Degree Schema",
        icon: <UserPlus size={18} color="#000" />,
      },
    ],
  },
  {
    path: "/admin/logout",
    name: "Logout",
    icon: <SignOut size={18} color="#000" />,
  },
];
export default SidebarData;
