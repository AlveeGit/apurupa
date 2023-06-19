import Image from "next/image";
import React from "react";

const Auth = () => {
  return (
    //Hero image with blur effect
    <div className="relative h-full w-fll bg-[url('/images/hero.jpg')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="bg-black w-full h-full bg-opacity-50">

        {/* Navigation with logo */}
        <nav className="px-12 py-5">
          <Image src="/images/logo.png" className="h-12" alt="Logo" width={200} height={20}></Image>
        </nav>

        {/* Input Section */}
        <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                <h2 className="text-white text-4xl mb-8 font-semibold">
                    Sign in
                </h2>
                <div className="flex flex-col gap-4">

                </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default Auth;
