import Space from "../Space";
import SpaceBar from "../SpaceBar";
import SpacePanel from "../SpacePanel";
import S from './Layout.module.sass'

export default function Layout() {
    return (
        <main className={S.__main}>
            <SpaceBar className="">
                <></>
            </SpaceBar>

            <SpacePanel className="">
                <></>
            </SpacePanel>

            <Space className="">
                <>
                This is space</>
            </Space>
        </main>
    )
}