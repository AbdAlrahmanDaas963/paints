// Digital Art
import paint1 from "./assets/paints/paint1.png";
import paint2 from "./assets/paints/paint2.png";
import paint3 from "./assets/paints/paint3.png";
import paint4 from "./assets/paints/paint4.png";

// Oil Painting
import paint5 from "./assets/paints/paint5.png";
import paint6 from "./assets/paints/paint6.png";
import paint7 from "./assets/paints/paint7.png";

// Acrylic Art
import paint8 from "./assets/paints/paint8.png";
import paint9 from "./assets/paints/paint9.png";
import paint10 from "./assets/paints/paint10.png";

export const categories = [
  {
    id: 1,
    name: "Digital Art",
    description: "Oil-based paints are known for their richness and vibrancy.",
    images: [paint1, paint2, paint3, paint4],
    titles: ["Sunset", "Mountain", "Still Life", "Portrait"],
  },
  {
    id: 2,
    name: "Oil Painting",
    description:
      "Watercolors are water-based paints that create light and translucent effects.",
    images: [paint5, paint6, paint7],
    titles: ["River", "Flowers", "Birds"],
  },
  {
    id: 3,
    name: "Acrylic Art",
    description: "Acrylic paints are fast-drying and versatile.",
    images: [paint8, paint9, paint10],
    titles: ["Abstract", "Urban Landscape", "Night Sky"],
  },
];

// Function to fetch category by ID
export function getCategoryById(id) {
  return categories.find((category) => category.id === id);
}
