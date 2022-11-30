import clsx from "clsx";
import Link from "next/link";
import { ToolBoxMenuItemType } from "../../../types/uiTypes";
import S from "./ToolBox.module.sass";

interface ToolBoxType {
    className?: string;
    tools: ToolBoxMenuItemType[];
}

export default function ToolBox({ className, tools }: ToolBoxType) {
    return (
        <div className={clsx([S.__area, className])}>
            <div className={S.__container}>
                {tools.map((e: ToolBoxMenuItemType, i: number) => (
                    <div className={S.__tool} key={i} title={e.title}>
                        <Link href={`/tools/${e.url}`} title={e.title}>
                            {e.icon}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
