import { defineComponent, PropType } from "vue";
import "./button.css";

export type IType =
  | "primary"
  | "ghost"
  | "dashed"
  | "link"
  | "text"
  | "default";

export type IUse = "success" | "warn" | "danger";

export type ISize = "large" | "middle" | "small";

export const propsDef = {
  type: {
    type: String as PropType<IType>,
    default: "default",
  },
  use: {
    type: String as PropType<IUse>,
    default: "", // 设定默认颜色
  },
  size: {
    type: String as PropType<ISize>,
    default: "middle",
  },
};

export default defineComponent({
  name: "MButton",
  props: propsDef,
  setup(props, ctx) {
    return () => (
      <button
        class={`mo-btn mo-btn-${props.type} ${
          props.use ? `mo-btn-${props.use}` : ""
        } mo-btn-size-${props.size}`}
        onClick={ctx.emit("click") as any}
      >
        <span>{ctx.slots.default ? ctx.slots.default() : ""}</span>
      </button>
    );
  },
});
