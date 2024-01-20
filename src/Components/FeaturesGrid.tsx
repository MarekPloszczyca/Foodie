import Feature from "./Feature";
import { PersonOutline } from "react-ionicons";
import { FastFoodOutline } from "react-ionicons";
import { BookOutline } from "react-ionicons";
import { HeadsetOutline } from "react-ionicons";

const features = [
  {
    icon: <PersonOutline color={"#FEA116"} width={"3rem"} height={"3rem"} />,
    title: "Top Chefs",
    description:
      "Master chefs possess an unparalleled expertise in culinary arts, seamlessly blending creativity and precision to elevate gastronomic experiences to unparalleled heights.",
  },
  {
    icon: <FastFoodOutline color={"#FEA116"} width={"3rem"} height={"3rem"} />,
    title: "Quality Food",
    description:
      "Quality food characterized by the finest, freshest ingredients thoughtfully crafted into flavorful and nutritious dishes that satisfy both the palate and the soul",
  },
  {
    icon: <BookOutline color={"#FEA116"} width={"3rem"} height={"3rem"} />,
    title: "Online Booking",
    description:
      "Reserving a table online in our restaurant not only offers patrons the convenience of securing their preferred dining time with ease, but it also allows our establishment to optimize table management, ensuring a smooth and personalized experience for our valued guests.",
  },
  {
    icon: <HeadsetOutline color={"#FEA116"} width={"3rem"} height={"3rem"} />,
    title: "24/7 Service",
    description:
      "Our service commitment reflects our unwavering dedication to meeting the needs of our customers around the clock, providing accessibility and assurance that assistance or support is readily available whenever it is required.",
  },
];

const items = features.map((item) => {
  return (
    <Feature
      key={item.title}
      icon={item.icon}
      title={item.title}
      description={item.description}
    />
  );
});

export default function FeaturesGrid() {
  return <div className="pt-12">{items}</div>;
}
