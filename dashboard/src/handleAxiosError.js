import { toast } from "react-toastify";

export const handleAxiosError = (error) => {
  if (error.response) {
    const message =
      error.data?.message || "Something went wrong";
    toast.error(message);
  }
  else if (error.request) {
    toast.error("Server not responding. Please try again later.");
  }
  else {
    toast.error(error.message);
  }
};
