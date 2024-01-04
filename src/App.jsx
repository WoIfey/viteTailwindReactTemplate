function App() {
  return (
    <div class="flex flex-col justify-center items-center h-dvh bg-slate-100 dark:bg-slate-900 dark:text-white text-black">
      <div className="flex gap-6">
        <a href="https://vitejs.dev/" target="_blank">
          <img src="./vite.svg" alt="Vite Logo" class="w-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
        </a>
        <a href="https://react.dev/" target="_blank">
          <img src="./react.svg" alt="React Logo" class="w-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
        </a>
      </div>
      <h1 class="text-3xl pt-4">Hello Vite + React!</h1>
    </div>
  )
}

export default App
