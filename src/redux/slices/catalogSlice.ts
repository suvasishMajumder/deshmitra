// redux/slices/catalogSlice.js
import { createSlice } from '@reduxjs/toolkit';



interface SubItem {
  name: string;
  image: string;
  description: string;
  priceRange: string;
}

interface Category {
  name: string;
  description: string;
  image: string;
  subItems: SubItem[];
}

interface Catalog {
  name: string;
  image: string;
  colors: string[];
  categories: Category[];
}

interface CatalogState {
  catalogs: Catalog[];
}

const initialState: CatalogState ={
  catalogs : [
  {
    name: "Rice",
    image: "/RiceCategory.webp",
    colors: ["#ff4d4d", "#ffa500", "#8b4513"],
    categories: [
      {
        name: "Steam",
        description: "Steamed rice varieties, retaining nutrients and texture.",
        image: "/1121 Steam.webp",
        subItems: [
          { name: "1121 Steam", image: "/1121 Steam.webp", description: "Steamed version, retains nutrients and texture. Price: ₹75,000 - ₹90,000", priceRange: "₹75,000 - ₹90,000" },
          { name: "1718 Steam", image: "/1718 Steam.webp", description: "Steamed version, retains nutrients. Price: ₹63,000 - ₹87,000", priceRange: "₹63,000 - ₹87,000" },
          { name: "1509 Steam", image: "/1509 Steam.webp", description: "Steamed version, retains texture. Price: ₹66,000 - ₹78,000", priceRange: "₹66,000 - ₹78,000" },
          { name: "1401 Steam", image: "/1401 Steam.webp", description: "Steamed version, nutrient retention. Price: ₹69,000 - ₹88,000", priceRange: "₹69,000 - ₹88,000" },
          { name: "PUSA Steam", image: "/Pusa Steam.webp", description: "Steamed version, retains nutrients. Price: ₹58,000 - ₹82,000", priceRange: "₹58,000 - ₹82,000" },
          { name: "Traditional Steam", image: "/Rice Traditional.webp", description: "Steamed version, preserves flavor. Price: ₹83,000 - ₹109,000", priceRange: "₹83,000 - ₹109,000" },
          { name: "Sugandha Steam", image: "/sugandha-steam-rice-29.webp", description: "Steamed version, retains texture. Price: ₹56,000 - ₹66,000", priceRange: "₹56,000 - ₹66,000" },
          { name: "Sharbati Steam", image: "/Sharbati Steam.webp", description: "Steamed version, perfect for daily use. Price: ₹51,000 - ₹62,000", priceRange: "₹51,000 - ₹62,000" },
          { name: "Sona Masoori Steam", image: "/Soona Mansoori Steam.webp", description: "Steamed version, retains texture. Price: ₹51,000 - ₹52,000", priceRange: "₹51,000 - ₹52,000" },
          { name: "Parmal Steam (Short-Grain)", image: "/Parmal Steam.webp", description: "Steamed version, retains texture. Price: ₹46,000 - ₹51,000", priceRange: "₹46,000 - ₹51,000" },
          { name: "RH-10 Steam (Short-Grain)", image: "/rh-10 steam.webp", description: "Steamed version, ideal for sticky dishes. Price: ₹42,000 - ₹55,000", priceRange: "₹42,000 - ₹55,000" },
          { name: "PR 11/PR 14 Steam (Traditional-Grain)", image: "/Pr11 14 Steam.webp", description: "Steamed version, preserves flavor. Price: ₹48,000 - ₹52,500", priceRange: "₹48,000 - ₹52,500" },
          { name: "Taj Steam ", image: "/Taj Steam.webp", description: "Steamed version, preserves flavor. Price: ₹42,000 - ₹55,000", priceRange: "₹42,000 - ₹55,000" },
        ]
      },
      {
        name: "Sella",
        description: "Parboiled rice varieties with enhanced nutritional value.",
        image: "/1121 sella.webp",
        subItems: [
          { name: "1121 Sella", image: "/1121 sella.webp", description: "Parboiled version with enhanced nutritional value. Price: ₹78,000 - ₹92,000", priceRange: "₹78,000 - ₹92,000" },
          { name: "1718 Sella", image: "/1718 Sella.webp", description: "Parboiled version, nutrient-rich. Price: ₹66,000 - ₹89,000", priceRange: "₹66,000 - ₹89,000" },
          { name: "1509 Sella", image: "/1509 Sella.webp", description: "Parboiled version, durable. Price: ₹69,000 - ₹80,000", priceRange: "₹69,000 - ₹80,000" },
          { name: "1401 Sella", image: "/1401 Sella.webp", description: "Parboiled version, enhanced nutrition. Price: ₹72,000 - ₹90,000", priceRange: "₹72,000 - ₹90,000" },
          { name: "PUSA Sella", image: "/pusa Sella.webp", description: "Parboiled version, nutrient-rich. Price: ₹61,000 - ₹84,000", priceRange: "₹61,000 - ₹84,000" },
          { name: "Sugandha Sella", image: "/sugandha-white-sella-basmati-rice.webp", description: "Parboiled version, durable. Price: ₹59,000 - ₹68,000", priceRange: "₹59,000 - ₹68,000" },
          { name: "Sharbati Sella", image: "/sharbati sella.webp", description: "Parboiled version, nutrient-rich. Price: ₹54,000 - ₹65,000", priceRange: "₹54,000 - ₹65,000" },
          { name: "Sona Masoori Sella", image: "/Rice Medium.webp", description: "Parboiled version, durable. Price: ₹54,000 - ₹53,000", priceRange: "₹54,000 - ₹53,000" },
          { name: "PR 11/PR 14 Sella (Short-Grain)", image: "/Pr11 Sella.webp", description: "Parboiled version, enhances stickiness. Price: ₹51,000 - ₹55,500", priceRange: "₹51,000 - ₹55,500" },
          { name: "Parmal Sella (Short-Grain)", image: "/Pr Sella.webp", description: "Parboiled version, durable. Price: ₹49,000 - ₹53,000", priceRange: "₹49,000 - ₹53,000" },
          { name: "RH-10 Sella (Short-Grain)", image: "/RH-10 sella.webp", description: "Parboiled version, enhances stickiness. Price: ₹45,000 - ₹58,000", priceRange: "₹45,000 - ₹58,000" },
          { name: "Taj Sella (Traditional-Grain)", image: "/Taj Sella.webp", description: "Parboiled version, nutrient-rich. Price: ₹45,000 - ₹58,000", priceRange: "₹45,000 - ₹58,000" },
        ]
      },
      {
        name: "Golden",
        description: "Golden-hued premium rice varieties, visually appealing.",
        image: "/Golden.webp",
        subItems: [
          { name: "1121 Golden", image: "/Golden.webp", description: "Golden-hued premium rice, visually appealing. Price: ₹80,000 - ₹95,000", priceRange: "₹80,000 - ₹95,000" },
          { name: "1718 Golden", image: "/1718 Golden.webp", description: "Golden-hued premium rice. Price: ₹68,000 - ₹91,000", priceRange: "₹68,000 - ₹91,000" },
          { name: "1509 Golden", image: "/1509 Golden.webp", description: "Golden-hued premium rice. Price: ₹71,000 - ₹82,000", priceRange: "₹71,000 - ₹82,000" },
          { name: "1401 Golden", image: "/1401 golden.webp", description: "Golden-hued premium rice. Price: ₹74,000 - ₹92,000", priceRange: "₹74,000 - ₹92,000" },
          { name: "PUSA Golden", image: "/Pusa Golden.webp", description: "Golden-hued premium rice. Price: ₹63,000 - ₹86,000", priceRange: "₹63,000 - ₹86,000" },
          { name: "Sugandha Golden", image: "/Sugandha Golden Sella.webp", description: "Golden-hued premium rice. Price: ₹61,000 - ₹70,000", priceRange: "₹61,000 - ₹70,000" },
          { name: "Sharbati Golden", image: "/sharbati Golden sella.webp", description: "Golden-hued premium rice. Price: ₹56,000 - ₹67,000", priceRange: "₹56,000 - ₹67,000" },
          { name: "Sona Masoori Golden", image: "/sona mansoori golden.webp", description: "Golden-hued premium rice. Price: ₹56,000 - ₹54,000", priceRange: "₹56,000 - ₹54,000" },
          { name: "PR 11/PR 14 Golden (Short-Grain)", image: "/pr11 14 golden.webp", description: "Golden-hued premium sticky rice. Price: ₹53,000 - ₹57,500", priceRange: "₹53,000 - ₹57,500" },
          { name: "Parmal Golden (Short-Grain)", image: "/parmal Golden.webp", description: "Golden-hued premium rice. Price: ₹51,000 - ₹55,000", priceRange: "₹51,000 - ₹55,000" },
          { name: "RH-10 Golden (Short-Grain)", image: "/RH-10 Golden.webp", description: "Golden-hued premium sticky rice. Price: ₹47,000 - ₹60,000", priceRange: "₹47,000 - ₹60,000" },
          { name: "PR 11/PR 14 Golden (Traditional-Grain)", image: "/pr11 14 golden.webp", description: "Golden-hued premium rice. Price: ₹53,000 - ₹57,500", priceRange: "₹53,000 - ₹57,500" },
        ]
      },
      {
        name: "Raw",
        description: "Unprocessed rice varieties, rich in natural flavor.",
        image: "/1121 Raw.webp",
        subItems: [
          { name: "1121 Raw", image: "/1121 Raw.webp", description: "Unprocessed version, rich in natural flavor. Price: ₹70,000 - ₹85,000", priceRange: "₹70,000 - ₹85,000" },
          { name: "1718 Raw", image: "/1718 Raw.webp", description: "Unprocessed, natural flavor. Price: ₹58,000 - ₹82,000", priceRange: "₹58,000 - ₹82,000" },
          { name: "1509 Raw", image: "/1509 Raw.webp", description: "Unprocessed, natural taste. Price: ₹61,000 - ₹73,000", priceRange: "₹61,000 - ₹73,000" },
          { name: "1401 Raw", image: "/1401 Raw.webp", description: "Unprocessed, rich flavor. Price: ₹64,000 - ₹83,000", priceRange: "₹64,000 - ₹83,000" },
        ]
      },
    ]
  },
  {
    name: "Salt",
    image: "SALTCATALOG.webp",
    colors: ["#d2a679", "#8b4513", "#ffd700"],
    categories: [
      { name: "Raw Salt", description: "Minimally processed, retains natural minerals. Price: ₹1,650 - ₹2000 per metric ton (50 kg bag)", image: "/Raw salt .webp", subItems: [{ name: "Raw Salt", image: "/Raw salt .webp", description: "Retains natural minerals. Price: ₹1,650", priceRange: "₹1,650 - ₹2000" }] },
      { name: "Industrial Salt", description: "High purity, used in chemical production. Price: ₹1700 - 2400 per metric ton (40 kg bag)", image: "/Industrial Salt.webp", subItems: [{ name: "Industrial Salt", image: "/Industrial Salt.webp", description: "Used in de-icing. Price: ₹2,300", priceRange: "₹1700 - ₹2400" }] },
      { name: "Washed Variants", description: "Purified through washing, suitable for culinary use. Price:  ₹1700 - 2400 per metric ton (40 kg bag)", image: "/Washesd Varient.webp", subItems: [{ name: "Washed Salt", image: "/Washesd Varient.webp", description: "Culinary use. Price: ₹2,000", priceRange: " ₹1700 - ₹2400" }] },
      {
        name: "Crystal Salt",
        description: "Coarse crystals, used in gourmet cooking. Price: ₹1,900 per metric ton (40 kg bag)",
        image: "/Granuals.webp",
        subItems: [
          { name: "Sooji Dark Pink Salt", description: "Dark pink coarse crystals for gourmet cooking. Price: ₹27 per kg", image: "/Lahori Sooji Dark Pink.webp", priceRange: "₹27 - ₹30" },
          { name: "Sooji Rose Pink Salt", description: "Rose pink coarse crystals for gourmet cooking. Price: ₹27 per kg", image: "/Khrwa Sooji Rose Pink.webp", priceRange: "₹27 - ₹30" },
          { name: "Red Granuals", description: "Red coarse granules for gourmet cooking. Price:₹36 per kg", image: "/Granuals.webp", priceRange: "₹36 - ₹40" },
          { name: " Suji", description: "Lahori-style coarse crystals for gourmet cooking. Price: ₹27 per kg", image: "/Lahori Sooji.webp", priceRange: "₹27 - ₹30" },
          { name: "Granules", description: "Standard coarse granules for gourmet cooking. Price: ₹37 per kg", image: "/White Granuals.webp", priceRange: "₹37 - ₹40" },
          { name: "Light Pink Suji", description: "Light pink coarse crystals for gourmet cooking. Price: ₹27 per kg", image: "/Light pink sooji.webp", priceRange: "₹27 - ₹30" },
          { name: "Red Lumps", description: "Red lump crystals for gourmet cooking. Price: ₹23 per kg", image: "/Red Lump.webp", priceRange: "₹23 - ₹30" },
          { name: " Light Suji", description: "Light Lahori-style coarse crystals for gourmet cooking. Price: ₹27 per kg", image: "/Lahori Light Sooji.webp", priceRange: "₹27 - ₹30" },
          { name: " Lumps", description: "Kherwa lump crystals for gourmet cooking. Price: ₹19 per kg", image: "/Kherwa Lumps.webp", priceRange: "₹19 - ₹23" },
          { name: "Lumps", description: "Lahori lump crystals for gourmet cooking. Price: ₹18 per kg", image: "/Lahori Lump.webp", priceRange: "₹18 - ₹23" },
          { name: "Sooji Grade B-", description: "Grade B- Kherwa coarse crystals for gourmet cooking. Price: ₹27 per kg", image: "/Kherwa Sooji Grade -B.webp", priceRange: "₹27 - ₹30" },
          { name: "Black Salt Lumps", description: "Black salt lump crystals for gourmet cooking. Price: ₹31 per kg", image: "/Balck Salt Lumps.webp", priceRange: "₹311 - ₹35" },
          { name: "Powders", description: "Finely ground crystal salt for gourmet cooking. Price: ₹25 per kg", image: "/Powder.webp", priceRange: "₹27 - ₹30" },
          { name: "Soji", description: "Soji-style coarse crystals for gourmet cooking. Price: ₹29 per kg", image: "/Sooji.webp", priceRange: "₹29 - ₹34" },
        ]
      },
      { name: "Refined Salt", description: "Highly processed, pure white table salt. Price: ₹3,100 per metric ton (40 kg bag)", image: "/refined salt.webp", subItems: [{ name: "Refined Free Flow Salt", image: "/refined salt.webp", description: "Common table salt. Price: ₹3,100", priceRange: "₹3100 - ₹3500" }] },
      { name: "Iodized Salt", description: "Refined with added iodine to prevent deficiency. Price: ₹3,500 per metric ton (40 kg bag)", image: "/Iodised Salt.webp", subItems: [{ name: "Refined Iodized Free Flow Salt", image: "/115.webp", description: "Prevents iodine deficiency. Price: ₹4,000", priceRange: "₹4000 - ₹4500" }, { name: "Refined Iodized Free Flow Salt", image: "/116.webp", description: "Prevents iodine deficiency. Price: ₹3,500", priceRange: "₹4000 - ₹4500" }, { name: "Refined Iodized Free Flow Salt", image: "/114.webp", description: "Prevents iodine deficiency. Price: ₹3,500", priceRange: "₹4000 - ₹4500" }, { name: "Refined Iodized Free Flow Salt", image: "/113.webp", description: "Prevents iodine deficiency. Price: ₹3,500", priceRange: "₹4000 - ₹4500" }, { name: "Refined Iodized Free Flow Salt", image: "/112.webp", description: "Prevents iodine deficiency. Price: ₹3,500", priceRange: "₹4000 - ₹4500" }, { name: "Refined Iodized Free Flow Salt", image: "/111.webp", description: "Prevents iodine deficiency. Price: ₹3,500", priceRange: "₹4000 - ₹4500" }, { name: "Refined Iodized Free Flow Salt", image: "/Iodised Salt.webp", description: "Prevents iodine deficiency. Price: ₹3,500", priceRange: "₹4000 - ₹4500" },] },
    ]
  },
  {
    name: "Sugar",
    image: "/SugarCATALOG.webp",
    colors: ["#ffd700", "#32cd32", "#ff4500"],
    categories: [
      { name: "White Sugar", description: "Refined and granulated for everyday cooking.", image: "/white sugar.webp", subItems: [{ name: "White Sugar", description: "Refined granulated sugar. Price: Not specified", image: "/white sugar.webp", priceRange: "Sumit Inquiry For Rates" }] },
      { name: "Brown Sugar", description: "Contains molasses, adds caramel flavor.", image: "/brownsugar eatable.webp", subItems: [{ name: "Brown Sugar", image: "/brownsugar eatable.webp", description: "With molasses. Price: Not specified", priceRange: "Sumit Inquiry For Rates" }] },
      { name: "Jaggery", description: "Unrefined sugar made from cane, traditional sweetener.", image: "/jaggry.webp", subItems: [{ name: "Jaggery", image: "/jaggry.webp", description: "Traditional cane sugar. Price: Not specified", priceRange: "Sumit Inquiry For Rates" }] },
    ]
  },
  {
    name: "Spices",
    image: "/SpicesCatalog.webp",
    colors: ["#ff4d4d", "#ffa500", "#8b4513"],
    categories: [
      {
        name: "Whole Spices",
        description: "Unprocessed seeds or pods for authentic flavor.",
        image: "/Whole Spice.webp",
        subItems: [
          { name: "Cinnamon Sticks", description: "For flavoring liquids. Price:₹160 - 400 ", image: "/cinennimon cigar.webp", priceRange: "₹160 - 400" },
          { name: "Cardamom", description: "Aromatic quality. Price: ₹2000 - 3400 ", image: "/Cardamom.webp", priceRange: "₹2000 - 3400" },
          { name: "Black Pepper (Whole)", description: "Sharp flavor. Price: ₹650 - 850 per 1000kg", image: "/BlackPepper.webp", priceRange: "₹650 - 850" },
          { name: "Ajwaeen", description: "Earthy flavor. Price: ₹130 - 250 per 1000kg", image: "/Ajwaineen.webp", priceRange: "₹130 - 250" },
          { name: "Clove", description: "Earthy flavor. Price: ₹700-  1200 per 1000kg", image: "/clove.webp", priceRange: "₹700-  1200" },
          { name: "Mace", description: "Earthy flavor. Price: ₹1600 - 2500 per 1000kg", image: "/Mace.webp", priceRange: "₹1600 - 2500" },
          { name: "Jeera", description: "Earthy flavor. Price: ₹180 - 310 per 1000kg", image: "/Jeera.webp", priceRange: "₹₹180 - 310" },
          { name: "Red Chilli", description: "Earthy flavor. Price: ₹70 - 270 per 1000kg", image: "/Red Chilli.webp", priceRange: "₹70 - 270" },
        ]
      },
      {
        name: "Ground Spices",
        description: "Powdered forms for convenience.",
        image: "/Spices Powder.webp",
        subItems: [
          { name: "Turmeric Powder", image: "/Turmeric Powder.webp", description: "Health benefits. Price: ₹150 - 300 per 1000kg", priceRange: "₹150 - 300" },
          { name: "Chili Powder (Mirch)", image: "/red powder chilli.webp", description: "Adds heat. Price: ₹670 - 1200 1000kg", priceRange: "670 - 1200" },
          { name: "Coriander Powder", image: "/corriender powder.webp", description: "Citrusy flavor. Price: ₹110 - 310 per 1000kg", priceRange: "₹110 - 310" },
          { name: "Black Pepper Powder", image: "/black pepper powder Image.webp", description: "Intense flavor. Price: ₹670 - 1300 per 1000kg", priceRange: "₹670 - 1300" },
        ]
      },
      {
        name: "Spice Blends",
        description: "Mixed spices for enhanced taste.",
        image: "/spices blend.webp",
        subItems: [
          { name: "Garam Masala (Economical & Special)", image: "/Garam Masala.webp", description: "Aromatic blend. Price: ₹280-₹480 per 1000kg", priceRange: "₹280 - ₹480" },
          { name: "Za'atar", image: "/zaatar masala.webp", description: "Middle Eastern blend. Price: Not specified", priceRange: "Submit Request For Rates" },
          { name: "Chicken Masala", image: "/chicken masala.webp", description: "For chicken dishes. Price: ₹380 per 1000kg", priceRange: "₹380 -700" },
          { name: "Meat Masala", image: "/Meat Masala.webp", description: "For meat dishes. Price: ₹380 per 1000kg", priceRange: "₹380-700" },
        ]
      },
    ]
  },
  {
    name: "Dry Fruits",
    image: "/DryfruitsCatalog.webp",
    colors: ["#d2a679", "#8b4513", "#ffd700"],
    categories: [
      {
        name: "Nuts",
        description: "Rich in healthy fats.",
        image: "/Nuts.jpeg",
        subItems: [
          { name: "Almonds", image: "/Almond.webp", description: "Great for snacking. Price: Not specified", priceRange: "Submit Request For Rates" },
          { name: "Cashews", image: "/kaju.webp", description: "Used in desserts. Price: Not specified", priceRange: "Submit Request For Rates" },
          { name: "Walnuts", image: "/Walnut.webp", description: "High in omega-3s. Price: Not specified", priceRange: "Submit Request For Rates" },
        ]
      },
      {
        name: "Dried Fruits",
        description: "Dehydrated for long shelf life.",
        image: "/Dried Fruits.jpeg",
        subItems: [
          { name: "Raisins", image: "/kismiss.webp", description: "Sweet and chewy. Price: Not specified", priceRange: "Submit Request For Rates" },
          { name: "Anjeer", image: "/anjeer.webp", description: "Tangy and sweet. Price: Not specified", priceRange: "Submit Request For Rates" },
          { name: "Dates", image: "/dates.webp", description: "Natural sweetener. Price: Not specified", priceRange: "Submit Request For Rates" },
        ]
      },
      {
        name: "Seeds",
        description: "Nutritious edible seeds.",
        image: "/sseds.jpeg",
        subItems: [
          { name: "Pumpkin Seeds", image: "/pumpkin seeds.webp", description: "For salads. Price: Not specified", priceRange: "Submit Request For Rates" },
          { name: "Sunflower Seeds", image: "/sun flower seeds.webp", description: "For baking. Price: Not specified", priceRange: "Submit Request For Rates" },
          { name: "Chia Seeds", image: "/chia seeds.webp", description: "High in fiber. Price: Not specified", priceRange: "Submit Request For Rates" },
        ]
      },
    ]
  },
  {
    name: "Cooking Oil",
    image: "/OILCATALOG.webp",
    colors: ["#ffd700", "#32cd32", "#ff4500"],
    categories: [
      {
        name: "Vegetable Oil",
        description: "Neutral oils for frying.",
        image: "/vegetable oil.webp",
        subItems: [
          { name: "Vegetable Oil", image: "/vegetable oil.webp", description: "Soybean or sunflower. Price: Not specified", priceRange: "Submit Request For Rates" }
        ]
      },
      {
        name: "Olive Oil",
        description: "Extracted from olives for gourmet cooking.",
        image: "/olive oil.webp",
        subItems: [
          { name: "Olive Oil", image: "/olive oil.webp", description: "Gourmet use. Price: Not specified", priceRange: "Submit Request For Rates" }
        ]
      },
      {
        name: "Specialty Oils",
        description: "Unique oils for diverse cuisines.",
        image: "/Specialty.jpeg",
        subItems: [
          { name: "Coconut Oil", image: "/coconut oil.webp", description: "Rich flavor. Price: Not specified", priceRange: "Submit Request For Rates" },
          { name: "Mustard Oil", image: "/musterd Oil.webp", description: "Pungent flavor. Price: Not specified", priceRange: "Submit Request For Rates" },
          { name: "Sesame Oil", image: "/sesam oil.webp", description: "Nutty flavor. Price: Not specified", priceRange: "Submit Request For Rates" },
        ]
      },
    ]
  },
]
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCatalogs: (state, action) => {
      state.catalogs = action.payload;
    },
  }
});

export const { setCatalogs } = catalogSlice.actions;
export default catalogSlice.reducer;
