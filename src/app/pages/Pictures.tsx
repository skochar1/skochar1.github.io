import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Dialog, DialogContent, DialogTitle } from "../components/ui/dialog";
import { pictures, yearOf, type Picture } from "../data/pictures";

// Newest year first; pictures keep the order they're listed in.
const picturesByYear = Object.entries(
  pictures.reduce<Record<string, Picture[]>>((groups, picture) => {
    (groups[yearOf(picture)] ??= []).push(picture);
    return groups;
  }, {}),
).sort(([a], [b]) => b.localeCompare(a));

export default function Pictures() {
  const [selected, setSelected] = useState<Picture | null>(null);

  return (
    <section className="mb-14">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Pictures
        </h2>
        <div className="hidden h-px flex-1 bg-gray-200 ml-6 sm:block" />
      </div>

      {picturesByYear.map(([year, yearPictures]) => (
        <div key={year} className="mb-10">
          <h3 className="mb-4 text-xl text-gray-900">{year}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {yearPictures.map((picture) => (
              <figure key={picture.src}>
                <button
                  type="button"
                  onClick={() => setSelected(picture)}
                  className="block w-full overflow-hidden rounded-lg bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                >
                  <ImageWithFallback
                    src={picture.src}
                    alt={picture.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </button>
                {picture.caption && (
                  <figcaption className="mt-2 text-sm text-gray-700">
                    {picture.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      ))}

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="sm:max-w-3xl">
          {selected && (
            <figure>
              <img
                src={selected.src}
                alt={selected.alt}
                className="max-h-[75vh] w-full rounded-md object-contain"
              />
              {selected.caption ? (
                <DialogTitle asChild>
                  <figcaption className="mt-3 text-center text-gray-700 font-normal">
                    {selected.caption}
                  </figcaption>
                </DialogTitle>
              ) : (
                <DialogTitle className="sr-only">{selected.alt}</DialogTitle>
              )}
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
