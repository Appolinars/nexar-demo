export const EventVideos = ({ eventId }: { eventId: string }) => {
  return (
    <>
      <p className="p-8 font-semibold">Video</p>
      <div className="relative mb-1">
        <video className="mb-1 rounded-lg" controls key={`${eventId}_cf`} muted playsInline>
          <source src={`/video/${eventId}_cf.webm`} type="video/webm" />
        </video>
        <span className="absolute left-1/2 top-3 -translate-x-1/2 rounded-2xl bg-secondary/90 px-3 py-2 uppercase text-white">
          Cabin view
        </span>
      </div>
      <div className="relative">
        <video className="rounded-2xl" controls key={`${eventId}_rf`} muted playsInline>
          <source src={`/video/${eventId}_rf.webm`} type="video/webm" />
        </video>
        <span className="absolute left-1/2 top-3 -translate-x-1/2 rounded-2xl bg-secondary/90 px-3 py-2 uppercase text-white">
          Road view
        </span>
      </div>
    </>
  );
};
