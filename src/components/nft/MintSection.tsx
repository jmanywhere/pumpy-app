"use client";

const MintSection = () => {
  return (
    <>
      <div className="bg-[#23282D] px-8 py-6 rounded-2xl border-4 border-dashed border-primary flex flex-col justify-center items-center w-[90%] max-w-md my-4">
        <h1 className="text-3xl sm:text-4xl font-next-sphere text-center whitespace-pre mb-2">
          Mint your{"\n"}
          <span className="text-primary text-[2.8rem] sm:text-[3.4rem]">
            PUMPY
          </span>
        </h1>
        <div className="card border-2 border-dashed border-[#EC4355] w-[175px] flex flex-col items-center justify-center p-4 pb-0 bg-[#2e0d3e]">
          <div className="rounded-6xl bg-[#00E4A1] font-orbitron p-2 rounded-xl w-full text-center h-[140px]">
            <div className="text-[8rem] -mt-9">?</div>
          </div>
          <p className="text-center uppercase font-nexa-heavy whitespace-pre font-extrabold text-lg py-2">
            NFT Pumpy{"\n"}?% ROI
          </p>
        </div>
        <div className="form-control font-nexa">
          <label className="label">
            <span className="label-text text-xl">
              Number of{" "}
              <span className="text-primary uppercase">Pumpy&apos;s</span>
            </span>
          </label>
          <input
            type="number"
            placeholder="Pumpy's to Mint"
            className="input input-bordered input-secondary bg-[#1F1C24] font-nexa"
          />
          <label className="label whitespace-pre">
            <span className="label-text-alt">
              Price: TBD $PUMPY{"\n"}Wallet: TBD $PUMPY
            </span>
          </label>
        </div>
        <button className="btn btn-primary text-2xl tracking-wider font-nexa pt-1 px-10 mt-2">
          Mint
        </button>
      </div>
    </>
  );
};

export default MintSection;
