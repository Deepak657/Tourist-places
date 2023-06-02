import { IoLocationOutline } from "react-icons/io5";
import { IoAirplaneSharp } from "react-icons/io5";
import { MdMonetizationOn } from "react-icons/md";
import { TbCar } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { RiBuilding4Line, RiVisaFill } from "react-icons/ri";
import styled from "styled-components";

interface IClients {
  id: number;
  image: string;
  name: string;
}

export const ClientsData: IClients[] = [
  {
    id: 1,
    image:
      "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture.jpg",
    name: "Samra Khan",
  },
  {
    id: 2,
    image:
      "https://umbrella.data.naturalint.com/production/articles/uploads/photo/Untitleddesign403.20220526114538.jpg",
    name: "John Cena",
  },
  {
    id: 3,
    image:
      "https://shotkit.com/wp-content/uploads/2021/06/Cool-profile-picture-LinkedIn.jpg",
    name: "Katherin Toy",
  },
];

interface IJourneyProps {
  id: number;
  options: string;
  seleted: string;
  icon: JSX.Element;
}

export const JourneyCardData: IJourneyProps[] = [
  {
    id: 1,
    options: "Location",
    seleted: "United States",
    icon: <IoLocationOutline />,
  },
  {
    id: 2,
    options: "Check In Date",
    seleted: "23/4/2023",
    icon: <IoAirplaneSharp />,
  },
  {
    id: 3,
    options: "Check Out Date",
    seleted: "23/4/2023",
    icon: <IoAirplaneSharp />,
  },
  {
    id: 4,
    options: "Budget",
    seleted: "$23000",
    icon: <MdMonetizationOn />,
  },
];

const RiBuilding4Line2 = styled(RiBuilding4Line)`
  color: #fff;
  font-size: 60px;
`;
const TbCar2 = styled(TbCar)`
  color: #fff;
  font-size: 60px;
`;

const RiVisaFill2 = styled(RiVisaFill)`
  color: #fff;
  font-size: 60px;
`;

const CiUser2 = styled(CiUser)`
  color: #fff;
  font-size: 60px;
`;

interface IServiceProps {
  id: number;
  icon: JSX.Element;
  title: string;
  offer: string;
}

export const ServiceData: IServiceProps[] = [
  {
    id: 1,
    icon: <RiBuilding4Line2 />,
    title: "Hotel",
    offer: "Get Awesome Discount up to 25% just for you, our beloved customer",
  },
  {
    id: 2,
    icon: <TbCar2 />,
    title: "Cars",
    offer: "Get Awesome Discount up to 25% just for you, our beloved customer",
  },
  {
    id: 3,
    icon: <RiVisaFill2 />,
    title: "VISA",
    offer: "Get Awesome Discount up to 25% just for you, our beloved customer",
  },
  {
    id: 4,
    icon: <CiUser2 />,
    title: "Guider",
    offer: "Get Awesome Discount up to 25% just for you, our beloved customer",
  },
];

interface IBlogs {
  id: number;
  url: string;
}

export const BlogsImageUrl: IBlogs[] = [
  {
    id: 1,
    url: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000",
  },
  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
  },
  {
    id: 3,
    url: "https://media.istockphoto.com/id/182027571/photo/backlight-view-through-apple-tree-summer-meadow-in-bavaria-germany.jpg?s=612x612&w=0&k=20&c=x0WMRiJz2RX87SHN2A4JobozSgiHM9LTKazi92NyNRo=",
  },
  {
    id: 4,
    url: "https://wallpapers.com/images/featured/2ygv7ssy2k0lxlzu.jpg",
  },
  {
    id: 5,
    url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  },
  {
    id: 6,
    url: "https://images.freeimages.com/images/previews/fa4/sunset-tree-1355206.jpg",
  },
];
