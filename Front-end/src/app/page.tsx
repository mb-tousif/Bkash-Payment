"use client";
import { config } from "@/config/config";
import Axios from "axios";
// import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

export default function Home() {
  // const router = useRouter();
  const bkashPaymentHandler = async () => {
    try {
      const result = await Axios.post(config?.baseUrl + "api/v1/create");
      console.log( "🚀 Result:", result );
      if (result?.data?.status) {
        window.location.href = result?.data?.data?.data?.bkashURL;
      } else {
        toast.error("Something went wrong");
        // window.location.href = "http://localhost:3000/";
      }
    } catch (error) {
      // router.push("/");
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center mt-[100px]">
      <button
        className="bg-red-500 text-white px-3 py-2 rounded-md"
        onClick={bkashPaymentHandler}
      >
        Bkash Payment
      </button>
    </div>
  );
}
