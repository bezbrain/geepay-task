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
