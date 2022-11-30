import { ReactElement } from "react";
import S from "./Space.module.sass";

export default function Space({
    className,
    children,
}: {
    className?: string;
    children: ReactElement;
}) {
    return <div className={S.__area}>{children}</div>;
}
