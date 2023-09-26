$modal.show({
    title: '演示 h 函数',
    content(h) {
      return h(
        'div',
        {
          style: 'color:red;',
          onClick: ($event: Event) => console.log('clicked', $event.target)
        },
        'hello world ~'
      );
    }
  });
  $modal.show({
    title: '演示 jsx 语法',
    content() {
      return (
        <div
          onClick={($event: Event) => console.log('clicked', $event.target)}
        >
          hello world ~
        </div>
      );
    }
  });