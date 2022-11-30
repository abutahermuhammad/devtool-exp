import { ReactElement } from "react";
import S from "./SpaceOption.module.sass";

export default function SpaceOption({
    className,
    children,
}: {
    className?: string;
    children: ReactElement;
}) {
    return <div className={S.__area}></div>;
}
