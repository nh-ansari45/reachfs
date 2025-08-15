const ReachWebinar = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">REACH CAD Webinar</h2>
      <hr className="border-t border-gray-300 w-16 mx-auto mb-8" />
      <div className="flex justify-center">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/VIDEO_ID_HERE"
          title="REACH CAD Webinar"
          frameBorder="0"
          allowFullScreen
          className="rounded shadow-lg w-full max-w-5xl"
        ></iframe>
      </div>
    </section>
  );
};

export default ReachWebinar;
