import React, { useCallback } from "react";
import { Controller, useController, useFormContext } from "react-hook-form";
import useStore from "../store";
import Spinner from "./Spinner";

const CLOUDINARY_UPLOAD_PRESET = "nextjs-trpc";
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/Codevo/image/upload";

type FileUpLoaderProps = {
  name: string;
};
const FileUpLoader: React.FC<FileUpLoaderProps> = ({ name }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { field } = useController({ name, control });
  const store = useStore();

  const onFileDrop = useCallback(
    async (e: React.SyntheticEvent<EventTarget>) => {
      const target = e.target as HTMLInputElement;
      if (!target.files) return;
      const newFile = Object.values(target.files).map((file: File) => file);
      const formData = new FormData();
      formData.append("file", newFile[0]!);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      store.setUploadingImage(true);
      const data = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          store.setUploadingImage(false);

          return res.json();
        })
        .catch((err) => {
          store.setUploadingImage(false);
          console.log(err);
        });

      if (data.secure_url) {
        field.onChange(data.secure_url);
      }
    },

    [field, store]
  );

  return (
    <Controller
      name={name}
      defaultValue=""
      control={control}
      render={({ field: { name, onBlur, ref } }) => (
        <>
          <div className="mb-2 flex justify-between items-center">
            <div>
              <span className="block mb-2">Choose profile photo</span>
              <input
                className="block text-sm mb-2 text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                type="file"
                name={name}
                onBlur={onBlur}
                ref={ref}
                onChange={onFileDrop}
                multiple={false}
                accept="image/jpg, image/png, image/jpeg"
              />
            </div>
            <div>
              {store.uploadingImage && <Spinner color="text-yellow-400" />}
            </div>
          </div>
          <p
            className={`text-red-500 text-xs italic mb-2 ${
              errors[name] ? "visible" : "invisible"
            }`}
          >
            {errors[name] && (errors[name]?.message as unknown as string)}
          </p>
        </>
      )}
    />
  );
};

export default FileUpLoader;
