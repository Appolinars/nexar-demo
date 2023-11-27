export const EventVideos = ({ eventId }: { eventId: string }) => {
  return (
    <>
      <p className="p-8 font-semibold">Video</p>
      <video className="mb-1 rounded-2xl" controls key={`${eventId}_cf`}>
        <source src={`/video/${eventId}_cf.webm`} type="video/webm" />
      </video>
      <video className="rounded-2xl" controls key={`${eventId}_rf`}>
        <source src={`/video/${eventId}_rf.webm`} type="video/mp4" />
      </video>
    </>
  );
};
