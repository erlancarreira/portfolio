import Markdown  from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

export interface ContentProps {
    children: string   
}

export default function ContentMD(props: ContentProps) {    
    return (
        <Markdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeRaw]}
            skipHtml={false}
        >
            {props.children}
        </Markdown>
    )
}
