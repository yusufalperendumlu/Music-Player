const WidgetEntry = ({ title, subtitle, image }) => {
  return (
    <div className="w-full flex items-center mt-8">
      <img src={image} alt={title} className="h-12 w-12 rounded-2xl mr-3" />
      <div className="flex flex-col justify-center">
        <p className="font-bold text-base text-[#c9d0e3] mb-2">{title}</p>
        <p className="font-normal text-xs text-[#c4d0e37c] m-0">{subtitle}</p>
      </div>
    </div>
  );
};

export default WidgetEntry;
