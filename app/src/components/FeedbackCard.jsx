export const FeedbackCard = ({ comment, name }) => {
  return (
    <div className="rounded-xl border-2 border-[#F0C039] p-4 flex flex-col gap-4 flex-1 text-lg">
      <p className="text-white">{comment}</p>
      <div className="w-24 h-24 bg-white rounded-full"></div>
      <p className="text-white">{name}</p>
    </div>
  );
};
