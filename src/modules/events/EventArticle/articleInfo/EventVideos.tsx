export const EventVideos = ({ eventId }: { eventId: string }) => {
  return (
    <>
      <p className="p-8 font-semibold">Video</p>
      <div className="relative mb-1">
        <video className="mb-1 rounded-lg" controls key={`${eventId}_cf`}>
          <source src={`/video/${eventId}_cf.webm`} type="video/webm" />
        </video>
        <span className="bg-secondary/90 absolute left-1/2 top-3 -translate-x-1/2 rounded-2xl px-3 py-2 uppercase text-white">
          Road view
        </span>
      </div>
      <div className="relative">
        <video className="rounded-2xl" controls key={`${eventId}_rf`}>
          <source src={`/video/${eventId}_rf.webm`} type="video/mp4" />
        </video>
        <span className="bg-secondary/90 absolute left-1/2 top-3 -translate-x-1/2 rounded-2xl px-3 py-2 uppercase text-white">
          Cabin view
        </span>
      </div>
    </>
  );
};
