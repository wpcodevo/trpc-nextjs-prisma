import type { GetServerSideProps, NextPage } from "next";
import { object, string, TypeOf, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import FormInput from "../client/components/FormInput";
import Link from "next/link";
import { LoadingButton } from "../client/components/LoadingButton";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import FileUpLoader from "../client/components/FileUpload";
import { trpc } from "../client/utils/trpc";

const registerSchema = object({
  name: string().min(1, "Full name is required").max(100),
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  photo: string().min(1, "Photo is required"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirm: string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});

export type RegisterInput = TypeOf<typeof registerSchema>;

const RegisterPage: NextPage = () => {
  const router = useRouter();
  const { mutate: SignUpUser, isLoading } = trpc.registerUser.useMutation({
    onSuccess(data) {
      toast(`Welcome ${data.data.user.name}!`, {
        type: "success",
        position: "top-right",
      });
      router.push("/login");
    },
    onError(error) {
      toast(error.message, {
        type: "error",
        position: "top-right",
      });
    },
  });

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    // 👇 Execute the Mutation
    SignUpUser(values);
  };
  return (
    <section className="py-8 bg-ct-blue-600 min-h-screen grid place-items-center">
      <div className="w-full">
        <h1 className="text-4xl xl:text-6xl text-center font-[600] text-ct-yellow-600 mb-4">
          Welcome to CodevoWeb!
        </h1>
        <h2 className="text-lg text-center mb-4 text-ct-dark-200">
          Sign Up To Get Started!
        </h2>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="max-w-md w-full mx-auto overflow-hidden shadow-lg bg-ct-dark-200 rounded-2xl p-8 space-y-5"
          >
            <FormInput label="Full Name" name="name" />
            <FormInput label="Email" name="email" type="email" />
            <FormInput label="Password" name="password" type="password" />
            <FormInput
              label="Confirm Password"
              name="passwordConfirm"
              type="password"
            />
            <FileUpLoader name="photo" />
            <span className="block">
              Already have an account?{" "}
              <Link href="/login">
                <a className="text-ct-blue-600">Login Here</a>
              </Link>
            </span>
            <LoadingButton loading={isLoading} textColor="text-ct-blue-600">
              Sign Up
            </LoadingButton>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      requireAuth: false,
      enableAuth: false,
    },
  };
};

export default RegisterPage;
