import clsx from "clsx";
import Link from "next/link";
import { ReactElement } from "react";
import CircleIcon from "../../../assets/image/icon/CircleIcon";
import { ToolBoxMenuItemType, ToolBoxMenuType } from "../../../types/uiTypes";
import S from "./OptionBox.module.sass";

interface OptionBoxType {
    className?: string;
    options: ToolBoxMenuItemType[];
}

export default function OptionBox({ className, options }: OptionBoxType) {
    return (
        <div className={clsx([S.__options, className])}>
            {options.map((e, i) => (
                <div className={S.__option} key={i} title={e.title}>
                    <Link href={e.url} title={e.title}>
                        {e.icon}
                    </Link>
                </div>
            ))}
        </div>
    );
}
