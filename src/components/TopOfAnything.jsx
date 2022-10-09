export const TopOfAnything = ({ topItem }) => {
  return (
    <div className="px-5 py-5 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
      <div>
        <img src={topItem?.images.webp.image_url} alt="" className="mx-auto" />
      </div>
      <div className="mt-4">
        <p className="font-semibold text-gray-200">{topItem?.title}</p>
        <p>
          <small className="font-semibold text-slate-300">
            {topItem?.title_english}
          </small>
        </p>
      </div>
    </div>
  );
};
