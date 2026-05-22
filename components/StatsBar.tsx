const stats = [
  { value: "35+", label: "Anggota relawan" },
  { value: "120+", label: "Buku dibaca" },
  { value: "4", label: "Kegiatan per bulan" },
];

export default function StatsBar() {
  return (
    <section className="border-b-[1.5px] border-[#04342C] bg-[#E1F5EE]">
      <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-8 sm:px-6 md:px-8 lg:grid-cols-3 lg:px-16 xl:px-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="soft-card bg-white px-5 py-5 text-center lg:text-left"
          >
            <p className="font-heading text-4xl text-[#04342C] md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-1 text-base font-bold text-[#5F5E5A]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
