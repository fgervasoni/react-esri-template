import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <main className="h-[calc(100vh-3rem)] px-3">{children}</main>
            {/* <Footer /> */}
        </>
    );
}
