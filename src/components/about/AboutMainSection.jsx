import About1 from "../../assets/about/about-1.jpg";
import About2 from "../../assets/about/about-2.jpg";

export default function AboutMainSection() {
  return (
    <>
      <div
        data-component="AboutMainSection"
        className="p-[12rem] max-md:px-[6rem] max-sm:px-[4rem] w-full flex flex-col gap-[4.8rem]"
      >
        <div
          data-component="Block1"
          className="bg-[color:var(--text-color)] p-[6rem] max-sm:p-[4rem] flex flex-col gap-[1.8rem] text-[var(--white)] font-secondary"
        >
          <h1 className="text-6xl font-secondary font-bold">
            Seamless Comfort and Hospitality
          </h1>
          <p className="text-3xl">
            Ringruby Oduduwa brings modern comfort and West African hospitality together in the heart of Ikeja GRA. Guests get a genuinely restful base, close to the neighborhood's best without losing the calm that makes GRA distinctive.
          </p>
        </div>
        <div data-component="Block2" className="flex flex-col w-full">
          <div className="flex max-sm:flex-col">
            <div
              data-component="Block2Image"
              className="w-[60%] max-sm:w-[100%] max-w-[40rem] max-sm:max-w-[100%] max-sm:h-[25rem]"
            >
              <img
                src={About1}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div
              data-component="Block2Text"
              className="flex flex-col gap-[1.8rem] font-secondary bg-[color:var(--background-color-2)] w-[100%] p-[12rem] max-md:p-[6rem] max-sm:p-[4rem]"
            >
              <h2 className="text-6xl font-bold">
                Your Ideal Retreat for Comfort and Convenience
              </h2>
              <p className="text-3xl">
                Set minutes from Murtala Muhammed Airport, Ringruby Hotel is built for travelers who need comfort without compromise, whether on business or leisure. Every room includes king-sized beds with premium bedding, a complimentary coffee station, air conditioning, free Wi-Fi, a flat-screen TV, and a private ensuite bathroom.
              </p>
            </div>
          </div>
          {/* Second row - you can add this structure for additional img+text pairs */}
          <div className="flex max-sm:flex-col">
            <div
              data-component="Block2Text"
              className="flex flex-col gap-[1.8rem] font-secondary bg-[color:var(--background-color-2)] w-[100%] p-[12rem] max-md:p-[6rem] max-sm:p-[4rem]"
            >
              <h2 className="text-6xl font-bold">
                Experience Tranquil Stays with Unmatched Security
              </h2>
              <p className="text-3xl">
                At Ringruby Oduduwa, security isn't an afterthought - advanced surveillance and a dedicated team keep the property watched at all times. The result is a stay built on comfort, safety, and service that genuinely pays attention.
              </p>
            </div>
            <div
              data-component="Block2Image"
              className="w-[60%] max-w-[40rem] max-sm:w-[100%] max-sm:max-w-[100%] max-sm:h-[25rem]"
            >
              <img
                src={About2}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div
          data-component="Block3"
          className="bg-[color:var(--text-color)] p-[6rem] flex max-sm:flex-col gap-[6rem] text-[var(--white)] font-secondary"
        >
          <div className="flex flex-col gap-[1.8rem]">
            <h2 className="text-6xl font-secondary font-bold">Our Vision</h2>
            <p className="text-3xl">
              We're working toward something larger than any single hotel - a group built organically, excelling in place, service, people, and system.
            </p>
          </div>
          <div className="flex flex-col gap-[1.8rem]">
            <h2 className="text-6xl font-secondary font-bold">Our Mission</h2>
            <p className="text-3xl">
              At Ringruby Oduduwa, that translates into a clear promise: to be the most hospitable part of your stay in Lagos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
