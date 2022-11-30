import Image from "next/image";
import Link from "next/link";

export default function SpaceBarAvatar({
    img,
    title,
    url,
}: {
    img: string;
    title: string;
    url: string;
}) {
    return (
        <>
            <div className="dt__avatar" title={title}>
                <Link href={url} title={title}>
                    <Image src={img} width={32} height={32} alt={title} />
                </Link>
            </div>

            <style>{`
                .dt__avatar {
                    width: 32px;
                    height: 32px;
                    background: #21252B;
                    border-radius: 50%;
                }
            `}</style>
        </>
    );
}
