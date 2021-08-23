import React from 'react';
import { mount } from 'enzyme'; // use for full dom rendering
import CommentBox from 'components/CommentBox';

let wrapped;

// before running "it"
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

// after running "it"
afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  // 1st arg, use the HTML event name, onChange = change.
  // 2nd arg, use a mock event object.
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment'}
  });
  wrapped.update();

  // check the "value" prop in textarea, and see if it's correct.
  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});