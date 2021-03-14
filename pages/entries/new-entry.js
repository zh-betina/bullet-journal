import Link from 'next/link';

import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";

export default function NewEntry() {
    return (
        <>
            <Sidebar />
            <Layout>
                <h1 className="txtTitle txt--middle">New Bullet Journal Entry</h1>
                <div className="align--right">
                    <Link href="/">
                        <button className="mainBtn">Go back to main page</button>
                    </Link>
                </div>
            </Layout>
        </>
    )
}