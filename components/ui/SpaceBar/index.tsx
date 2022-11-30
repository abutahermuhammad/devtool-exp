import { ReactElement } from "react";
import S from "./SpaceBar.module.sass";
import clsx from "clsx";
import ToolBox from "../ToolBox";
import OptionBox from "../OptionBox";
import { ToolBoxMenuItemType } from "../../../types/uiTypes";
import SpaceBarFavicon from "./SpaceBarFavicon";
import SpaceBarAvatar from "./SpaceBarAvatar";

interface BrandType {
    title: string;
    img: ReactElement;
    url: string;
}
type ToolsType = ToolBoxMenuItemType[];
type OptionsType = ToolBoxMenuItemType[];
interface UserType {
    title: string;
    url: string;
    img: string;
}

export default function SpaceBar({
    className,
    brand,
    tools,
    options,
    user,
}: {
    className?: string;
    brand: BrandType;
    tools: ToolsType;
    options: OptionsType;
    user: UserType;
}) {
    return (
        <div className={clsx([S.__area, className])}>
            <div className={S.__top}>
                <>
                    <SpaceBarFavicon
                        title={brand.title}
                        logo={brand.img}
                        url={brand.url}
                    />
                    <ToolBox tools={tools} />
                </>
            </div>

            <div className={S.__bottom}>
                <>
                    <OptionBox options={options} />
                    <SpaceBarAvatar
                        title={user.title}
                        img={user.img}
                        url={user.url}
                    />
                </>
            </div>
        </div>
    );
}
