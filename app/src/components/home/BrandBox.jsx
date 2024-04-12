export const BrandBox = ({ image, className, alt }) => {
  return (
    <div className="rounded-lg border border-border basis-1/6 flex items-center justify-center">
      <img src={image} alt={alt} className={className} />
    </div>
  );
};
