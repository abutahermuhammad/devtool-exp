import { ReactElement } from "react";
import S from './SpaceBar.module.sass'




export default function SpaceBar({className, children }: {className: string, children: ReactElement}) {
    return (
        <div className={S.__area}>

            <div className={S.__container}>
                {children}
            </div>
        </div>
    )
}