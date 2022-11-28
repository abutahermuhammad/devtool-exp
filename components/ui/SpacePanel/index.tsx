import { ReactElement } from "react";
import S from './SpacePanel.module.sass'




export default function SpacePanel({className, children }: {className: string, children: ReactElement}) {
    return (
        <div className={S.__area}>

        </div>
    )
}