import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Button from "../button";

// 测试分组
describe("Button", () => {
  // mount
  test("mount @vue/test-utils", () => {
    // @vue/test-utils
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });

    // 断言
    expect(wrapper.text()).toBe("Button");
  });
});

describe("color", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });

    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-blue-500")
    ).toBe(true);
  });

  test("red", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        color: "red",
      },
    });
    const classes = wrapper.classes().map((v) => v.replace("\n", ""));
    expect(classes.includes("bg-red-500")).toBe(true);
  });
});
