import { toast } from "react-toastify";

export const handleAxiosError = (error) => {
  if (error?.response) {
    const message = error.response?.data?.message || "Something went wrong";
    toast.error(message);
    return;
  }
  if (error?.request) {
    toast.error("Server not responding. Please try again later.");
    return;
  }
  toast.error(error?.message || "An error occurred");
};
