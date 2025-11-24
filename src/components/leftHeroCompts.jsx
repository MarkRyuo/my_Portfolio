function LeftHero() {
  return (
    <div className="grid grid-rows-3">
      <div className="w-full h-full pl-2.5 flex flex-col justify-center">
         <p className="text-2xl lg:text-5xl">Hello, I'm</p>
          <p className="text-5xl lg:text-8xl">Jhon Mark</p>
      </div>

      <div className="w-full h-full pl-2.5 flex items-center">
        <p className="text-base border-l-2 px-1">
          I’m a builder of end-to-end web experiences. I started with front-end
          design, but my curiosity led me deeper into servers, databases, and
          APIs. Now, I bring ideas to life from the first pixel on screen to the
          last line of backend logic, always learning, always creating.
        </p>
      </div>

      <div className="flex items-center pl-2.5">
        <a href="" className="text-base border-b-2">
            Download my Resume
        </a>
      </div>
    </div>
  );
}

export default LeftHero;
