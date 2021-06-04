export default {
  bind: (el, binding, vnode) => {
    if (typeof binding.value !== "function")
      throw 'Incorrect v-lazy value type: should be function';

    const lazyFunction = binding.value;

    function handleIntersect(entry, vnode) {
      if (entry.isIntersecting) {
        observer.disconnect();
        lazyFunction();
      }
    }

    const observer = new IntersectionObserver(function([entry]) {
      handleIntersect(entry, vnode);
    });

    observer.observe(el);
  },
  unbind: () => {
    // this.observer.disconnect();
  }
};

