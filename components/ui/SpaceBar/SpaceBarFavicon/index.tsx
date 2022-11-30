import Link from "next/link";
import { ReactElement } from "react";

export default function SpaceBarFavicon({
    logo,
    title,
    url,
}: {
    logo: ReactElement;
    title: string;
    url: string;
}) {
    return (
        <>
            <div className="dt__brandIcon" title={title}>
                <Link href={url} title={title}>
                    {logo ? logo : title}
                </Link>
            </div>

            <style>{`
                .dt__brandIcon {
                    width: 32px;
                    height: 32px;
                    padding: 4px;
                    background: #21252B;
                }
            `}</style>
        </>
    );
}
