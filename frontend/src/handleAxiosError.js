import { toast } from "react-toastify";

export const handleAxiosError = (error) => {
  if (error.response) {
  console.log( error.response.data)
    console.log( error.response.data.Error)
    const message =
      error.response.data?.message || "Something went wrong";
    toast.error(message);
  }
  else if (error.request) {
    toast.error("Server not responding. Please try again later.");
  }
  else {
    toast.error(error.message);
  }
};
