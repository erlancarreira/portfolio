import ContentMD from "../shared/ContentMD"

export interface ReadmeProps {
    children: string  
}

export default function Readme(props: ReadmeProps) {
    return (
        <div className="
            flex flex-col items-stretch p-6 bg-blank
            border border-zinc-800 rounded-2xl
        ">
            <div className="prose prose-zinc prose-invert" style={{ maxWidth: "100%" }}>
                <ContentMD>{props.children}</ContentMD>
            </div>
        </div>
    )
}

