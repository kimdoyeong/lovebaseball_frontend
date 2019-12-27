async function apiWrap(func: () => any): Promise<typeof func | undefined> {
  try {
    return await Promise.resolve(func());
  } catch (e) {
    if (e.response && e.response.data) {
      alert(e.response.data.message);
    } else {
      alert("오류가 발생했습니다.");
      console.error(e);
    }
  }
}

export default apiWrap;
