import { describe, it, expect } from "vitest";
import { WEBHOOK_RECIPES, RECIPE_CATEGORIES } from "../../lib/webhookRecipes";

describe("webhookRecipes", () => {
  it("has at least 10 recipes", () => {
    expect(WEBHOOK_RECIPES.length).toBeGreaterThanOrEqual(10);
  });

  it("every recipe has a unique id", () => {
    const ids = WEBHOOK_RECIPES.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every recipe has required fields", () => {
    for (const r of WEBHOOK_RECIPES) {
      expect(r.id).toBeTruthy();
      expect(r.name).toBeTruthy();
      expect(r.description).toBeTruthy();
      expect(r.icon).toBeTruthy();
      expect(r.category).toBeTruthy();
      expect(r.service).toBeTruthy();
      expect(r.trigger_type).toBeTruthy();
      expect(r.params).toBeDefined();
      expect(typeof r.cooldown).toBe("number");
      expect(r.cooldown).toBeGreaterThan(0);
      expect(r.actionHint).toBeTruthy();
    }
  });

  it("all categories reference valid values", () => {
    const validCategories = ["focus", "relax", "alert", "logging", "smart-home", "social"];
    for (const r of WEBHOOK_RECIPES) {
      expect(validCategories).toContain(r.category);
    }
  });

  it("all service types are valid", () => {
    const validServices = ["generic", "ifttt", "zapier"];
    for (const r of WEBHOOK_RECIPES) {
      expect(validServices).toContain(r.service);
    }
  });

  it("IFTTT recipes have iftttEvent defined", () => {
    const iftttRecipes = WEBHOOK_RECIPES.filter((r) => r.service === "ifttt");
    expect(iftttRecipes.length).toBeGreaterThan(0);
    for (const r of iftttRecipes) {
      expect(r.iftttEvent).toBeTruthy();
    }
  });

  it("all trigger types are valid", () => {
    const validTriggers = [
      "band_power_above",
      "band_power_below",
      "amplitude_above",
      "amplitude_below",
      "band_ratio_above",
      "band_ratio_below",
    ];
    for (const r of WEBHOOK_RECIPES) {
      expect(validTriggers).toContain(r.trigger_type);
    }
  });

  it("band_power recipes have a band param", () => {
    const bandRecipes = WEBHOOK_RECIPES.filter(
      (r) => r.trigger_type.startsWith("band_power"),
    );
    for (const r of bandRecipes) {
      expect(r.params.band).toBeTruthy();
    }
  });

  it("band_ratio recipes have numerator and denominator", () => {
    const ratioRecipes = WEBHOOK_RECIPES.filter(
      (r) => r.trigger_type.startsWith("band_ratio"),
    );
    for (const r of ratioRecipes) {
      expect(r.params.numerator).toBeTruthy();
      expect(r.params.denominator).toBeTruthy();
    }
  });
});

describe("RECIPE_CATEGORIES", () => {
  it("has an 'all' category first", () => {
    expect(RECIPE_CATEGORIES[0].id).toBe("all");
  });

  it("each category has id, label, and icon", () => {
    for (const c of RECIPE_CATEGORIES) {
      expect(c.id).toBeTruthy();
      expect(c.label).toBeTruthy();
      expect(c.icon).toBeTruthy();
    }
  });

  it("unique category ids", () => {
    const ids = RECIPE_CATEGORIES.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
