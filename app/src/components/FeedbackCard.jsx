export const FeedbackCard = ({ comment, name }) => {
  return (
    <div className="rounded-3xl border-2 border-gghPink p-4 flex flex-col gap-4 flex-1 text-lg items-center shadow-sm shadow-black">
      <div className="w-24 h-24 bg-white rounded-full"></div>
      <p className="text-white text-center">{comment}</p>
      <p className="text-white">{name}</p>
    </div>
  );
};
