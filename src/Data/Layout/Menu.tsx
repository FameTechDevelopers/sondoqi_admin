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
    title: "Vehicles",
    lanClass: "lan-8",
    menucontent: "Dashboards,Widgets",
    Items: [
      {
        title: "New Vehicles",
        id: 7,
        icon: "widget",
        type: "sub",
        lanClass: "lan-8",
        active: false,
        children: [
          {
            path: "/new_car/carpost",
            title: "Ad New Vehicles",
            type: "link",
          },
          {
            path: "/new_car/carpostlist",
            title: "New Vehicles List",
            type: "link",
          },
        ],
      },
    ],
  },


  





];
