import { assertEquals } from "@std/assert";
import { slugify } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(slugify("Some weird seuqence"), "some-weird-seuqence");
});
