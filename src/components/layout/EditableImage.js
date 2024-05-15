import Image from "next/image";
import toast from "react-hot-toast";

export default function EditableImage({ link, setLink }) {
  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      // data.set('file', files[0]);
      data.set("file", files[0]);
      data.append("upload_preset", "uploads");

      // const uploadRes = axios
      //   .post("https://api.cloudinary.com/v1_1/azzy5400/image/upload", data)
      //   .then((response) => {
      //     if (response.ok) {
      //       console.log(uploadRes.data);
      //       return response.json().then((link) => {
      //         setLink(link);
      //       });
      //     }
      //   });

      const uploadRes = await fetch(
        "https://api.cloudinary.com/v1_1/azzy5400/image/upload",
        {
          method: "POST",
          body: data,
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json().then((link) => {
              console.log(link);
              setLink(link.url);
            });
          }
          throw new Error("Something went wrong");
        })
        .catch((error) => {
          console.error(error);
        });

      // const uploadPromise = fetch('/api/upload', {
      //   method: 'POST',
      //   body: data,
      // }).then(response => {
      //   if (response.ok) {
      //     return response.json().then(link => {
      //       setLink(link);
      //     })
      //   }
      //   throw new Error('Something went wrong');
      // });

      // await toast.promise(uploadRes, {
      //   loading: "Uploading...",
      //   success: "Upload complete",
      //   error: "Upload error",
      // });
    }
  }

  return (
    <>
      {link && (
        <Image
          className="rounded-lg w-full h-full mb-1"
          src={link}
          width={250}
          height={250}
          alt={"avatar"}
        />
      )}
      {!link && (
        <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1">
          No image
        </div>
      )}
      <label>
        <input type="file" className="hidden" onChange={handleFileChange} />
        <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
          Change image
        </span>
      </label>
    </>
  );
}
