import { Link } from "react-router-dom";

export const TopOfAnything = ({ topItem }) => {
  return (
    <Link to={`${topItem.mal_id}`}>
      <div className=" h-full px-5 py-5 text-center transition duration-300 transform bg-slate-800 rounded shadow-2xl md:hover:scale-105 md:shadow-xl hover:shadow-2xl">
        <div>
          <img
            src={topItem?.images.webp.image_url}
            alt=""
            className="mx-auto"
          />
        </div>
        <div className="mt-4">
          <p className="font-semibold text-gray-200">
            {topItem?.title || topItem?.name}
          </p>
          <p>
            <small className="font-semibold text-slate-300">
              {topItem?.title_english}
            </small>
          </p>
        </div>
      </div>
    </Link>
  );
};
