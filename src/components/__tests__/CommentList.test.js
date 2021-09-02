import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import Root from "Root"; // we make use of redux, so we need to import Root bc Provider tag and store.

// we need to have a way to load data into this redux store, by default it is empty. (normally we do it by using CommentBox)
let wrapped;
beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"],
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates one LI per comment", () => {
  console.log(wrapped.find("li").length);
});
