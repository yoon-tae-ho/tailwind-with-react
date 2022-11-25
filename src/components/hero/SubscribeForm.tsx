const SubscribeForm = () => {
  return (
    <form className="mt-2">
      <input
        className="backdrop-blur-md bg-white/30 p-2 rounded-sm border border-white/40 placeholder:text-zinc-500 font-bold text-sky-900 outline-pink-500 caret-pink-500"
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        className="px-4 py-2 ml-2 bg-pink-500 font-bold rounded-sm cursor-pointer hover:bg-sky-900 transition-colors hover:shadow-lg"
        type="submit"
        value="Subscribe"
      />
    </form>
  );
};

export default SubscribeForm;
