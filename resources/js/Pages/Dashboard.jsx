import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link,Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
// import { router } from "@inertiajs/vue3";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setIsnotif] = useState(false);

    // const wkwk = () => {
    //     return (
    //         <div>
    //             <h1>Salah</h1>
    //         </div>
    //     );
    // };
    let myStr = "";

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        setIsnotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
        Inertia.post("/news", data);
    };

    // console.log("Props ni", props);
    // console.log("wkwk", isNotif);
    useEffect(() => {
        if (!props.myNews) {
            Inertia.get("/news");
        }
        console.log("props :", props);
        return;
    }, []);
    console.log(props);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Berita Gue
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 text-gray-900 border-b border-gray-200 bg-white">
                        {props.flash.message && (
                            <div className="alert alert-info">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="stroke-current shrink-0 w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                                <span>{props.flash.message}</span>
                            </div>
                        )}
                        <input
                            onChange={(title) => setTitle(title.target.value)}
                            value={title}
                            type="text"
                            placeholder="Judul"
                            className="m-2 input input-bordered w-full bg-white"
                        />
                        <input
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            value={description}
                            type="text"
                            placeholder="Deskripsi"
                            className="m-2 input input-bordered w-full  bg-white"
                        />
                        <input
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            value={category}
                            type="text"
                            placeholder="Category"
                            className="m-2 input input-bordered w-full  bg-white"
                        />
                        <button
                            className="btn btn-primary m-2"
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div className="p-4">
                    {props.myNews && props.myNews.length > 0 ? (
                        props.myNews.map((news, i) => {
                            return (
                                <div
                                    key={i}
                                    className="card w-full lg:w-96 bg-base-100 shadow-xl m-2"
                                >
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {news.title}
                                            <div className="badge badge-secondary">
                                                NEW
                                            </div>
                                        </h2>
                                        <p>{news.description}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-inline">
                                                {news.category}
                                            </div>
                                            <div className="badge badge-outline">
                                                <Link
                                                    href={route("edit.news")}
                                                    method="get"
                                                    data={{ id: news.id }}
                                                    as="button"
                                                >
                                                    Edit
                                                </Link>
                                            </div>
                                            <div className="badge badge-outline">
                                                <Link
                                                    href={route("delete.news")}
                                                    method="post"
                                                    data={{ id: news.id }}
                                                    as="button"
                                                >
                                                    Delete
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>Anda, belum memiliki berita</p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
