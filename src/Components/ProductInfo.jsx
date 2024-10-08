/* eslint-disable react/prop-types */

const ProductInfo = ({ title, paragraph, color }) => {
  return (
    <div className=" md:max-w-[1100px] mx-auto px-4   pb-3">
      <div className=" max-w-[500px]    ">
        <h2 className={`text-4xl px-4 md:px-0 pb-2 ${color}`}>{title}</h2>

        {paragraph.slice(0, 150) && (
          <p className="text-[15px] pt-4 pb-2 text-gray-700 px-4 md:px-0">
            {`${paragraph?.slice(0, 150)} `}
          </p>
        )}

        {paragraph.slice(151, 1000) && (
          <p className="text-[15px] pt-4 pb-2 text-gray-700 px-4 md:px-0">
            {` ${paragraph?.slice(151, 1000)}`}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
