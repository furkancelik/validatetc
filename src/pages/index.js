import { useState } from "react";
import validateTC from "validatetc";

export default function Page() {
  const [tc, setTC] = useState("");
  const [message, setMessage] = useState({});
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12  lg:px-8 bg-neutral-600 w-[50%] m-auto mt-[5%]">
      <div>
        <label
          htmlFor="price"
          className="block text-2xl mb-5 font-medium leading-6 text-white"
        >
          TC No:
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            value={tc}
            onChange={(e) => {
              setTC(e.target.value);
            }}
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl"
          />
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-8">
        <button
          disabled={!(tc.length >= 11)}
          className={`bg-neutral-800 hover:bg-neutral-900 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed disabled:opacity-${
            tc.length >= 11 ? "100" : "50"
          }`}
          onClick={() => {
            if (validateTC(tc)) {
              setMessage({ type: "success", text: "Geçerli TC No" });
            } else {
              setMessage({ type: "error", text: "Geçersiz TC No!" });
            }
          }}
        >
          Kontrol Et
        </button>

        {message?.text && tc && (
          <button
            disabled={!(tc.length >= 11)}
            className={`bg-neutral-800 hover:bg-neutral-900 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed disabled:opacity-${
              tc.length >= 11 ? "100" : "50"
            }`}
            onClick={() => {
              setMessage(null);
              setTC("");
            }}
          >
            Temizle
          </button>
        )}
      </div>
      {message?.text && (
        <>
          <hr className="mt-10 bg-black border-stone-500" />
          <div
            className={`${
              message?.type == "error"
                ? "text-red-950 bg-red-500"
                : " text-lime-950 bg-lime-300"
            } text-sm text-center mt-5  p-3 rounded-md`}
          >
            {message?.text}
          </div>
        </>
      )}
    </div>
  );
}
