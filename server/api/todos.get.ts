export default defineEventHandler(async (event) => {
  return [
    { id: 1, text: "Learn Vue 3", done: true },
    { id: 2, text: "Learn React", done: false },
    { id: 3, text: "Build something awesome", done: false },
  ];
});
