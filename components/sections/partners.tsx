export function UniversityPartnersSection() {
  return (
    <section id="partnering-university" className="py-20 md:py-32 flex flex-col items-center relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-green-50 w-full">
        <div
          className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/world-map-dots.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
    </section>
  );
}
