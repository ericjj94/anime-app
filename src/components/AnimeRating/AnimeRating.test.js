import chai, { expect } from "chai";
import React from "react";
import { mount } from "../../helpers/helpers";
import AnimeRating from "./AnimeRating";

describe("AnimeRating Testing", () => {
  it("Should return a component if rating is present", () => {
    const { component } = mount(<AnimeRating rating={4.5} />);
    expect(component.length).to.equal(1);
  });
  it("Should return null if rating is not present in props", () => {
    const { component } = mount(<AnimeRating />);
    expect(component.isEmptyRender()).to.equal(true);
  });
});
