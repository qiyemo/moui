import { defineComponent, PropType } from 'vue';
import { useNamespace } from '@moui/hooks';

export type IType = 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
export type IUse = 'success' | 'warn' | 'danger';
export type ISize = 'large' | 'middle' | 'small';

const ns = useNamespace('button');

export const propsDef = {
  type: {
    type: String as PropType<IType>,
    default: 'default'
  },
  use: {
    type: String as PropType<IUse>,
    default: '' // 设定默认颜色
  },
  size: {
    type: String as PropType<ISize>,
    default: 'middle'
  }
};

export default defineComponent({
  name: 'MoButton',
  props: propsDef,
  emits: ['click'],
  setup(props, ctx) {
    return () => (
      <button ref="_ref" class={[ns.b()]} onClick={ctx.emit('click') as any}>
        <span>{ctx.slots.default ? ctx.slots.default() : ''}</span>
      </button>
    );
  }
});
