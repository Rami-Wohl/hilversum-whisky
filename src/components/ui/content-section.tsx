import { type ReactNode } from "react";

function WelcomeBanner() {
  return (
    <h1 className="my-6 flex w-full flex-row items-center justify-between">
      <span className="mx-4 w-full text-center text-lg font-semibold lg:text-xl"></span>
    </h1>
  );
}

export const ContentSection = ({
  children,
  title,
  size = "normal",
}: {
  children: ReactNode;
  title: string;
  size?: "normal" | "large";
}) => {
  return (
    <div
      className={`relative flex h-full w-full flex-col items-center overflow-y-scroll bg-amber-950 bg-opacity-30 px-2 font-sans text-orange-950`}
    >
      <div
        className={`my-16 flex w-full max-w-[1000px] flex-col items-center justify-center rounded-md bg-white bg-opacity-60 p-8 pt-0 font-sans text-orange-950 lg:p-8 lg:pt-0 ${size === "normal" ? "lg:w-1/2" : "lg:w-fit"}`}
      >
        <WelcomeBanner />
        <h1 className="mb-8 text-2xl uppercase lg:text-3xl">{title}</h1>
        <div className="flex w-full flex-col gap-6">{children}</div>
      </div>
    </div>
  );
};
