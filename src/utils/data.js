import {
  avSales,
  totalIncome,
  totalOrder,
  totalRefund,
  trendingDown,
  trendingUp,
} from "../assets/icons/graphIcons";
import {
  arrowRight,
  box,
  category,
  discountShape,
  infoCircle,
  logout,
  profileUser,
  setting,
  trendUp,
} from "../assets/icons/sideBarIcons";
import {
  avSalesImg,
  totalIncomeImg,
  totalOrderImg,
  totalRefundImg,
} from "../assets/images/graphImages";

import {
  cooper,
  corey,
  jaydon,
  marcus,
  philip,
} from "../assets/images/dashboardImages";

export const topIcons = [
  {
    id: 1,
    icon: category,
    name: "category",
  },
  {
    id: 2,
    icon: trendUp,
    name: "trend",
  },
  {
    id: 3,
    icon: profileUser,
    name: "profile",
  },
  {
    id: 4,
    icon: box,
    name: "box",
  },
  {
    id: 5,
    icon: discountShape,
    name: "discount",
  },
  {
    id: 6,
    icon: infoCircle,
    name: "info-circle",
  },
];

export const baseIcon = [
  {
    id: 1,
    icon: arrowRight,
    name: "arrow",
  },
  {
    id: 2,
    icon: setting,
    name: "setting",
  },
  {
    id: 3,
    icon: logout,
    name: "logout",
  },
];

export const chartData = [
  {
    id: 1,
    icon: totalOrder,
    image: totalOrderImg,
    footerImg: trendingUp,
    name: "Total Order",
    value: 350,
    trend: "trendUp",
  },
  {
    id: 2,
    icon: totalRefund,
    image: totalRefundImg,
    footerImg: trendingDown,
    name: "Total Refund",
    value: 270,
    trend: "trendDown",
  },
  {
    id: 3,
    icon: avSales,
    image: avSalesImg,
    footerImg: trendingDown,
    name: "Average Sales",
    value: 1567,
    trend: "trendDown",
  },
  {
    id: 4,
    icon: totalIncome,
    image: totalIncomeImg,
    footerImg: trendingUp,
    name: "Total Income",
    value: "$350.000",
    trend: "trendUp",
  },
];

export const orderData = [
  {
    id: 1,
    orderImg: marcus,
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
  },
  {
    id: 2,
    orderImg: jaydon,
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
  },
  {
    id: 3,
    orderImg: corey,
    name: "Corey Schleifer",
    date: "Nov 14, 2023",
    amount: "$87,000",
    status: "Paid",
  },
  {
    id: 4,
    orderImg: cooper,
    name: "Copper Press",
    date: "Nov 14, 2023",
    amount: "$100,000",
    status: "Refund",
  },
  {
    id: 5,
    orderImg: philip,
    name: "Phillip Lubin",
    date: "Nov 14, 2023",
    amount: "$78,000",
    status: "Paid",
  },
];

export const topPlatformData = [
  {
    id: 1,
    color: "purple",
    name: "Book Bazaar",
    amount: "$2,500,000",
    rate: "+15%",
  },
  {
    id: 2,
    color: "offBlue",
    name: "Artisan Aisle",
    amount: "$1,800,000",
    rate: "+10%",
  },
  {
    id: 3,
    color: "yellow",
    name: "Toy Troop",
    amount: "$1,200,000",
    rate: "+8%",
  },
  {
    id: 4,
    color: "red",
    name: "XStore",
    amount: "$600,000",
    rate: "+7%",
  },
];
