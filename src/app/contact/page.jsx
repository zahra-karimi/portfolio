export default function Contact() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-16 px-6 md:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-brand mb-4">
              Ready for the Next Chapter
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              I am excited to bring my skills and passion to new challenges and
              opportunities.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#contact"
                className="px-6 py-2.5 bg-brand text-white rounded-lg hover:bg-brand-hover transition text-sm"
              >
                Contact Me
              </a>

              <a
                href="/Zahra_karimi_Resume.pdf"
                target="_blank"
                className="px-6 py-2.5 border border-brand text-brand rounded-lg hover:bg-brand-hover hover:text-white transition text-sm"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
