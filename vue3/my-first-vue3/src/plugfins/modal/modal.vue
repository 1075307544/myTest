<Teleport to="body" :disabled="!isTeleport">
    <div v-if="modelValue" class="modal">
        <div
             class="mask"
             :style="style"
             @click="maskClose && !loading && handleCancel()"
             ></div>
        <div class="modal__main">
            <div class="modal__title line line--b">
                <span>{{ title || t("r.title") }}</span>
                <span
                      v-if="close"
                      :title="t('r.close')"
                      class="close"
                      @click="!loading && handleCancel()"
                      >✕</span
                    >
            </div>
            <div class="modal__content">
                <Content v-if="typeof content === 'function'" :render="content" />
                <slot v-else>
                    {{ content }}
                </slot>
            </div>
            <div class="modal__btns line line--t">
                <button :disabled="loading" @click="handleConfirm">
                    <span class="loading" v-if="loading"> ❍ </span>{{ t("r.confirm") }}
                </button>
                <button @click="!loading && handleCancel()">
                    {{ t("r.cancel") }}
                </button>
            </div>
        </div>
    </div>
</Teleport>
<script lang="ts">
setup(props, ctx) {
  let instance = getCurrentInstance(); // 获得当前组件实例
  onBeforeMount(() => {
    instance._hub = {
        
      'on-cancel': () => {},
      'on-confirm': () => {}
    };
  });

  const handleConfirm = () => {
    ctx.emit('on-confirm');
    instance._hub['on-confirm']();
  };
  const handleCancel = () => {
    ctx.emit('on-cancel');
    ctx.emit('update:modelValue', false);
    instance._hub['on-cancel']();
  };

  return {
    handleConfirm,
    handleCancel
  };
}
</script>