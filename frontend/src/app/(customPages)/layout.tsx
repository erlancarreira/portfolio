import ButtonChat from "@/components/chat/ButtonChat";

export default function Layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
            <ButtonChat />
        </div>
    );
}