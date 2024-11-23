import React, { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormInput from "../../reusables/FormInput";
import Button from "../../reusables/Button";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone number is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email address is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const res = await axios.post(
        "https://hook.us1.make.com/p3u1x8apsp8kqblol41rm7zf6xkgd8uy",
        data
      );
      console.log(res);
      setLoading(false);
      toast.success("Form submitted successfully");
      reset();
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error?.data?.response?.message);
    }
  };
  return (
    <div id="contact">
      <div className="p-[28px] shadow-md rounded-md mt-[30px] flex-col flex justify-center items-center">
        <h2 className="section-header-text text-[#112F5A]">Send a message</h2>
        <p className="paragraph max-w-[742px] text-center my-[20px]">
          I’d love to hear from you!
        </p>

        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="md:grid-cols-2 grid grid-cols-1 gap-4">
            <FormInput
              type="text"
              placeholder="Full name"
              register={{ ...register("name") }}
              error={errors.name?.message}
            />
            <FormInput
              type="email"
              placeholder="Your email"
              register={{ ...register("email") }}
              error={errors.email?.message}
            />
          </div>
          <FormInput
            type="number"
            placeholder="Enter your phone number"
            register={{ ...register("phone") }}
            error={errors.phone?.message}
          />
          <FormInput
            type="text"
            placeholder="Subject"
            register={{ ...register("subject") }}
            error={errors.subject?.message}
          />
          <textarea
            id="message"
            rows="4"
            placeholder="Message"
            className="w-full resize-none max-w-400 p-2 rounded-md border border-gray-400 text-[14px] shadow-sm outline-none"
            {...register("message")}
          ></textarea>
          {errors.message && (
            <p className="text-[red] text-[12px]">{errors.message.message}</p>
          )}

          <div className="w-full flex justify-center items-center mt-[20px]">
            <div className="flex justify-center items-center my-[20px]">
              <Button text={"Send"} type={"submit"} loading={loading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
