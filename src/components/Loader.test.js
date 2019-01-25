import React from "react";
import { shallow } from "enzyme";

import { Loader } from "./Loader";

describe("<Loader />", () => {
  it("should render", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.exists(".loader")).toEqual(true);
  });
});
