import { Helmet } from "react-helmet-async";
import { memo } from "react";

function SEO({
  title = "HIMARPL",
  description = "HIMARPL adalah organisasi kemahasiswaan program studi Rekayasa Perangkat Lunak Universitas Pendidikan Indonesia. Wujud kebersamaan, kolaborasi, dedikasi, inspirasi, inovasi, dan prestasi kami, mahasiswa RPL.",
  image = "https://www.himarpl.org/himarpl/logo_hima.png",
  url = "https://www.himarpl.org",
  keywords = "HIMARPL, himarpl, Devoria, UPI, RPL, Himpunan Mahasiswa, Mahasiswa, Universitas Pendidikan Indonesia, Rekayasa Perangkat Lunak, UPI Cibiru, himarpl.org, himarpl org",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default memo(SEO);
