import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setIsnotif] = useState(false);

     const handleSubmit = () => {
         const data = {
            id: props.myNews.id,
             title,
             description,
             category,
         };

         setTitle("");
         setDescription("");
         setCategory("");
         Inertia.post("/news/update", data);
         console.log(data)
     };


    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title}></Head>
            <Navbar user={props.auth.user} />
            <div className="card w-full lg:w-96 bg-base-100 shadow-xl m-2">
                <div className="p-4 text-2xl">EDIT BERITA</div>
                <div className="card-body">
                    <input
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myNews.title}
                        type="text"
                        placeholder="Judul"
                        className="m-2 input input-bordered w-full bg-white"
                    />
                    <input
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                        defaultValue={props.myNews.description}
                        type="text"
                        placeholder="Deskripsi"
                        className="m-2 input input-bordered w-full  bg-white"
                    />
                    <input
                        onChange={(category) =>
                            setCategory(category.target.value)
                        }
                        defaultValue={props.myNews.category}
                        type="text"
                        placeholder="Category"
                        className="m-2 input input-bordered w-full  bg-white"
                    />
                    <button
                        className="btn btn-primary m-2"
                        onClick={() => handleSubmit()}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}
