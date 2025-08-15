const QuoteSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Quote */}
        <div>
          <p className="text-2xl mb-6 border-l-4 border-white pl-4 italic">
            “ Stranger, if you passing meet me <br />
            and desire to speak to me, <br />
            why should you not speak to me? <br />
            And why should I not speak to you? ”
          </p>
          <p className="text-2xl text-left font-semibold">- Walt Whitman</p>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-lg uppercase mb-6 tracking-widest">Write to us</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-gray-800 border border-gray-700 text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-800 border border-gray-700 text-white"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 bg-gray-800 border border-gray-700 text-white"
              rows={4}
            />
            <button
              type="submit"
              className="bg-pink-700 text-white px-6 py-2 rounded shadow hover:bg-pink-800"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
