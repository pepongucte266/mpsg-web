export default {
  /**Hàm lấy file ảnh tương đối */
  getImageUrl: (path: string) => {
    return new URL(`../assets/${path}`, import.meta.url).href;
  },
};
