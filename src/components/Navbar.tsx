import { ImageUrl, RedirectUrl } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const redirectUrls: RedirectUrl[] = [
    { label: "Portfolio", redirect: "/" },
    { label: "Resume", redirect: "/resume" },
  ];

  const imageUrls: ImageUrl[] = [
    { src: "/github.svg", alt: "github", url: "https://github.com/ejoonko" },
    {
      src: "/linkedin.svg",
      alt: "linkedin",
      url: "https://www.linkedin.com/in/e-joon-ko/",
    },
  ];

  return (
    <div className="flex h-20 justify-center bg-black">
      <div className="default-max-width flex w-full justify-between">
        <p className="my-auto text-lg text-white">{"E-Joon Ko"}</p>
        <div className="flex justify-end gap-16">
          <div className="my-auto flex gap-8">
            {redirectUrls.map((redirectUrl) => (
              <Link
                key={redirectUrl.label}
                href={redirectUrl.redirect}
                className="text-lg text-white"
              >
                {redirectUrl.label}
              </Link>
            ))}
          </div>
          <div className="my-auto flex gap-8">
            {imageUrls.map((redirectImage) => (
              <Link key={redirectImage.alt} href={redirectImage.url}>
                <Image
                  src={redirectImage.src}
                  alt={redirectImage.alt}
                  width={28}
                  height={28}
                ></Image>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
