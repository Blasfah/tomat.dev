import Head from "next/head";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

export const canonical = "https://tomat.dev";

export type ContainerProps = PropsWithChildren<{
    title: string;
    description: string;
    image?: string;
}>;

export default function Container(props: ContainerProps) {
    const { children, ...meta } = props;
    const router = useRouter();

    meta.title = `${meta.title} | tomat.dev`;
    meta.image = meta.image || `${canonical}/banner.png`;

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta content={meta.description} name="description" />
                <link rel="canonical" href={`${canonical}${router.asPath}`} />
                <OgMeta {...meta} url={router.asPath} />
                <TwitterMeta {...meta} />
            </Head>
            {children}
        </>
    );
}

type MetaProps = Omit<ContainerProps, "children">;

function OgMeta({ title, description, image, url }: MetaProps & { url: string }) {
    return (
        <>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="tomat" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={image} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:url" content={`${canonical}${url}`} />
        </>
    );
}

function TwitterMeta({ title, description, image }: MetaProps) {
    return (
        <>
            <meta property="og:title" content={title} />
            <meta name="twitter:site" content="@tomatdev" />
            <meta name="twitter:creator" content="@tomatdev" />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={image} />
        </>
    );
}
