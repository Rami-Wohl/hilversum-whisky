// import { TextLink } from "~/components/nav/text-link";
import CircularImage from "~/components/ui/circular-image";
import { ContentSection } from "~/components/ui/content-section";
// import { ResponsiveImage } from "~/components/ui/responsive-image";
import rami from "../../../public/assets/images/mijn_hoofd.jpeg";
import thomas from "../../../public/assets/images/thomas-hoofd.jpeg";

export default function HomePage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center text-base lg:text-lg">
      <ContentSection title="Over ons">
        <p>
          <b>Whiskey Club Hilversum</b> bestaat uit &apos;Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Dicta recusandae blanditiis
          doloremque veritatis totam, mollitia officia tempore, aliquam
          laboriosam vero error consequuntur nihil ducimus deleniti consequatur
          nam odit voluptatum delectus?&apos;
        </p>
        <div className="flex flex-col items-start p-8 lg:flex-row">
          <div className="mb-8 flex w-full items-center justify-center lg:mb-0 lg:w-60">
            <CircularImage alt="Thomas's hoofd" src={thomas.src} size={200} />
          </div>
          <div className="text-center lg:px-8 lg:text-right">
            <h1 className="pb-4 text-xl font-semibold lg:text-2xl">Thomas</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut
            dolores ut excepturi temporibus officiis, nulla quisquam in non
            corrupti error omnis corporis sapiente quam ducimus dignissimos
            animi odit quasi!{" "}
          </div>
        </div>
        <div className="flex flex-col items-start p-8 lg:flex-row-reverse">
          <div className="mb-8 flex w-full items-center justify-center lg:mb-0 lg:w-60">
            <CircularImage alt="Rami's hoofd" src={rami.src} size={200} />
          </div>
          <div className="text-center lg:px-8 lg:text-left">
            <h1 className="text-nowrap pb-4 text-xl font-semibold lg:text-2xl">
              Rami
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut
            dolores ut excepturi temporibus officiis, nulla quisquam in non
            corrupti error omnis corporis sapiente quam ducimus dignissimos
            animi odit quasi!{" "}
          </div>
        </div>
      </ContentSection>
    </div>
  );
}
