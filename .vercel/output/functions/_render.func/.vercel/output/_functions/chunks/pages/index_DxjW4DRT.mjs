/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent } from '../astro_Zaj9g0e4.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  return renderTemplate`${maybeRenderHead()}<header class="relative bg-blue-900 text-white py-3 overflow-hidden"> <div class="container mx-auto flex justify-between items-center"> <!-- Navigation --> <nav class="z-30"> <ul class="flex space-x-4"> <li><a href="/product" class="hover:text-gray-300 transition-colors duration-300">Product</a></li> <li><a href="/features" class="hover:text-gray-300 transition-colors duration-300">Features</a></li> <li><a href="/company" class="hover:text-gray-300 transition-colors duration-300">Company</a></li> </ul> </nav> <!-- Animated Football SVG --> <div class="hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden z-10"> <!-- Insert animated SVG here --> </div> <!-- Title and logo --> <div class="z-30 flex items-center justify-center"> <img src="public/Img/J3E.webp" alt="Logo" class="h-12 mr-3"> <h1 class="text-4xl font-bold leading-none shadow-md">Champions League</h1> </div> <!-- Right-side Navigation --> <nav class="z-30"> <ul class="flex space-x-4"> <li><a href="/more" class="hover:text-gray-300 transition-colors duration-300">More</a></li> <li> <button class="hover:text-gray-300 transition-colors duration-300">
Favourite Team
</button> </li> </ul> </nav> </div> <!-- Background Image or Illustration --> <div class="absolute inset-0 z-0"> <img src="path-to-your-stadium-image.jpg" alt="Stadium" class="w-full h-full object-cover opacity-30"> </div> </header>`;
}, "C:/Users/J3e/J3exLcz/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "data-astro-cid-j7pv25f6": true })} `;
}, "C:/Users/J3e/J3exLcz/src/pages/index.astro", void 0);

const $$file = "C:/Users/J3e/J3exLcz/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
