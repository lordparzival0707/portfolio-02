export default function About() {

    return (
        <div className="p-[24px] bg-base-200 flex flex-col gap-16">

            <p className="title text-6xl"> About me </p>
            <p>
                I am currently a third-year computer science student at IT University Andoharanofotsy.
                <br />
                <br />
                I am looking for an internship. Despite my lack of professional experience, I believe I have the necessary skills, both technically and mentally.
            </p>

            <div className="text-center grid grid-cols-2 gap-5">
                <div>
                    <p className="justify-center font-bold text-[32px]">0</p>
                    <p>Experience</p>
                </div>

                <div>
                    <p className="font-bold text-[32px]">10+</p>
                    <p>Projects</p>
                </div>

                <div>
                    <p className="font-bold text-[32px]">8</p>
                    <p>Languages</p>
                </div>

                <div>
                    <p className="font-bold text-[32px]">6</p>
                    <p>Frameworks</p>
                </div>
            </div>


        </div>
    )
}