import { assertEquals } from "@std/assert";
import { slugify } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(slugify("Some weird seuqence"), "some-weird-seuqence");
  assertEquals(
    slugify("The Netherlands named in top 10 for world’s friendliest drivers"),
    "the-netherlands-named-top-10-worlds-friendliest-drivers",
  );
  assertEquals(slugify("Ää-Ëë-Ïï-Öö-Üü"), "aa-ee-ii-oo-uu");
});
