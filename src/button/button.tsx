import { defineComponent, PropType } from "vue";

export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";
export const propsDef = {
  color: {
    type: String as PropType<IColor>,
    default: "blue", // 设定默认颜色
  },
};

export default defineComponent({
  name: "MButton",
  props: propsDef,
  setup(props, { slots }) {
    return () => (
      <button
        class={`
      py-2
      px-4
      font-semibold
      rounded-lg
      shadow-md
      text-white
      bg-${props.color}-500
      hover:bg-${props.color}-700
      border-none
      cursor-pointer
    `}
      >
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
