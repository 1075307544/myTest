import { reactive, onMounted, onUnmounted } from "vue";

export function useMouseMove() {
  //   const x = ref(0);
  //   const y = ref(0);
  const obj = reactive({
    x: 0,
    y: 0,
  });
  function move(e: MouseEvent) {
    obj.x = e.pageX;
    obj.y = e.pageY;
  }
  onMounted(() => {
    window.addEventListener("mousemove", move);
  });
  onUnmounted(() => {
    window.removeEventListener("mousemove", move);
  });
  return obj;
}
