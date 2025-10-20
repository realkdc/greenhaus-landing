import Image from "next/image";
import QRCode from "qrcode";

type QRProps = {
  url: string;
  alt: string;
  size?: number;
  className?: string;
};

export default async function QR({
  url,
  alt,
  size = 156,
  className
}: QRProps) {
  const dataUrl = await QRCode.toDataURL(url, {
    width: size,
    margin: 1,
    color: {
      dark: "#0b1927ff",
      light: "#ffffffff"
    }
  });

  return (
    <Image
      src={dataUrl}
      alt={alt}
      width={size}
      height={size}
      className={className}
      loading="lazy"
      unoptimized
      sizes={`${size}px`}
    />
  );
}
