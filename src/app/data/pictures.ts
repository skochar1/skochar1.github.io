// To add a picture: drop the file in its year folder in /public (e.g.
// public/2026_pics/) and add an entry here. `src` is the path relative to
// /public. The gallery groups pictures by the year the folder name starts with.
export type Picture = {
  src: string;
  alt: string;
  caption?: string;
};

export const pictures: Picture[] = [
  { src: "2026_pics/IMG_3150.jpg", alt: "Photo from 2026" },
  { src: "2026_pics/IMG_3162.jpg", alt: "Photo from 2026" },
  { src: "2026_pics/IMG_3233.jpg", alt: "Photo from 2026" },
  { src: "2026_pics/IMG_3698.jpeg", alt: "Photo from 2026" },
  { src: "2026_pics/IMG_3831.jpg", alt: "Photo from 2026" },
];

// Year comes from the folder name, e.g. "2026_pics/IMG_1.jpg" -> "2026".
export function yearOf(picture: Picture): string {
  return picture.src.match(/^(\d{4})/)?.[1] ?? "Other";
}
