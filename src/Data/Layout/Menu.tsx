import { MenuItem } from "@/Types/LayoutTypes";

export const MenuList: MenuItem[] | undefined = [
  {
    title: "General",
    lanClass: "lan-1",
    menucontent: "Dashboards,Widgets",
    Items: [
      {
        title: "Dashboards",
        id: 1,
        icon: "home",
        type: "sub",
        lanClass: "lan-3",
        path: "/dashboard/default_dashboard",
      },
    ],
  },

  {
    title: "User",
    lanClass: "lan-8",
    menucontent: "Dashboards,Widgets",
    Items: [
      {
        title: "User Management",
        id: 7,
        icon: "user",
        type: "sub",
        lanClass: "lan-8",
        active: false,
        children: [
          {
            path: "/user/user_list",
            title: "Users List",
            type: "link",
          },
        ],
      },
    ],
  },

  {
    title: "Opportunities",
    lanClass: "lan-8",
    menucontent: "Dashboards,Widgets",
    Items: [
      {
        title: "Opportunities Manag..",
        id: 7,
        icon: "home",
        type: "sub",
        lanClass: "lan-8",
        active: false,
        children: [
          {
            path: "/opportunities/create_opportunities",
            title: "Add New Opportunity",
            type: "link",
          },
          {
            path: "/opportunities/open_opportunities_list",
            title: "Open Opportunities",
            type: "link",
          },
          {
            path: "/opportunities/closed_opportunities_list",
            title: "Closed Opportunities",
            type: "link",
          },
          {
            path: "/opportunities/deleted_opportunities_list",
            title: "Deleted Opportunities",
            type: "link",
          },
        ],
      },
    ],
  },
];
