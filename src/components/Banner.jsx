import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="min-h-[calc(100dvh-4rem)] bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-6 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        {/* Large Scaff UI Branding */}
        <div className="mb-10 sm:mb-12 lg:mb-18">
          <h2 className="text-left text-6xl font-light tracking-tighter text-gray-950 sm:text-center sm:text-7xl md:text-8xl lg:text-8xl">
            Scaff UI
          </h2>
        </div>

        {/* Hero Content + Video */}
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          {/* Hero Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              Scaffold the user interface{" "}
              <span className="text-zinc-800">make it</span> yours
            </h1>

            <p className="mt-4 max-w-lg text-base text-pretty leading-relaxed text-gray-700 sm:text-lg">
              A free open source CLI-based Tailwind CSS component generator for
              responsive minimalistic web design.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/commons"
                className="inline-block rounded-sm border border-zinc-600 bg-zinc-600 px-4 py-2 font-medium text-white shadow-sm transition-colors hover:bg-zinc-700 sm:px-5 sm:py-3"
              >
                Browse Designs
              </Link>
              <Link
                to="/docs"
                className="inline-block rounded-sm border border-zinc-300 bg-white px-4 py-2 font-medium text-zinc-800 shadow-sm transition-colors hover:border-zinc-700 hover:bg-zinc-700 hover:text-white sm:px-5 sm:py-3"
              >
                Read the Docs
              </Link>
            </div>
          </div>

          {/* Video Card */}
          <div className="w-full">
            <div className="mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm md:max-w-none">
              <div className="aspect-video w-full">
                <video
                  className="h-full w-full object-cover"
                  controls
                  preload="metadata"
                  poster="/images/video-poster.jpg"
                >
                  <source src="/videos/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}