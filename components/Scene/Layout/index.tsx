import BrandIcon from "../../../assets/image/icon/BrandIcon";
import CircleIcon from "../../../assets/image/icon/CircleIcon";
import DnsIcon from "../../../assets/image/icon/DnsIcon";
import IpIcon from "../../../assets/image/icon/IpIcon";
import LocationIcon from "../../../assets/image/icon/LocationIcon";
import Space from "../../ui/Space";
import SpaceBar from "../../ui/SpaceBar";
import SpacePanel from "../../ui/SpacePanel";
import ToolBox from "../../ui/ToolBox";
import S from "./Layout.module.sass";
import { ReactElement } from "react";
import clsx from "clsx";
import GearIcon from "../../../assets/image/icon/Gear";
import InfoIcon from "../../../assets/image/icon/InfoIcon";
import MailIcon from "../../../assets/image/icon/MailIcon";

const brand = {
    title: "Dev Tools",
    img: <BrandIcon />,
    url: "/",
};
const tools = [
    {
        id: "058",
        title: "Circle",
        icon: <CircleIcon />,
        url: "circle",
    },
    {
        id: "sd",
        title: "GeoLocation",
        icon: <LocationIcon />,
        url: "geo-location",
    },
    {
        id: "sd",
        title: "IP Lookpu",
        icon: <IpIcon />,
        url: "ip-lookup",
    },
    {
        id: "058",
        title: "DNS Lookup",
        icon: <DnsIcon />,
        url: "dns-lookup",
    },
];
const options = [
    {
        id: "058",
        title: "Updates",
        icon: <MailIcon />,
        url: "/profile/updates",
    },

    {
        id: "058",
        title: "Help",
        icon: <InfoIcon />,
        url: "/help",
    },

    {
        id: "058",
        title: "Settings",
        icon: <GearIcon />,
        url: "/profile/settings",
    },
];
const user = {
    title: "Abu Taher Muhammad",
    url: "/abut1081",
    img: "/image/Profile.png",
};

export default function Layout({
    className,
    children,
}: {
    className?: string;
    children: ReactElement;
}) {
    return (
        <main className={clsx([S.__main, className])}>
            <SpaceBar
                brand={brand}
                tools={tools}
                options={options}
                user={user}
            />

            <SpacePanel>
                <></>
            </SpacePanel>

            <Space>
                <>
                    This is space
                    {children}
                </>
            </Space>
        </main>
    );
}
