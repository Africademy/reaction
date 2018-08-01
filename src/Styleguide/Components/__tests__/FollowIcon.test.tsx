import { mount } from "enzyme"
import React from "react"
import { FollowIcon } from "../FollowIcon"

describe("FollowIcon", () => {
  it("shows follow", () => {
    const wrapper = mount(<FollowIcon />)
    expect(wrapper.find("Follow").length).toBe(1)
    expect(wrapper.find("Following").length).toBe(0)
    expect(wrapper.find("Unfollow").length).toBe(0)
  })

  it("shows unfollow", () => {
    const wrapper = mount(<FollowIcon is_followed />)
    expect(wrapper.find("Following").length).toBe(1)
    expect(wrapper.find("Unfollow").length).toBe(1)
    expect(wrapper.find("Follow").length).toBe(0)
  })
})
