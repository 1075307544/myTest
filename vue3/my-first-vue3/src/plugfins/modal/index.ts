export default {
    install(app) {
        app.config.globalProperties.$create = create
        app.config.globalProperties.$modal = {
            show({
                /* 其他选项 */
                onConfirm,
                onCancel
            }) {
                /* ... */
        
                const { props, _hub } = instance;
        
                const _closeModal = () => {
                    props.modelValue = false;
                    container.parentNode!.removeChild(container);
                };
                // 往 _hub 新增事件的具体实现
                Object.assign(_hub, {
                    async 'on-confirm'() {
                    if (onConfirm) {
                        const fn = onConfirm();
                        // 当方法返回为 Promise
                        if (fn && fn.then) {
                            try {
                                props.loading = true;
                                await fn;
                                props.loading = false;
                                _closeModal();
                            } catch (err) {
                                // 发生错误时，不关闭弹框
                                console.error(err);
                                props.loading = false;
                            }
                        } else {
                            _closeModal();
                        }
                    } else {
                        _closeModal();
                    }
                },
                    'on-cancel'() {
                        onCancel && onCancel();
                        _closeModal();
                    }
            });
        }
    }
}
}