import Badge from "../ui/Badge";

function Skills() {
  return (
    <section id="Skills">
      <article className="skills-article">
        <div>
          <h1 className="subtitle light">Skills</h1>
        </div>
        <div>
          <p className="description light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="flex flex-col w-full px-8 pt-8">
          <div>
            <h1 className="subtitle light">UI/UX</h1>
            <div className="grid grid-cols-12 mt-3">
              <div>
                <Badge text="Figma" />
                <div className="mt-2">
                  <Badge text="Adobe XD" />
                </div>
              </div>
              <div className="col-start-3">
                <Badge text="Illustrator" />
                <div className="mt-2">
                  <Badge text="Photoshop" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h1 className="subtitle light">Languages</h1>
            <div className="grid grid-cols-12 mt-3">
              <div>
                <Badge text="C#" />
                <div className="mt-2">
                  <Badge text="Java" />
                </div>
              </div>
              <div className="col-start-3">
                <Badge text="Python" />
                <div className="mt-2">
                  <Badge text="Javascript" />
                </div>
              </div>
              <div className="col-start-5">
                <Badge text="Dart" />
                <div className="mt-2">
                  <Badge text="Swift" />
                </div>
              </div>
              <div className="col-start-7">
                <Badge text="Kotlin" />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h1 className="subtitle light">Frameworks</h1>
            <div className="grid grid-cols-12 mt-3">
              <div>
                <Badge text=".NET" />
                <div className="mt-2">
                  <Badge text="Spring" />
                </div>
              </div>
              <div className="col-start-3">
                <Badge text="Django" />
                <div className="mt-2">
                  <Badge text="React" />
                </div>
              </div>
              <div className="col-start-5">
                <Badge text="Angular" />
                <div className="mt-2">
                  <Badge text="Vue" />
                </div>
              </div>
              <div className="col-start-7">
                <Badge text="Flutter" />
                
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Skills;
