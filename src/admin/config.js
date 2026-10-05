export const sections = {
  service: {
    label: "Services",
    singular: "layanan",
    description: "Kelola layanan yang ditawarkan perusahaan.",
    fields: [
      ["title", "Nama layanan", "text", 160, true],
      ["description", "Deskripsi", "textarea", 4000, true],
    ],
  },
  client: {
    label: "Client",
    singular: "klien",
    description: "Tampilkan perusahaan dan mitra yang bekerja sama.",
    fields: [
      ["title", "Nama perusahaan", "text", 160, true],
      ["description", "Deskripsi", "textarea", 4000, true],
      ["link", "Website (opsional)", "url", 500],
    ],
  },
  certificate: {
    label: "Sertifikat",
    singular: "sertifikat",
    description: "Dokumen kepercayaan perusahaan, ditampilkan sebagai gambar.",
    fields: [["title", "Nama sertifikat", "text", 160, true]],
  },
  portfolio: {
    label: "Portofolio",
    singular: "proyek",
    description: "Dokumentasikan pekerjaan dan pengalaman perusahaan.",
    fields: [
      ["title", "Nama proyek", "text", 160, true],
      ["description", "Deskripsi", "textarea", 4000, true],
      ["category", "Kategori (opsional)", "text", 80],
      ["location", "Lokasi (opsional)", "text", 120],
      ["year", "Tahun (opsional)", "text", 4],
    ],
  },
};
