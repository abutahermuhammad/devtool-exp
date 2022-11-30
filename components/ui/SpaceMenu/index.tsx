import { ReactElement } from "react";
import S from "./SpaceMenu.module.sass";

export default function SpaceMenu({
    className,
    children,
}: {
    className?: string;
    children: ReactElement;
}) {
    return <div className={S.__area}></div>;
}
