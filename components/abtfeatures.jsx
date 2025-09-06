import MaskedDiv from "@/components/ui/masked-div";

function MaskedDivDemo() {
  return (
    <div className="min-h-screen flex flex-col items-center py-5 px-6 gap-4">
      
      {/* First row */}
      <div className="flex flex-wrap justify-center items-center w-full max-w-6xl">
        <MaskedDiv maskType="type-1" size={0.3}>
          <video
            className="cursor-pointer transition-all duration-300 hover:scale-105 w-full h-auto"
            autoPlay
            loop
            muted
          >
            <source
              src="https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </MaskedDiv>

        <MaskedDiv maskType="type-1" size={0.3} className="rotate-180">
          <video
            className="cursor-pointer transition-all duration-300 hover:scale-105 w-full h-auto"
            autoPlay
            loop
            muted
          >
            <source
              src="https://videos.pexels.com/video-files/18069803/18069803-uhd_1440_2560_24fps.mp4"
              type="video/mp4"
            />
          </video>
        </MaskedDiv>
      </div>

      {/* Second row */}
      <div className="flex flex-wrap justify-center items-center gap-10 w-full max-w-6xl">
        <MaskedDiv maskType="type-3" size={0.45}>
          <video
            className="cursor-pointer transition-all duration-300 hover:scale-105 w-full h-auto"
            autoPlay
            loop
            muted
          >
            <source
              src="https://videos.pexels.com/video-files/18069166/18069166-uhd_2560_1440_24fps.mp4"
              type="video/mp4"
            />
          </video>
        </MaskedDiv>

        <MaskedDiv maskType="type-4" size={0.65}>
          <video
            className="cursor-pointer transition-all duration-300 hover:scale-105 w-full h-auto"
            autoPlay
            loop
            muted
          >
            <source
              src="https://videos.pexels.com/video-files/18069701/18069701-uhd_2560_1440_24fps.mp4"
              type="video/mp4"
            />
          </video>
        </MaskedDiv>

        {/* <MaskedDiv maskType="type-2" size={0.45}>
          <video
            className="cursor-pointer transition-all duration-300 hover:scale-105 w-full h-auto"
            autoPlay
            loop
            muted
          >
            <source
              src="https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4"
              type="video/mp4"
            />
          </video>
        </MaskedDiv> */}
      </div>

    </div>
  );
}

export default MaskedDivDemo;
