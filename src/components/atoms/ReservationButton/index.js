"use client";

import SendOtp from "@/components/templates/authForm/SendOtp";
import { useAddToBasket } from "@/core/services/mutations";
import { getCookie } from "@/core/utils/cookie";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function ReservationButton({ id }) {
  const { mutate, isPending } = useAddToBasket();
  const router = useRouter();
  const CartHandler = () => {
    if (isPending) return;

    mutate(id, {
      onSuccess: (data) => {
        toast.success(data.data.message);
        router.push("/checkout");
      },
      onError: (error) => {
        console.log(error);

        toast.error("لطفا وارد حساب کاری خود شوید ");
      },
    });
  };
  return (
    <div>
      <button
        onClick={CartHandler}
        className="bg-primary text-white py-2 px-8 rounded-md text-2xl"
      >
        رزرو و خرید
      </button>
    </div>
  );
}

export default ReservationButton;
