const Testimonials = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Testimonials</h2>
      <hr className="border-t border-gray-300 w-16 mx-auto mb-8" />
      <div className="flex justify-center">
        <video
          controls
          width="800"
          className="rounded shadow-lg w-full max-w-5xl"
        >
          <source src="/videos/testimonial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Testimonials;
