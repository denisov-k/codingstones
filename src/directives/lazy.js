export default {
  bind: (el, binding, vnode) => {
    if (typeof binding.value !== "function")
      throw 'Incorrect v-lazy value type: should be a function';

    const lazyFunction = binding.value;

    function handleIntersect(entry, vnode) {
      if (entry.isIntersecting) {
        observer.disconnect();
        lazyFunction();
      }
    }

    const observerOptions = { threshold: 1, trackVisibility: false, delay: 0, root: vnode.parent.context.$el };

    const observer = new IntersectionObserver(function([entry]) {
      handleIntersect(entry, vnode);
    }, observerOptions);

    observer.observe(el);
  },
  unbind: () => {
    // this.observer.disconnect();
  }
};

